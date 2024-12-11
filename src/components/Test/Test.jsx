// import { useState } from "react";
// const Test = () => {
//   const handleClick = () => {
//     alert("I`m a button");
//   };
//   return <button onClick={handleClick}>Click me!</button>;
// };

// const Test = () => {
//   const handleClick = (evt) => {
//     console.log(evt);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>First button</button>
//       <button onClick={(evt) => console.log(evt)}>Second button</button>
//     </>
//   );
// };

// const CustomButton = ({ message, children }) => {
//   return <button onClick={() => alert(message)}>{children}</button>;
// };

// const Test = () => {
//   return (
//     <>
//       <CustomButton message="Playing music!">Play some music</CustomButton>
//       <CustomButton message="Uploading your data!">Upload data</CustomButton>
//     </>
//   );
// };

// const Test = () => {
//   // let clicks = 0;
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     // clicks = clicks + 1;
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// }

// const Test = () => {
//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>Current: {clicks}</button>
//       <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
//       {isOpen && <p>Now you can see me!</p>}
//     </>
//   );
// };

// const Test = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };

// const Test = () => {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
//   });

//   const updateX = () => {
//     setValues({
//       ...values,
//       x: values.x + 1,
//     });
//   };

//   const updateY = () => {
//     setValues({
//       ...values,
//       y: values.y + 1,
//     });
//   };

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// };

// export default Test:
