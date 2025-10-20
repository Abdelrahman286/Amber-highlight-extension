import { useState, useEffect } from "react";
import Select, { Option } from "../SelectComponent/Select";
import { ArrowLeftRight, FileX, Info, Save } from "lucide-react";
import Button from "../Button/Button";
import ShimmerText from "../shimmerText/ShimmerText";
import { useAlert } from "../../context/AlertContext";
import { useAppContext } from "../../context/AppContext";
import Tooltip from "../CustomToolTip/Tooltip";
import ExpandButton from "../ExpandButton";

const TranslateTab = () => {
  const WIDTH = 100;
  const { selectionRef, selectHighlightId, expandView } = useAppContext();
  const { showAlert } = useAlert();

  const [inputLang, setInputLang] = useState("en");
  const [outputLang, setOutputLang] = useState("es");
  const [isAvailable, setIsAvailable] = useState(false);
  const [translation, setTranslation] = useState(
    "Checking translation availability..."
  );
  const [loading, setLoading] = useState(false);
  const [hasRealTranslation, setHasRealTranslation] = useState(false);

  const langs: Option[] = [
    { value: "en", label: "English" },
    { value: "ar", label: "Arabic" },
    { value: "fr", label: "French" },
    { value: "es", label: "Spanish" },
    { value: "de", label: "German" },
  ];

  // --- Load saved languages from Chrome storage on mount ---
  useEffect(() => {
    const loadSavedLanguages = async () => {
      try {
        const result = await browser.storage.local.get([
          "translateInputLang",
          "translateOutputLang",
        ]);

        if (result.translateInputLang) {
          setInputLang(result.translateInputLang);
        }
        if (result.translateOutputLang) {
          setOutputLang(result.translateOutputLang);
        }
      } catch (err) {
        console.error("Failed to load saved languages:", err);
      }
    };

    loadSavedLanguages();
  }, []);

  // --- Save languages to Chrome storage whenever they change ---
  useEffect(() => {
    const saveLanguages = async () => {
      try {
        await browser.storage.local.set({
          translateInputLang: inputLang,
          translateOutputLang: outputLang,
        });
      } catch (err) {
        console.error("Failed to save languages:", err);
      }
    };

    saveLanguages();
  }, [inputLang, outputLang]);

  // --- Check Translation API availability ---
  useEffect(() => {
    const checkAvailability = async () => {
      if (!("Translator" in self)) {
        setIsAvailable(false);
        setTranslation("Translate API is not supported in this browser.");
        console.log("Translate API is NOT available in this Chrome build.");
        return;
      }

      try {
        const availability = await (window as any).Translator.availability({
          sourceLanguage: inputLang,
          targetLanguage: outputLang,
        });

        console.log("Translate API availability:", availability);

        if (availability === "available" || availability === "downloadable") {
          setIsAvailable(true);
          setTranslation("Ready to translate text.");
        } else {
          setIsAvailable(false);
          setTranslation(
            "Translation model is not available for selected languages."
          );
        }
      } catch (err) {
        console.error(
          "Translator API exists but availability check failed:",
          err
        );
        setIsAvailable(false);
        setTranslation("Failed to check translation availability.");
      }
    };

    checkAvailability();
  }, [inputLang, outputLang]);

  // --- Perform translation when languages change ---
  useEffect(() => {
    let isCancelled = false;
    let translator: any = null;

    const translateText = async () => {
      if (!isAvailable) return;

      let text = "";

      // --- CASE 1: If a highlight is selected ---
      if (selectHighlightId) {
        const highlightElements = document.querySelectorAll(
          `[data-amberhighlightid="${selectHighlightId}"]`
        );
        highlightElements.forEach((el) => {
          text += el.textContent?.trim() + " ";
        });
        text = text.trim();
      }

      // --- CASE 2: If no highlight, use current selection ---
      if (!selectHighlightId && selectionRef?.current) {
        text = selectionRef.current.toString().trim();
      }

      if (!text) {
        if (!isCancelled) {
          setTranslation("No text selected to translate.");
          setHasRealTranslation(false);
          setLoading(false);
        }
        return;
      }

      if (!isCancelled) {
        setLoading(true);
        setTranslation("");
      }

      try {
        translator = await (window as any).Translator.create({
          sourceLanguage: inputLang,
          targetLanguage: outputLang,
        });

        if (isCancelled) {
          translator.destroy?.();
          return;
        }

        const result = await translator.translate(text);

        if (!isCancelled) {
          // --- Detect if no meaningful translation was produced ---
          if (!result.trim() || result.trim().length < 1) {
            setHasRealTranslation(false);
            setTranslation("No meaningful translation could be generated.");
          } else {
            setTranslation(result);
            setHasRealTranslation(true);
          }
        }
      } catch (err) {
        console.error("Translation error:", err);
        if (!isCancelled) {
          setTranslation("Failed to translate text.");
          setHasRealTranslation(false);
        }
      } finally {
        translator?.destroy?.();
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    translateText();

    // Cleanup function
    return () => {
      isCancelled = true;
      translator?.destroy?.();
    };
  }, [inputLang, outputLang, isAvailable, selectionRef, selectHighlightId]);

  // --- Swap input/output languages ---
  const handleSwap = () => {
    setInputLang(outputLang);
    setOutputLang(inputLang);
  };

  // --- Save translation to notes ---
  const saveTranslationToNotes = async (): Promise<boolean> => {
    if (!translation?.trim() || !selectHighlightId) {
      console.warn("Missing translation or highlight ID.");
      return false;
    }

    try {
      const res = await browser.runtime.sendMessage({
        action: "getSingleHighlight",
        data: selectHighlightId,
      });

      const currentNotes = res?.data?.notes || "";
      const newNotes = currentNotes + translation;

      const updateResponse = await browser.runtime.sendMessage({
        action: "updateHighlight",
        data: {
          id: selectHighlightId,
          updates: { notes: newNotes },
        },
      });

      if (updateResponse?.success) {
        return true;
      }

      return true; // assume success if no explicit flag is returned
    } catch (err) {
      console.error("Failed to save translation to notes:", err);
      return false;
    }
  };

  const handleSaveTranslation = async () => {
    // Case 1: No text is highlighted yet
    if (!selectHighlightId) {
      showAlert(
        "Please highlight the text first before saving the translation to your notes.",
        "error"
      );
      return;
    }

    // Case 2: No translation was generated
    if (!hasRealTranslation) {
      showAlert(
        "No translation has been generated. Please enable the Translation API in your browser settings and try again.",
        "info"
      );
      return;
    }

    // Case 3: Try saving the translation
    const success = await saveTranslationToNotes();

    if (success) {
      showAlert(
        "Translation successfully saved to your highlighted note.",
        "success"
      );
    } else {
      showAlert("Failed to save the translation. Please try again.", "error");
    }
  };

  const openHelpPage = () => {
    try {
      browser.runtime.sendMessage({ action: "openHelpPage" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: 0, margin: 0 }}>
      {/* --- Dropdowns and Swap Button --- */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Select
            width={WIDTH}
            value={inputLang}
            onChange={setInputLang}
            options={langs}
            placeholder="From"
          />

          <Button
            onClick={handleSwap}
            size="sm"
            variant="ghost"
            className="trigger-button-no-hover"
          >
            <ArrowLeftRight className="icon" />
          </Button>

          <Select
            width={WIDTH}
            value={outputLang}
            onChange={setOutputLang}
            options={langs}
            placeholder="To"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Tooltip text="Save translation to notes" position="bottom">
          <Button
            onClick={handleSaveTranslation}
            size={"sm"}
            variant={"ghost"}
            className="trigger-button-no-hover"
          >
            <Save className="icon" />
          </Button>
        </Tooltip>

        <ExpandButton />
      </div>

      {/* --- Translation Output --- */}
      <div
        style={{
          fontSize: "14px",
          lineHeight: "1.5",
          maxHeight: expandView ? "40vh" : "130px",
          overflowY: "auto",
          color: isAvailable ? "#e4e4e7" : "#a1a1aa",
        }}
        className="thin-scrollbar"
      >
        {!isAvailable ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",

              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "6px",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Info size={16} />
              <span
                style={{
                  display: "block",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  padding: "2px",
                }}
              >
                {translation}
              </span>
            </div>

            <div
              onClick={() => {
                openHelpPage();
              }}
              style={{
                color: "#60a5fa",
                textDecoration: "none",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: "4px",
                cursor: "pointer",
              }}
            >
              Learn more
            </div>
          </div>
        ) : loading ? (
          <ShimmerText
            text="Translating ..."
            textSize={14}
            color="oklch(87.1% 0.006 286.286)"
            staggerMs={70}
          />
        ) : (
          <span style={{ whiteSpace: "pre-wrap" }}>{translation}</span>
        )}
      </div>
    </div>
  );
};

export default TranslateTab;
