# Amber — Text Highlighting Chrome Extension

**Amber** is a modern Chrome extension that lets you highlight, annotate, summarize, and translate text seamlessly as you browse the web.  
Built with performance, usability, and local-first data storage in mind.

![Demo](./demo-gif.gif)

## ✨ Key Features

- 🖍️ **Highlight & Save** — Persist text highlights locally using IndexedDB.

- 🧠 **Summarize Text** — Quickly generate concise summaries of selected content.
- 🌍 **Translate Instantly** — Translate highlighted text using Gemini Nano’s built-in APIs.
- 🗒️ **Add Notes** — Attach personal notes to any highlight.
- 🗂️ **Organize by Folders** — Manage highlights across multiple collections.

## 🚀 Installation

### 🔹 Install the Extension Locally

1. Enable **Developer Mode** in Chrome.

   - Go to `chrome://extensions/` → toggle **Developer mode** (top right).

2. Clone this repository:

```bash
git clone https://github.com/Abdelrahman286/Amber-highlight-extension.git
```

3. In Chrome, click **Load unpacked** and select the directory that contains the **final built version of the extension**.

```bash
output/chrome-mv3
```

## 🧩 Development Setup

### Run in Development Mode

1. Clone the repository as above.
2. Start the dev server:

```bash
npm run dev
```

This opens a testing browser window with the extension loaded.

3. Alternatively, you can manually load the **HMR-enabled dev build**:

```bash
.output/chrome-mv3-dev
```

Use this directory when loading an unpacked extension to enable Hot Module Replacement.

## 🏗️ Build for Production

1. Ensure you have the **latest Node.js** version installed.
2. Run the build command:

```bash
npm run build
```

The output files will be generated in the `output/chrome-mv3` directory.

## ⚙️ Tech Stack

Amber is built using modern web technologies:

- **Gemini Nano APIs** — Utilized for text summarization and translation directly within Chrome.
- **WXT** — Framework for building Chrome extensions with modern tooling.
- **React** — UI library for interactive components.
- **Shadcn/UI + Tailwind CSS** — For clean and consistent interface styling.
- **IndexedDB** — Local database for storing highlights and folders.

## 📂 Project Structure

```bash
entryPoints/
├── content/           # Content scripts injected into web pages
├── optionsPage/       # Options page for managing folders and highlights
├── popup/             # Popup window UI
├── sidepanel/         # Persistent side panel interface
└── amberGuideComponents/ # Welcome and onboarding screens

```
