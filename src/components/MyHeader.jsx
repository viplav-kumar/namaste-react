import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/contexts/UserContext";
import { getInitials } from "../utils/formatters/stringUtils";
import AppLogo from "./AppLogo";
import HeaderSearchBar from "./HeaderSearchBar";

const MyHeader = ({ setUserName }) => {
  const { loggedInUser } = useContext(UserContext);

  const handleLoginLogoutOperation = () => {
    loggedInUser === "Guest"
      ? setUserName("Viplav Kumar")
      : setUserName("Guest");
  };
  return (
    <header className="flex justify-evenly top-0 bg-white z-1000 pt-2 w-full fixed shadow-lg">
      <AppLogo src="../../images/logos/app.png" />
      <HeaderSearchBar />
      <Link
        className="flex flex-col items-center w-17.5 h-15.5 mt-2.5 hover:cursor-pointer"
        to="/grocery"
      >
        <img
          className="h-10 w-10 rounded mb-1.25"
          alt="Grocery Image"
          src="../../images/icons/grocery.jpg"
        ></img>
        <p className="-m-3.75 text-sm font-['Segoe_UI'_Tahoma_sans-serif]">
          Grocery
        </p>
      </Link>
      <div className="flex flex-col items-center w-12.5 h-15.5 mt-3.5 hover:cursor-pointer">
        <img
          className="h-7.5 w-7.5 rounded mb-3"
          alt="App Cart Image"
          src="../../images/icons/cart.png"
        ></img>
        <p className="-m-3.75 text-sm font-['Segoe_UI'_Tahoma_sans-serif]">
          My Cart
        </p>
      </div>
      <div
        className="flex flex-col items-center w-20 mt-4 h-15.5 overflow-hidden hover:cursor-pointer"
        onClick={() => handleLoginLogoutOperation()}
      >
        <img
          className="h-7.5 w-7.5 rounded mb-3"
          alt="App Profile Image"
          src="../../images/icons/profile.jpg"
        ></img>
        <p className="-m-3.75 h-5 overflow-hidden whitespace-nowrap text-ellipsis text-left text-sm font-['Segoe_UI'_Tahoma_sans-serif] mb-2.25">
          {loggedInUser === "Guest" ? "Login" : getInitials(loggedInUser)}
        </p>
      </div>
    </header>
  );
};

export default MyHeader;
