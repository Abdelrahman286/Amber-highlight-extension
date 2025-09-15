import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { browser } from "wxt/browser";
import "@/assets/tailwind.css";

document.addEventListener("DOMContentLoaded", () => {
  const dir = browser.i18n.getMessage("@@bidi_dir");
  document.body.setAttribute("dir", dir);
});

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
