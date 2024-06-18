import React from "react";
import "./input.scss";
interface CategoryDropDownProps {
  onchange: (e: any) => void;
  name: string;
  placeholder: string;
  value: string;
  limit: number;
  title: string;
  error?: boolean;
  disabled?: boolean;
}

const InputWithCount: React.FC<CategoryDropDownProps> = ({
  name,
  placeholder,
  value,
  onchange,
  title,
  error,
  disabled,
  limit,
}) => {
    
  return (
    <div className="form-control">
      <label htmlFor="">
        <span>{title}</span>
        <span>Max {limit}</span>
      </label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        required
        disabled={disabled}
      />
      {error ? <span>{title} is required</span> : null}
    </div>
  );
};

export default InputWithCount;
