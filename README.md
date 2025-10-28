# Amber — Text Highlighting Chrome Extension

**Amber** is a modern Chrome extension that lets you highlight, annotate, summarize, and translate text seamlessly as you browse the web.

Built with performance, usability, and local-first data storage in mind.

![Image](https://github.com/user-attachments/assets/0db5477e-841e-4e3d-8b4b-983521c8d15f)

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

├── content/ # Content scripts injected into web pages

├── optionsPage/ # Options page for managing folders and highlights

├── popup/ # Popup window UI

├── sidepanel/ # Persistent side panel interface

└── amberGuideComponents/ # Welcome and onboarding screens



```

## ⚙️ Enable Chrome Flags for Gemini Nano

Before using Gemini Nano features, make sure your Chrome setup meets these requirements and flags are properly enabled.

### **Requirements**

- **Chrome version:** 128.0 or higher
- **Free storage:** At least **22 GB** (required to download on-device AI models)

### **Steps to Enable Flags**

1. **Enable On-Device Optimization Model**

   - Open: [`chrome://flags/#optimization-guide-on-device-model`](chrome://flags/#optimization-guide-on-device-model)
   - Set to: **Enabled BypassPerfRequirement**

2. **Enable Prompt API for Gemini Nano**

   - Open: [`chrome://flags/#prompt-api-for-gemini-nano`](chrome://flags/#prompt-api-for-gemini-nano)
   - Set to: **Enabled**

3. **Enable Summarization API**

   - Open: [`chrome://flags/#summarization-api-for-gemini-nano`](chrome://flags/#summarization-api-for-gemini-nano)
   - Set to: **Enabled Multilingual**

4. **Enable Translation API**
   - Open: [`chrome://flags/#translation-api`](chrome://flags/#translation-api)
   - Set to: **Enabled**

---

After enabling these flags, **restart Chrome** to apply the changes.  
Once done, Gemini Nano will automatically download its on-device model in the background (this may take some time).

💡 _Alternatively, you can follow the step-by-step guide inside the **Help Center Page** in Amber after you install the extension._

## 📝 License

MIT License
