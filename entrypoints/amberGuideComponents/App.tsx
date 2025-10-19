import React from "react";
import { motion } from "framer-motion";
import { browser } from "wxt/browser";
import {
  Highlighter,
  StickyNote,
  BookOpenText,
  Languages,
  FolderOpen,
  Share2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <Highlighter className="w-6 h-6 text-amber-500" />,
    title: "Highlight Text",
    desc: "Select and save key passages effortlessly while reading.",
  },
  {
    icon: <StickyNote className="w-6 h-6 text-blue-500" />,
    title: "Add Notes",
    desc: "Attach personal notes or thoughts to any highlight.",
  },
  {
    icon: <BookOpenText className="w-6 h-6 text-purple-500" />,
    title: "Summarize Content",
    desc: "Get quick, smart summaries using Gemini Nano.",
  },
  {
    icon: <Languages className="w-6 h-6 text-green-500" />,
    title: "Translate Text",
    desc: "Translate any highlight instantly with one click.",
  },
  {
    icon: <FolderOpen className="w-6 h-6 text-pink-500" />,
    title: "Organize Highlights",
    desc: "Keep your insights structured across custom folders.",
  },
  {
    icon: <Share2 className="w-6 h-6 text-indigo-500" />,
    title: "Share Easily",
    desc: "Export or share your favorite highlights with others.",
  },
];

const handleOpenOptionsPage = () => {
  try {
    const url = browser.runtime.getURL("/amberOptionsPage.html" as any);
    browser.tabs.create({ url });
  } catch (err) {
    console.log(err);
  }
};

const WelcomePage = () => {
  const amberLogo = browser.runtime.getURL("icon-128.png" as any);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 to-white text-gray-800 px-6 py-12">
      {/* --- Logo & Title --- */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-10"
      >
        <img
          src={amberLogo}
          alt="Amber Logo"
          className="w-16 h-16 mb-4 drop-shadow-md"
        />
        <h1 className="text-3xl font-bold text-amber-600 flex items-center gap-2">
          Welcome to Amber
          <Sparkles className="w-5 h-5 text-amber-400" />
        </h1>
        <p className="text-gray-600 max-w-xl mt-2">
          Amber is a free and open-source Chrome extension designed to help you
          highlight, annotate, and understand the web better — powered by
          <span className="font-semibold text-amber-600"> Gemini Nano</span>.
        </p>
      </motion.div>

      {/* --- Feature Cards --- */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Card className="hover:shadow-md transition-all duration-200 border border-gray-100 rounded-2xl">
              <CardContent className="flex flex-col items-start space-y-3 p-5">
                <div className="p-2 bg-gray-50 rounded-full">{f.icon}</div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* --- Bottom Section --- */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <p className="text-gray-700 mb-4">
          Save, organize, and share your highlights — your reading companion for
          a smarter web.
        </p>
        <Button
          onClick={() => handleOpenOptionsPage()}
          className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full shadow-md"
        >
          Start Exploring
        </Button>
      </motion.div>
    </div>
  );
};

export default WelcomePage;
