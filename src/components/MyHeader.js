import AppLogo from "./AppLogo";
import HeaderSearchBar from "./HeaderSearchBar";
import { SHOPPING_CART_IMAGE, PROFILE_ICON } from "../utils/constants";

const MyHeader = () => {
  return (
    <header className="header">
      <AppLogo src="../../images/AppLogo.png" />
      <HeaderSearchBar />
      <div className="cartImage">
        <img alt="App Cart Image" src={SHOPPING_CART_IMAGE}></img>
      </div>
      <div className="profileImage">
        <img alt="App Profile Image" src={PROFILE_ICON}></img>
      </div>
    </header>
  );
};

export default MyHeader;
