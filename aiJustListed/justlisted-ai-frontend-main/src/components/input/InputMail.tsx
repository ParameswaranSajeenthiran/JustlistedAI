import React from 'react'

import "./input.scss";
interface CategoryDropDownProps {
  onchange: (e:any) => void;
  name: string;
  placeholder: string;
  value: string;
  //   onchange: string;
  title: string;
  error?: Boolean;
}

const InputMail: React.FC<CategoryDropDownProps> = ({
  name,
  placeholder,
  value,
  onchange,
  title,
  error,
}) => {
  return (
    <div className="form-control">
      <label htmlFor="">{title}</label>
      <input
        type="email"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        required
      />
      {error ? <span>{title} is required</span> : null}
    </div>
  );
};

export default InputMail;
