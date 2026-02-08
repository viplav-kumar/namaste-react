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
    <header className="flex justify-evenly top-0 bg-white z-1000 pt-2 w-full fixed shadow-lg">
      <AppLogo src="../../images/logos/app.png" />
      <HeaderSearchBar />
      <Link
        className="flex flex-col text-center mt-[10] hover:cursor-pointer"
        to="/grocery"
      >
        <img
          className="h-[40] w-[40] rounded mb-[5]"
          alt="Grocery Image"
          src="../../images/icons/grocery.jpg"
        ></img>
        <p className="m-[-15] text-sm font-['Segoe_UI'_Tahoma_sans-serif]">
          Grocery
        </p>
      </Link>
      <div className="flex flex-col text-center mt-[14] hover:cursor-pointer">
        <img
          className="h-[30] w-[30] rounded mb-[12]"
          alt="App Cart Image"
          src="../../images/icons/cart.png"
        ></img>
        <p className="m-[-15] text-sm font-['Segoe_UI'_Tahoma_sans-serif]">
          My Cart
        </p>
      </div>
      <div
        className="flex flex-col text-center mt-[16] hover:cursor-pointer"
        onClick={() => handleLoginLogoutOperation()}
      >
        <img
          className="h-[30] w-[30] rounded mb-[12]"
          alt="App Profile Image"
          src="../../images/icons/profile.jpg"
        ></img>
        <p className="m-[-15] text-sm font-['Segoe_UI'_Tahoma_sans-serif] mb-[9]">
          {loginLogoutText}
        </p>
      </div>
    </header>
  );
};

export default MyHeader;
