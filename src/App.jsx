import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Message from "./components/Message/message";
import User from "./components/User/User";
import WelcomeSection from "./components/WelcomeComponents/WelcomeSection";
import usersData from "./assets/users";

0;
const App = () => {
  return (
    <>
      <Header />
      {/* <h3>Tag</h3>
      {isOnline && <h2>Hello</h2>}
      {isLoggedIn && <h2>Welcome</h2>}
      <p>asdfadf {message} sfkj</p> */}
      {/* <Message author="Oleg" message="Привіт" isOnline={true} />
      <Message author="Olena" message="Як справи" isOnline={false} />
      <Message author="Petro" message="Добре" isOnline={true} /> */}
      <ul>
        {/* {[1, 2, 3, 4].map((value) => (
          <li>{value}</li>
        ))} */}

        {usersData.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </>
  );
};

export default App;
