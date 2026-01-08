import AppLogo from "./AppLogo";
import HeaderSearchBar from "./HeaderSearchBar";
import { useState, useEffect } from "react";

const MyHeader = () => {
  const SHOPPING_CART_IMAGE = process.env.SHOPPING_CART_IMAGE;
  const PROFILE_ICON = process.env.PROFILE_ICON;
  const [loginLogoutText, setLoginLogoutText] = useState("Login");
  useEffect(() => {
    // console.log("useEffect Hook Called");
  }, []);

  const handleLoginLogoutOperation = () => {
    loginLogoutText === "Login"
      ? setLoginLogoutText("Logout")
      : setLoginLogoutText("Login");
  };
  return (
    <header className="header">
      <AppLogo src="../../images/app-logo-images/AppLogo.png" />
      <HeaderSearchBar />
      <div className="cartImage">
        <img alt="App Cart Image" src={SHOPPING_CART_IMAGE}></img>
      </div>
      <div className="profileImage">
        <img alt="App Profile Image" src={PROFILE_ICON}></img>
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
