import { useState } from "react";
import colors from "../../assets/colors/colors.json";
import s from "./ColorPicker.module.css";

const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState("white");

  return (
    <section style={{ backgroundColor: currentColor }} className={s.bgWrapper}>
      <div>
        <h2>Current color: {currentColor}</h2>
        <ul className={s.list}>
          {colors.map((item) => (
            <li
              onClick={() => setCurrentColor(item.color)}
              className={s.item}
              key={item.id}
            >
              {item.color}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default ColorPicker;
