import { useState } from "react";

const Counter = () => {
  //   RULES
  // 1.Можна створюати Хуки тільки в компонентах
  // 2. Не можна створювати хуки по умовам (if..else, switch ...)
  //3. Не млжна оолосити хук в середині циклів (for..)

  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const handleClickPlus = () => {
    setCounter((prev) => prev + step);
    if (counter > 12000) {
      alert("Не так швидко!!!");
    }
  };

  // !!! prevState - це prev

  const handleClickMinus = () => {
    setCounter((prev) => prev - step);
  };

  const handleReset = () => {
    setCounter(0);
    setStep(1);
  };

  return (
    <div>
      <div>
        <h1>{counter}</h1>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <div>
          <button onClick={handleClickMinus}>minus</button>
          <button onClick={handleReset}>reset</button>
          <button onClick={handleClickPlus}>plus</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
