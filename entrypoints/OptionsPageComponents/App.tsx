import { Button } from "@/components/ui/button";
import { browser } from "wxt/browser";

import { Settings } from "lucide-react";
import IndexedDBPlayground from "./IndexedDBPlayground";
import Tooltip from "../content/components/CustomToolTip/Tooltip";

import Select, { Option } from "../content/components/SelectComponent/Select";
const App = () => {
  const [fruit, setFruit] = useState("");
  const options: Option[] = [
    { value: "apple", label: "Apple very long desc 🍎" },
    { value: "banana", label: "Banana 🍌" },
    { value: "orange", label: "Orange 🍊" },
  ];
  return (
    <div className="p-3">
      <Tooltip text="Tooltip above" position="bottom">
        <button>Hover me (top)</button>
      </Tooltip>

      <Tooltip text="Tooltip above" position="bottom">
        <Settings size={28}></Settings>
      </Tooltip>
      <div style={{ padding: "20px" }}>
        <h2>Pick a fruit</h2>
        <Select
          value={fruit}
          onChange={setFruit}
          options={options}
          placeholder="Mode"
        />

        {fruit && <p>You selected: {fruit}</p>}
      </div>
      <h1 className="underline flex flex-row gap-2">
        <Settings></Settings> Settings Page
      </h1>

      <IndexedDBPlayground></IndexedDBPlayground>
    </div>
  );
};

export default App;
