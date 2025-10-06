import { useState, useEffect } from "react";
import Select, { Option } from "../SelectComponent/Select";
import { ArrowLeftRight, Info, Save, Maximize2, Minimize2 } from "lucide-react";
import Button from "../Button/Button";
import ShimmerText from "../shimmerText/ShimmerText";
import { useAlert } from "../../context/AlertContext";
import { useAppContext } from "../../context/AppContext";
import Tooltip from "../CustomToolTip/Tooltip";

const TranslateTab = () => {
  const WIDTH = 100;
  const { selectionRef, selectHighlightId } = useAppContext();
  const { showAlert } = useAlert();

  const [inputLang, setInputLang] = useState("en");
  const [outputLang, setOutputLang] = useState("ar");
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

  // --- Check Translation API availability ---
  useEffect(() => {
    const checkAvailability = async () => {
      // --- Check if Translator API exists ---
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

        if (availability === "available") {
          setIsAvailable(true);
          setTranslation("Ready to translate text.");
        } else {
          setIsAvailable(false);
          setTranslation(
            "Translation model not available for selected languages."
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
      //   if (!isAvailable) return;

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

        const result = await translator.translate(text);

        if (!isCancelled) {
          setTranslation(result);
          setHasRealTranslation(true);
        }
      } catch (err) {
        console.error("Translation error:", err);
        if (!isCancelled) {
          setTranslation("Failed to translate text.");
          setHasRealTranslation(false);
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    translateText();

    return () => {
      isCancelled = true;
    };
  }, [inputLang, outputLang, isAvailable, selectionRef, selectHighlightId]);

  // --- Swap input/output languages ---
  const handleSwap = () => {
    setInputLang(outputLang);
    setOutputLang(inputLang);
  };

  return (
    <div style={{ padding: 0, margin: 0 }}>
      {/* --- Dropdowns and Swap Button --- */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <Select
          width={WIDTH}
          value={inputLang}
          onChange={setInputLang}
          options={langs}
          placeholder="From"
          disabled={!isAvailable}
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
          disabled={!isAvailable}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Tooltip text="Save your selection" position="bottom">
          <Button
            // onClick={handleSaveSummary}
            size={"sm"}
            variant={"ghost"}
            className="trigger-button-no-hover"
          >
            <Save className="icon" />
          </Button>
        </Tooltip>

        <Tooltip text={"aaaa"} position="bottom">
          <Button
            // onClick={handleToggleExpand}
            size="sm"
            variant="ghost"
            className="trigger-button-no-hover"
          >
            <Maximize2 className="icon" />
          </Button>
        </Tooltip>
      </div>
      {/* --- Translation Output --- */}
      <div
        style={{
          fontSize: "14px",
          lineHeight: "1.5",
          maxHeight: "200px",
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
            <Info size={16} />
            <span
              style={{
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                padding: "2px",
              }}
            >
              {/* {translation} */}
            </span>
            <a
              href="https://developer.chrome.com/docs/ai/translation-api/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#60a5fa",
                textDecoration: "none",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              Learn more
            </a>
          </div>
        ) : loading && translation === "" ? (
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
