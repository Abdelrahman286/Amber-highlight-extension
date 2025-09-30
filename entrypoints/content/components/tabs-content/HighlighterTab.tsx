import Select, { Option } from "../SelectComponent/Select";
import Tooltip from "../CustomToolTip/Tooltip";

import { Settings, AArrowDownIcon } from "lucide-react";
const HighlighterTab = () => {
  const highlightColors = ["#facc15", "#f87171", "#34d399", "#60a5fa"];
  const [fruit, setFruit] = useState("apple");
  const options: Option[] = [
    { value: "apple", label: "Apple 🍎" },
    { value: "banana", label: "Banana 🍌" },
    { value: "orange", label: "Orange 🍊" },
  ];
  return (
    <div
      style={{
        padding: 0,
        margin: 0,
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Select
        value={fruit}
        onChange={setFruit}
        options={options}
        placeholder="Mode"
      />

      <Tooltip text="Tooltip above" position="bottom">
        <Settings size={16}></Settings>
      </Tooltip>

      <Tooltip text="Tooltip above" position="bottom">
        <AArrowDownIcon size={16}></AArrowDownIcon>
      </Tooltip>
    </div>
  );
};

export default HighlighterTab;
