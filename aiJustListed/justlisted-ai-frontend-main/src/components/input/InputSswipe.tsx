import React from "react";
import "./input.scss";
interface CategoryDropDownProps {
  onchange: (e: any) => void;
  name: string;
  value: string;
  //   onchange: string;
  title: string;
  error: Boolean;
  checked: Boolean;
}

const InputSswipe: React.FC<CategoryDropDownProps> = ({
  name,
  value,
  onchange,
  title,
  error,
  checked,
}) => {
  return (
    <div className="form-swipe">
      <label className="switch">
        <input
          type="checkbox"
          name={name}
          checked={!checked}
          onChange={onchange}
          value={value}
        />
        <span className="slider"></span>
      </label>
      <label htmlFor="">{title}</label>

      {error ? <span>{title} is required</span> : null}
    </div>
  );
};

export default InputSswipe;
