import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import WelcomeSection from "./components/WelcomeComponents/WelcomeSection";

const App = () => {
  const isOnline = false;
  const isLoggedIn = true;
  const message = "Hello React";
  return (
    <>
      <Header />
      <h3>Tag</h3>
      {isOnline && <h2>Hello</h2>}
      {isLoggedIn && <h2>Welcome</h2>}
      <p>asdfadf {message} sfkj</p>
      <WelcomeSection />
      <Footer />
    </>
  );
};

export default App;
