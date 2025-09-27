import Button from "./Button/Button";
import { PanelRightOpen, Copy, Trash2, Folder } from "lucide-react";

const MoreOptionsRow = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 4px",
      }}
    >
      <div
        style={{
          color: "white",
        }}
      >
        <Button
          variant="icon"
          size="sm"
          icon={<Folder className="size-18" />}
        ></Button>
      </div>
      <div
        style={{
          display: "flex",
          gap: "8px",
          margin: "8px 0px",
        }}
      >
        <Button
          variant="icon"
          size="sm"
          icon={<PanelRightOpen className="size-18" />}
        ></Button>
        <Button
          variant="icon"
          size="sm"
          icon={<Copy className="size-18" />}
        ></Button>
        <Button
          variant="icon"
          size="sm"
          icon={<Trash2 className="size-18 text-red-400" />}
        ></Button>
      </div>
    </div>
  );
};

export default MoreOptionsRow;
