import clsx from "clsx";
import styles from "./User.module.css";
import { FaUser } from "react-icons/fa";
console.log(styles);

const User = ({
  name,
  email,
  isOpenToWork,
  bio = "This user hide own bio",
}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>
        {name}
        <FaUser className={styles.iconUser} />
      </h3>
      <p>{email}</p>
      <p>{bio}</p>
      {/* <p
        className={`${styles.status} ${
          isOpenToWork ? styles.green : styles.red
        }`}
      >
        {isOpenToWork ? "Хоче рацювати" : "Не шукає роботу"}
      </p> */}
      <p
        className={clsx(
          styles.status,
          isOpenToWork ? styles.green : styles.red
        )}
      >
        {isOpenToWork ? "Хоче рацювати" : "Не шукає роботу"}
      </p>
      <button>Delete</button>
    </div>
  );
};
export default User;
