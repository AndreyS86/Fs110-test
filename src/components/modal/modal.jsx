const Modal = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      Title module
      <div>
       {props.children}
      </div>{" "}
    </div>
  );
};

export default Modal;
