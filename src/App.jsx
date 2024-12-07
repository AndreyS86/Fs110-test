import Header from "./components/Header/Header";
import User from "./components/User/User";
import usersData from "./assets/users.json";
import styles from "./App.module.css";
import img from "./assets/react.svg";
import Button from "./components/button/button";
import { FcApproval } from "react-icons/fc";
import Modal from "./components/modal/modal";

const App = () => {
  return (
    <>
      <Header />
      <Modal title="Test modal" />
      <Modal title="Logout" />
      <Button>Click</Button>
      <Button>
        <FcApproval /> Done
      </Button>

      <h2 className="title">Lesson 2</h2>
      <ul className="wrapper">
        {usersData.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
      <div className={styles.wrapper}>
        <div className={styles.box}>box1</div>
        <div className={styles.box2}>box2</div>
      </div>
      <img src={img} />
    </>
  );
};

export default App;
