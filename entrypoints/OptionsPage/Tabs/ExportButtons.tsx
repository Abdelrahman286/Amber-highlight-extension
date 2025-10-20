import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Copy, Check } from "lucide-react";
import { jsPDF } from "jspdf";

type Highlight = {
  selectionString: string;
  notes?: string;
  color?: string;
  website?: { url: string };
};

export default function CompactExportButtons({
  highlights,
}: {
  highlights: Highlight[];
}) {
  const [exporting, setExporting] = React.useState(false);
  const [copying, setCopying] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  // ---- Export PDF ----
  const handleExportPDF = async () => {
    try {
      setExporting(true);
      const doc = new jsPDF({
        unit: "pt",
        format: "a4",
      });

      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 50;
      const maxWidth = pageWidth - margin * 2;
      let y = 60;

      doc.setFontSize(16);
      doc.text("Amber Highlights", margin, 40);
      doc.setFontSize(11);

      const parseColor = (color: string): [number, number, number] => {
        if (!color) return [0, 0, 0];
        const rgbaMatch = color.match(
          /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/
        );
        if (rgbaMatch)
          return rgbaMatch.slice(1, 4).map(Number) as [number, number, number];
        if (color.startsWith("#")) {
          const hex = color.replace("#", "");
          const bigint = parseInt(hex.length === 3 ? hex.repeat(2) : hex, 16);
          return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
        }
        return [0, 0, 0];
      };

      highlights.forEach((h: any, i: number) => {
        if (y > 750) {
          doc.addPage();
          y = 60;
        }

        const [r, g, b] = parseColor(h.color);
        const startY = y - 6; // top of section

        // Highlight text
        const wrappedText = doc.splitTextToSize(
          `${i + 1}. ${h.selectionString}`,
          maxWidth
        );
        doc.text(wrappedText, margin, y);
        y += wrappedText.length * 14;

        // Optional note
        if (h.notes) {
          doc.setFontSize(10);
          const wrappedNote = doc.splitTextToSize(`${h.notes}`, maxWidth - 10);
          doc.text(wrappedNote, margin + 4, y);
          y += wrappedNote.length * 12 + 6;
          doc.setFontSize(11);
        }

        // Optional link
        if (h.website?.url) {
          doc.setTextColor(0, 0, 255);
          doc.textWithLink("Open Link", margin, y + 4, {
            url: h.website.url,
          });
          doc.setTextColor(0, 0, 0);
          y += 18;
        } else {
          y += 12;
        }

        const endY = y; // bottom of section

        // Draw full section colored line
        doc.setDrawColor(r, g, b);
        doc.setLineWidth(2);
        doc.line(margin - 10, startY, margin - 10, endY);

        // Add spacing between highlights
        y += 14;
      });

      doc.save("amber-highlights.pdf");
    } finally {
      setExporting(false);
    }
  };

  // ---- Copy Markdown ----
  const handleCopyMarkdown = async () => {
    try {
      setCopying(true);
      const md = highlights
        .map(
          (h, i) =>
            `### ${i + 1}. ${h.selectionString}\n` +
            (h.notes ? `> 💬 ${h.notes}\n` : "") +
            (h.website?.url ? `[🔗 ${h.website.url}](${h.website.url})` : "")
        )
        .join("\n\n---\n\n");

      await navigator.clipboard.writeText(md);
      setCopied(true);

      // remove check after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } finally {
      setCopying(false);
    }
  };

  return (
    <div className="inline-flex items-center gap-2">
      {/* Export PDF Button */}
      <Button
        size="sm"
        variant="outline"
        className="px-2.5 py-1.5 rounded-md flex items-center gap-2"
        onClick={handleExportPDF}
        disabled={exporting}
        aria-label="Export as PDF"
      >
        <Download className="w-4 h-4" />
        <span className="text-sm">{exporting ? "Exporting…" : "PDF"}</span>
      </Button>

      {/* Copy Markdown Button */}
      <Button
        size="sm"
        variant="ghost"
        className="px-2.5 py-1.5 rounded-md flex items-center gap-2"
        onClick={handleCopyMarkdown}
        disabled={copying}
        aria-label="Copy as Markdown"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-500 transition-all" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
        <span className="text-sm">MD</span>
      </Button>
    </div>
  );
}
