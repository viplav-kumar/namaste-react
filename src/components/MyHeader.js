import AppLogo from "./AppLogo";
import HeaderSearchBar from "./HeaderSearchBar";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      <Link className="groceryImage" to="/grocery">
        <img alt="Grocery Image" src="../../images/icons/grocery.jpg"></img>
        <p>Grocery</p>
      </Link>
      <div className="cartImage">
        <img alt="App Cart Image" src="../../images/icons/cart.png"></img>
        <p>My Cart</p>
      </div>
      <div
        className="profileImage"
        onClick={() => handleLoginLogoutOperation()}
      >
        <img alt="App Profile Image" src="../../images/icons/profile.jpg"></img>
        <p className="login-logout-text">{loginLogoutText}</p>
      </div>
    </header>
  );
};

export default MyHeader;
