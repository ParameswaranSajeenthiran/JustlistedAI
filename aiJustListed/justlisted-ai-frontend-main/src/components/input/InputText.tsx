import React from "react";
import "./input.scss";
interface CategoryDropDownProps {
  onchange: (e:any) => void;
  name: string;
  placeholder: string;
  value: string;
  //   onchange: string;
  title: string;
  error?: boolean;
  disabled?: boolean;
}

const InputText: React.FC<CategoryDropDownProps> = ({
  name,
  placeholder,
  value,
  onchange,
  title,
  error,
  disabled
}) => {
  return (
    <div className="form-control">
      <label htmlFor="">{title}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        disabled={disabled}
      />
      {error ? <span>{title} is required</span> : null}
    </div>
  );
};

export default InputText;
