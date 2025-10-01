import Select, { Option } from "../SelectComponent/Select";
import Tooltip from "../CustomToolTip/Tooltip";

import { Settings, AArrowDownIcon, Expand } from "lucide-react";
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

      <Tooltip text="Expand View" position="bottom">
        <Expand size={16}></Expand>
      </Tooltip>

      <Tooltip text="Save" position="bottom">
        <AArrowDownIcon size={16}></AArrowDownIcon>
      </Tooltip>
    </div>
  );
};

export default HighlighterTab;
