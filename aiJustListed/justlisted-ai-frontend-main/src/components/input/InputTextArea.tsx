
import React from "react";
import "./input.scss";
interface CategoryDropDownProps {
  onchange: (e:any) => void;
  name: string;
  placeholder: string;
  value: string;
  //   onchange: string;
  title: string;
  error: Boolean;
  height?:number
}

const InputTextArea: React.FC<CategoryDropDownProps> = ({
  name,
  placeholder,
  value,
  onchange,
  title,
  error,
  height
}) => {
  return (
    <div className="form-control-area">
      <label htmlFor="">{title}</label>
      <textarea
      style={{height:height}}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
      />
      {error ? <span>{title} is required</span> : null}
    </div>
  );
};

export default InputTextArea;
