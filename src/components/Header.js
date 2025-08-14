import AppLogo from "./AppLogo";
import NavigationMenuItems from "./NavigationMenuItems";
import { SHOPPING_CART_IMAGE, PROFILE_ICON } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <AppLogo src="../../images/AppLogo.png" />
      <NavigationMenuItems />
      <div className="cartImage">
        <img alt="App Cart Image" src={SHOPPING_CART_IMAGE}></img>
      </div>
      <div className="profileImage">
        <img alt="App Profile Image" src={PROFILE_ICON}></img>
      </div>
    </div>
  );
};

export default Header;
