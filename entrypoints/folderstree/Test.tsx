import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  X,
  Trash2,
  Bold,
  Italic,
  Underline,
  Languages,
  PanelRightOpen,
  Highlighter,
  Sparkles,
  Copy,
  StickyNote,
  Type,
} from "lucide-react";

const highlightColors = ["#facc15", "#f87171", "#34d399", "#60a5fa"];
const fontColors = ["#ffffff", "#000000", "#f97316", "#a78bfa"];

// Reusable classnames
const tabTriggerClass =
  "data-[state=active]:bg-zinc-600 data-[state=active]:text-white text-zinc-100 transition-all py-1 rounded-tl-4xl rounded-tr-4xl relative amber-tabs-trigger-btn rounded-bl-none rounded-br-none border-none ";

const tabContentClass =
  "bg-zinc-600 p-2 rounded-xl border-none outline-none shadow-none m-0 ";

const ActionsBoxContent = () => {
  const [notes, setNotes] = useState("");

  function closeBox() {
    document.getSelection()?.removeAllRanges();
  }

  return (
    <div className="relative w-full rounded-xl border-white/40  bg-zinc-700 text-white p-2">
      {/* Close Button */}
      <button
        onClick={closeBox}
        className="absolute top-2 right-2 text-zinc-600 hover:text-white transition"
      >
        <X className="w-4 h-4" />
      </button>

      {/* Tabs */}
      <Tabs defaultValue="highlight" className="w-full border-none  gap-[0px]">
        <TabsList className="amber-tabs-list rounded-t-xl p-0 m-0 border-none outline-none mb-0 pb-0 rounded-none shadow-none h-fit flex   bg-zinc-700 ">
          <TabsTrigger
            value="highlight"
            className={`${tabTriggerClass} amber-tabs-trigger-btn skip-tab-btn`}
          >
            <span className="corner-wrapper">
              <Highlighter className="w-4 h-4 z-10" />
            </span>
          </TabsTrigger>

          <TabsTrigger
            value="font"
            className={`${tabTriggerClass} amber-tabs-trigger-btn`}
          >
            <span className="corner-wrapper">
              <Type className="w-4 h-4" />
            </span>
          </TabsTrigger>

          <TabsTrigger
            value="summarize"
            className={`${tabTriggerClass} amber-tabs-trigger-btn`}
          >
            <span className="corner-wrapper">
              <Sparkles className="w-4 h-4" />
            </span>
          </TabsTrigger>

          <TabsTrigger
            value="translate"
            className={`${tabTriggerClass} amber-tabs-trigger-btn`}
          >
            <span className="corner-wrapper">
              <Languages className="w-4 h-4" />
            </span>
          </TabsTrigger>

          <TabsTrigger
            value="notes"
            className={`${tabTriggerClass} amber-tabs-trigger-btn`}
          >
            <span className="corner-wrapper">
              <StickyNote className="w-4 h-4 z-10" />
            </span>
          </TabsTrigger>
        </TabsList>

        {/* Highlight Tab */}
        <TabsContent
          value="highlight"
          className=" bg-zinc-600 p-2 rounded-b-xl rounded-tr-xl rounded-tl-none border-none outline-none shadow-none m-0 
"
        >
          <div className="flex gap-1">
            {highlightColors.map((color) => (
              <button
                key={color}
                className="w-6 h-6 rounded-md border border-zinc-600 hover:scale-105 transition-transform"
                style={{ backgroundColor: color }}
                onClick={() => console.log("Highlight:", color)}
              />
            ))}
          </div>
        </TabsContent>

        {/* Font Tab */}
        <TabsContent value="font" className={tabContentClass}>
          <div className="flex gap-1 items-center">
            {fontColors.map((color) => (
              <button
                key={color}
                className="w-6 h-6 rounded-md border border-zinc-600 hover:scale-105 transition-transform shadow-none"
                style={{ backgroundColor: color }}
                onClick={() => console.log("Font Color:", color)}
              />
            ))}
            <Button
              size="icon"
              variant="ghost"
              className="h-7 w-7 text-zinc-300 hover:text-white"
            >
              <Bold className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="h-7 w-7 text-zinc-300 hover:text-white"
            >
              <Italic className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="h-7 w-7 text-zinc-300 hover:text-white"
            >
              <Underline className="w-4 h-4" />
            </Button>
          </div>
        </TabsContent>

        {/* Summarize Tab */}
        <TabsContent value="summarize" className={tabContentClass}>
          <Button
            size="sm"
            className="w-full text-sm bg-zinc-800 hover:bg-zinc-700 h-7"
          >
            <Sparkles className="w-4 h-4 mr-1" /> Summarize
          </Button>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore,
            veniam. Quis neque ipsa optio, magnam officia consequuntur sint quo
            expedita vero, ullam veritatis? Deserunt esse, vero totam voluptatem
            odit cumque!
          </p>
        </TabsContent>

        {/* Translate Tab */}
        <TabsContent value="translate" className={tabContentClass}>
          <Button
            size="sm"
            className="w-full text-sm bg-zinc-800 hover:bg-zinc-700 h-7"
          >
            <Languages className="w-4 h-4 mr-1" /> Translate
          </Button>
        </TabsContent>

        {/* Notes Tab */}
        <TabsContent value="notes" className={tabContentClass}>
          <textarea
            placeholder="Write notes..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full rounded-md bg-zinc-800 border border-zinc-700 text-white placeholder:text-zinc-500 text-sm p-2 h-20 resize-none focus-visible:ring-1 focus-visible:ring-zinc-500"
          />
        </TabsContent>
      </Tabs>

      {/* Extra Actions */}
      <div className="flex gap-1 justify-end p-1">
        <Button size="icon" variant="ghost" className="h-7 w-7 text-zinc-300 ">
          <PanelRightOpen className="w-4 h-4" />
        </Button>
        <Button size="icon" variant="ghost" className="h-7 w-7 text-zinc-300 ">
          <Copy className="w-4 h-4" />
        </Button>
        <Button size="icon" variant="ghost" className="h-7 w-7 text-red-400 ">
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ActionsBoxContent;
