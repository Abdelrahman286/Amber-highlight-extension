import React from "react";
import "./style.css";
import { ChevronsUpDown } from "lucide-react";

export interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
  width?: number;
}

const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  placeholder,
  disabled,
  width,
}) => {
  return (
    <div
      style={{
        width: `${width ?? 120}px`,
      }}
      className={`select-wrapper ${disabled ? "disabled" : ""}`}
    >
      <select
        className="select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Icon (overlays on the right) */}
      <ChevronsUpDown className="select-icon" size={14} />
    </div>
  );
};

export default Select;
