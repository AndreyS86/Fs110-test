const Counter = () => {
  const handleClickPlus = (e) => {
    console.log("Plus click");
    console.log(e);
    // e.target.innerHTML = "BASE EVENT TARGET";
  };

  const handleReset = (name) => {
    console.log(`Hello ${name}`);
  };
  return (
    <div>
      <div>
        <h1>{1}</h1>
        <div>
          <button onClick={() => console.log("Hello")}>minus</button>
          <button onClick={() => handleReset("Oleh")}>reset</button>
          <button onClick={handleClickPlus}>plus</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
