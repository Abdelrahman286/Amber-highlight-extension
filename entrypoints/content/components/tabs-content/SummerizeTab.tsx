import { useState, useEffect } from "react";
import Select, { Option } from "../SelectComponent/Select";
import Tooltip from "../CustomToolTip/Tooltip";
import {
  Save,
  AlignLeft,
  Info,
  Minimize2,
  Maximize2,
  TextSelect,
} from "lucide-react";
import Button from "../Button/Button";
import { useAppContext } from "../../context/AppContext";
import { useAlert } from "../../context/AlertContext";
import ShimmerText from "../shimmerText/ShimmerText";
import ExpandButton from "../ExpandButton";
import ResultBox from "./ResultBox";

const SummarizeTab = () => {
  const { showAlert } = useAlert();
  const { selectionRef, selectHighlightId, expandView } = useAppContext();
  const [level, setLevel] = useState("short");
  const [summaryType, setSummaryType] = useState("tldr");
  const [isAvailable, setIsAvailable] = useState(false);
  const [summary, setSummary] = useState("Checking availability...");
  const [loading, setLoading] = useState(false);

  const [hasRealSummary, setHasRealSummary] = useState(false);
  const [generateMarkdown, setGenerateMarkdown] = useState(true); // ✅ default true

  const options: Option[] = [
    { value: "short", label: "Short" },
    { value: "medium", label: "Medium" },
    { value: "long", label: "Detailed" },
  ];
  const summaryTypes: Option[] = [
    { value: "tldr", label: "TL;DR" },
    { value: "teaser", label: "Teaser" },
    { value: "key-points", label: "Key Points" },
    { value: "headline", label: "Headline" },
  ];
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGenerateMarkdown(e.target.checked);
  };

  // --- Check if Summarizer API is supported ---
  useEffect(() => {
    const checkAvailability = async () => {
      if (!("Summarizer" in self)) {
        setIsAvailable(false);
        setSummary("Summarization is not supported in this browser.");
        return;
      }

      try {
        const availability = await (window as any).Summarizer.availability();
        if (availability === "available") {
          setIsAvailable(true);
          setSummary("Ready to summarize text.");
        } else {
          setIsAvailable(false);
          setSummary("Summarizer model is not available.");
        }
      } catch (err) {
        console.error(err);
        setIsAvailable(false);
        setSummary("Failed to check summarizer availability.");
      }
    };

    checkAvailability();
  }, []);

  // --- Run summarization (streaming) when level changes ---
  useEffect(() => {
    let isCancelled = false;
    let summarizer: any = null;

    const summarizeText = async () => {
      if (!isAvailable) return;

      let text = "";

      // --- CASE 1: If a highlight is selected, summarize its content ---
      if (selectHighlightId) {
        const highlightElements = document.querySelectorAll(
          `[data-amberhighlightid="${selectHighlightId}"]`
        );

        highlightElements.forEach((el) => {
          text += el.textContent?.trim() + " ";
        });

        text = text.trim();
      }

      // --- CASE 2: Otherwise, summarize the currently selected text ---
      if (!selectHighlightId && selectionRef?.current) {
        text = selectionRef.current.toString().trim();
      }

      // --- No text available ---
      if (!text) {
        if (!isCancelled) {
          setSummary("No text selected to summarize.");
          setHasRealSummary(false);
        }
        return;
      }

      if (!isCancelled) {
        setLoading(true);
        setSummary("");
      }

      try {
        summarizer = await (window as any).Summarizer.create({
          type: summaryType,
          format: `${generateMarkdown ? "markdown" : "plain-text"}`,
          length: level,
          inputLanguage: "en",
          outputLanguage: "en",
        });

        if (isCancelled) {
          summarizer.destroy?.();
          return;
        }

        // --- STREAMING SUMMARY ---
        const stream = await summarizer.summarizeStreaming(text, {
          context: "Summarize this text clearly and concisely.",
        });

        let fullSummary = "";
        for await (const chunk of stream) {
          if (isCancelled) break;

          fullSummary += chunk;
          setSummary(fullSummary);
        }

        if (isCancelled) return;

        // --- Detect if no meaningful summary was produced ---
        if (!fullSummary.trim() || fullSummary.trim().length < 4) {
          setHasRealSummary(false);
          setSummary("No meaningful summary could be generated.");
        } else {
          setHasRealSummary(true);
        }
      } catch (err) {
        if (!isCancelled) {
          console.error("Summarization error:", err);
          setSummary("Failed to summarize text.");
          setHasRealSummary(false);
        }
      } finally {
        summarizer?.destroy?.();
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    summarizeText();

    // Cleanup function
    return () => {
      isCancelled = true;
      summarizer?.destroy?.();
    };
  }, [
    level,
    summaryType,
    isAvailable,
    selectionRef,
    selectHighlightId,
    generateMarkdown,
  ]);

  const saveSummaryToNotes = async (): Promise<boolean> => {
    if (!summary?.trim() || !selectHighlightId) {
      console.warn("Missing summary or highlight ID.");
      return false;
    }

    try {
      const res = await browser.runtime.sendMessage({
        action: "getSingleHighlight",
        data: selectHighlightId,
      });

      const currentNotes = res?.data?.notes || "";
      const newNotes = currentNotes + summary;

      const updateResponse = await browser.runtime.sendMessage({
        action: "updateHighlight",
        data: {
          id: selectHighlightId,
          updates: { notes: newNotes },
        },
      });

      // Optional: check if update succeeded based on response
      if (updateResponse?.success) {
        return true;
      }

      return true; // assume success if no explicit flag is returned
    } catch (err) {
      console.error("Failed to save summary to notes:", err);
      return false;
    }
  };

  const handleSaveSummary = async () => {
    // Case 1: No text is highlighted yet
    if (!selectHighlightId) {
      showAlert(
        "Please highlight the text first before saving the summary to your notes.",
        "error"
      );
      return;
    }

    // Case 2: No summary was generated (likely missing Gemini Nano)
    if (!hasRealSummary) {
      showAlert(
        "No summary has been generated. Please enable Gemini Nano in your browser settings and try again.",
        "info"
      );
      return;
    }

    // Case 3: Try saving the summary
    const success = await saveSummaryToNotes();

    if (success) {
      showAlert(
        "Summary successfully saved to your highlighted note.",
        "success"
      );
    } else {
      showAlert("Failed to save the summary. Please try again.", "error");
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
      {/* --- Header Row --- */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left side: Label + Dropdown */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "3px",
              fontSize: "10px",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            <AlignLeft size={16} />
            <span>Summary Length</span>
          </div>

          <Select
            width={80}
            value={level}
            onChange={setLevel}
            options={options}
            placeholder="Choose length"
            disabled={!isAvailable}
          />
        </div>

        <div>
          <Tooltip text="Save Summary" position="bottom">
            <Button
              onClick={handleSaveSummary}
              size={"sm"}
              variant={"ghost"}
              className="trigger-button-no-hover"
            >
              <Save className="icon" />
            </Button>
          </Tooltip>

          <ExpandButton></ExpandButton>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginTop: "4px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
            fontSize: "10px",
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
        >
          <TextSelect size={16} />
          <span>Type</span>
        </div>

        <Select
          width={100}
          value={summaryType}
          onChange={setSummaryType}
          options={summaryTypes}
          placeholder="Choose Type"
          disabled={!isAvailable}
        />
      </div>

      <div className="markdown-toggle">
        <input
          type="checkbox"
          id="generateMarkdown"
          className="markdown-checkbox"
          checked={generateMarkdown}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="generateMarkdown" className="markdown-label">
          Generate summary in Markdown
        </label>
      </div>

      {/* --- Summary Output --- */}
      <div
        style={{
          fontSize: "14px",
          lineHeight: "1.5",
          maxHeight: expandView ? "40vh" : "130px",
          overflowY: "auto",
          color: isAvailable ? "#e4e4e7" : "#a1a1aa",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
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
                display: "block",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                padding: "2px",
              }}
            >
              {summary}
            </span>
            <div
              onClick={() => openHelpPage()}
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
        ) : loading && summary === "" ? (
          <ShimmerText
            text="Summarizing ..."
            textSize={14}
            color="oklch(87.1% 0.006 286.286)"
            staggerMs={70}
          />
        ) : (
          <ResultBox translation={summary} />
        )}
      </div>
    </div>
  );
};

export default SummarizeTab;
