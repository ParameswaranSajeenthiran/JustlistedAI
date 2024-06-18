import React from "react";
import "./input.scss";
interface CategoryDropDownProps {
  onchange: (e: any) => void;
  name: string;
  placeholder: string;
  errorMsg?: string;
  value: string;
  //   onchange: string;
  title: string;
  error?: Boolean;
}

const InputPwd: React.FC<CategoryDropDownProps> = ({
  name,
  placeholder,
  value,
  onchange,
  title,
  errorMsg,
  error,
}) => {
  return (
    <div className="form-control">
      <label htmlFor="">{title}</label>
      <input
        type="password"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        required
        className={error ? "input-error" : ""}
      />
      {error ? <span>{errorMsg ?? `${title} is required`}</span> : null}
    </div>
  );
};

export default InputPwd;
