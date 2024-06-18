import React, { useEffect, useState } from "react";
import { DropSvg } from "../../assets/icon";
import "./input.scss";
const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Portuguese",
  "Italian",
  "Dutch",
  "Russian",
  "Arabic",
  "Chinese",
];
interface CategoryDropDownProps {
  onchange: (e: any) => void;
  name: string;
  value: string;
  title: string;
  data: any[];
}

const PremadeDrop: React.FC<CategoryDropDownProps> = ({
  name,
  value,
  onchange,
  title,
  data,
}) => {
  const [open, setopen] = useState(false);
  const [lang, setlang] = useState(data[0]);
  useEffect(() => {
    
    if (value && data.includes(value.toString())) {
      setlang(value);
    }
  }, [value]);
  const handleSelect = (e: any) => {
    setlang(e);
    onchange(Object.assign({ target: { name: name, value: e } }));
  };
  return (
    <div className="premadeDrop">
      <label htmlFor="">{title}</label>
      <div className="input" onClick={() => setopen(!open)}>
        <div className="select">{lang}</div>
        <span className={open ? "rotate button" : "button"}>
          <DropSvg />
        </span>
        {open && (
          <ul>
            {data.map((item, i) => (
              <li onClick={() => handleSelect(item)} key={i}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PremadeDrop;
