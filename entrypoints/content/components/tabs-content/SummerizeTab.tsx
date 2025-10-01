import { useState } from "react";
import Select, { Option } from "../SelectComponent/Select";
import Tooltip from "../CustomToolTip/Tooltip";
import { Save, AlignLeft, Expand } from "lucide-react"; // AlignLeft as a clearer "text length" icon
import Button from "../Button/Button";

const SummerizeTab = () => {
  const [level, setLevel] = useState("short");

  const options: Option[] = [
    { value: "short", label: "Short" },
    { value: "medium", label: "Medium" },
    { value: "long", label: "Long" },
    { value: "detailed", label: "Detailed" },
  ];

  return (
    <div style={{ padding: 0, margin: 0 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left side: Label + Dropdown */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "3px",
              fontSize: "10px",
              fontWeight: 500,
              whiteSpace: "nowrap", // prevent wrapping
            }}
          >
            <AlignLeft size={16} />
            <span>Summary Length</span>
          </div>

          <Select
            width={80}
            value={level}
            onChange={setLevel}
            options={options}
            placeholder="Choose length"
          />
        </div>

        <Tooltip text="Save your selection" position="bottom">
          <Button
            size={"sm"}
            variant={"ghost"}
            className="trigger-button-no-hover"
          >
            <Save className="icon" />
          </Button>
        </Tooltip>

        <Tooltip text="Maximize view" position="bottom">
          <Button
            size={"sm"}
            variant={"ghost"}
            className="trigger-button-no-hover"
          >
            <Expand className="icon" />
          </Button>
        </Tooltip>
      </div>

      <p
        style={{
          marginTop: "12px",
          fontSize: "14px",
          lineHeight: "1.5",
          maxHeight: "130px",
          overflowY: "auto",
        }}
        className="thin-scrollbar"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia
        voluptate ex amet, suscipit numquam excepturi dicta cupiditate est nam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia
        voluptate ex amet, suscipit numquam excepturi dicta cupiditate est nam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia
        voluptate ex amet, suscipit numquam excepturi dicta cupiditate est nam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia
        voluptate ex amet, suscipit numquam excepturi dicta cupiditate est nam.
      </p>
    </div>
  );
};

export default SummerizeTab;
