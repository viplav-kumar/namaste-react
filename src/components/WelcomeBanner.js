import AppLogo from "./AppLogo";
import { WELCOME_BANNER_IMAGE } from "../utils/constants";

const WelcomeBanner = () => {
  return (
    <div className="welcomeComponent">
      <img alt="Welcome Image" src={WELCOME_BANNER_IMAGE}></img>
      <AppLogo src="../../images/AppLogoReverse.png" />
      <div className="welcomeMessage">Hungry? Order Now</div>
    </div>
  );
};

export default WelcomeBanner;
