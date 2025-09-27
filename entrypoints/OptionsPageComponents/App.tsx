import { Button } from "@/components/ui/button";
import { browser } from "wxt/browser";

import { Settings } from "lucide-react";
import IndexedDBPlayground from "./IndexedDBPlayground";
const App = () => {
  return (
    <div className="p-3">
      <h1 className="underline flex flex-row gap-2">
        <Settings></Settings> Settings Page
      </h1>

      <IndexedDBPlayground></IndexedDBPlayground>
      

    </div>
  );
};

export default App;
