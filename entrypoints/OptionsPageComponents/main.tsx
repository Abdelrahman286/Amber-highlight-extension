import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { browser } from "wxt/browser";
import "@/assets/tailwind.css";
// import "@/assets/contentScript.css";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
