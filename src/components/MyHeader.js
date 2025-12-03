import AppLogo from "./AppLogo";
import HeaderSearchBar from "./HeaderSearchBar";
import { SHOPPING_CART_IMAGE, PROFILE_ICON } from "../utils/constants";
import { useState, useEffect } from "react";

const MyHeader = () => {
  console.log("Header Component Rendered");
  const [loginLogoutText, setLoginLogoutText] = useState("Login");
  useEffect(() => {
    console.log("useEffect Hook Called");
  }, []);

  const handleLoginLogoutOperation = () => {
    loginLogoutText === "Login"
      ? setLoginLogoutText("Logout")
      : setLoginLogoutText("Login");
  };
  return (
    <header className="header">
      <AppLogo src="../../images/AppLogo.png" />
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
