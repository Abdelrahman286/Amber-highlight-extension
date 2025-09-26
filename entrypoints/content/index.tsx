import "./style.css";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AppContextProvider } from "./context/AppContext.tsx";

export default defineContentScript({
  matches: ["*://*/*"],
  cssInjectionMode: "ui",
  runAt: "document_end",

  async main(ctx) {
    // console.log(ctx.isValid)
    const ui = await createShadowRootUi(ctx, {
      name: "amber-highlights-host",
      position: "inline",
      anchor: "body",
      append: "first",
      isolateEvents: true,
      onMount: (container) => {
        // Don't mount react app directly on <body>
        const wrapper = document.createElement("div");
        container.append(wrapper);

        const root = ReactDOM.createRoot(wrapper);
        root.render(
          <AppContextProvider>
            <App></App>
          </AppContextProvider>
        );
        return { root, wrapper };
      },
      onRemove: (elements) => {
        elements?.root.unmount();
        elements?.wrapper.remove();
      },
    });

    ui.mount();
  },
});
