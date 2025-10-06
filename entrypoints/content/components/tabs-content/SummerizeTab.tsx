import { useState, useEffect } from "react";
import Select, { Option } from "../SelectComponent/Select";
import Tooltip from "../CustomToolTip/Tooltip";
import { Save, AlignLeft, Expand, Info, Minimize2 } from "lucide-react";
import Button from "../Button/Button";
import { useAppContext } from "../../context/AppContext";
import { useAlert } from "../../context/AlertContext";
import { expandActionsBox, minimizeActionsBox } from "../../DomUtils";

const SummarizeTab = () => {
  const { selectionRef } = useAppContext();
  const { showAlert } = useAlert();
  const [level, setLevel] = useState("short");
  const [isAvailable, setIsAvailable] = useState(false);
  const [summary, setSummary] = useState("Checking availability...");
  const [loading, setLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  //   const { showAlert } = useAlert();

  const options: Option[] = [
    { value: "short", label: "Short" },
    { value: "medium", label: "Medium" },
    { value: "long", label: "Detailed" },
  ];

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
        if (availability === "available" || availability === "downloadable") {
          setIsAvailable(true);
          setSummary("Ready to summarize text.");
        } else {
          setIsAvailable(false);
          setSummary("Summarizer model not available.");
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
    const summarizeText = async () => {
      if (!isAvailable || !selectionRef?.current) return;

      const text = selectionRef.current.toString().trim();
      if (!text) {
        setSummary("No text selected to summarize.");
        return;
      }

      setLoading(true);
      setSummary("");

      try {
        const summarizer = await (window as any).Summarizer.create({
          type: "tldr", // options: 'key-points', 'tldr', 'teaser', 'headline'
          format: "plain-text",
          length: level,
          inputLanguage: "en",
          outputLanguage: "en",
        });

        // --- STREAMING VERSION ---
        const stream = await summarizer.summarizeStreaming(text, {
          context: "Summarize this text clearly and concisely.",
        });

        let fullSummary = "";
        for await (const chunk of stream) {
          fullSummary += chunk;
          setSummary(fullSummary); // update UI in real-time
        }

        summarizer.destroy?.();
      } catch (err) {
        console.error("Summarization error:", err);
        setSummary("Failed to summarize text.");
      } finally {
        setLoading(false);
      }
    };

    summarizeText();
  }, [level, isAvailable, selectionRef]);

  const handleToggleExpand = async () => {
    if (isExpanded) {
      setIsExpanded(false);
      await minimizeActionsBox();
    } else {
      await expandActionsBox();
      setIsExpanded(true);
    }
  };

  const Icon = isExpanded ? Minimize2 : Expand;
  const tooltipText = isExpanded ? "Minimize view" : "Maximize view";

  return (
    <div style={{ padding: 0, margin: 0 }}>
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
          <Tooltip text="Save your selection" position="bottom">
            <Button
              onClick={() => {
                console.log("done");
                showAlert(
                  "You have to highlight text before saving notes",
                  "info"
                );
              }}
              size={"sm"}
              variant={"ghost"}
              className="trigger-button-no-hover"
            >
              <Save className="icon" />
            </Button>
          </Tooltip>
          <Tooltip text={tooltipText} position="bottom">
            <Button
              onClick={handleToggleExpand}
              size="sm"
              variant="ghost"
              className="trigger-button-no-hover"
            >
              <Icon className="icon" />
            </Button>
          </Tooltip>
        </div>
      </div>

      <div
        style={{
          marginTop: "12px",
          fontSize: "14px",
          lineHeight: "1.5",
          maxHeight: isExpanded ? "40vh" : "130px",
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
              marginTop: "8px",
            }}
          >
            <Info size={16} />
            <span
              style={{
                display: "block", // ensures proper wrapping and no flex overflow
                whiteSpace: "pre-wrap", // preserves spacing but allows wrapping
                wordBreak: "break-word", // breaks long words
                padding: "2px",
              }}
            >
              {summary}
            </span>
            <a
              href="https://developer.chrome.com/docs/ai/summarizer-api/"
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
        ) : loading && summary === "" ? (
          <span>Summarizing...</span>
        ) : (
          summary
        )}
      </div>
    </div>
  );
};

export default SummarizeTab;
