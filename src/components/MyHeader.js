import AppLogo from "./AppLogo";
import HeaderSearchBar from "./HeaderSearchBar";
import { useState } from "react";

const MyHeader = () => {
  const [loginLogoutText, setLoginLogoutText] = useState("Login");

  const handleLoginLogoutOperation = () => {
    loginLogoutText === "Login"
      ? setLoginLogoutText("Logout")
      : setLoginLogoutText("Login");
  };
  return (
    <header className="header">
      <AppLogo src="../../images/logos/app.png" />
      <HeaderSearchBar />
      <div className="cartImage">
        <img alt="App Cart Image" src="../../images/icons/cart.png"></img>
      </div>
      <div className="profileImage">
        <img alt="App Profile Image" src="../../images/icons/profile.jpg"></img>
        <button
          className="login-logout-text"
          onClick={() => handleLoginLogoutOperation()}
        >
          {loginLogoutText}
        </button>
      </div>
    </header>
  );
};

export default MyHeader;
