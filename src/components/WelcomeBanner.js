import AppLogo from "./AppLogo";

const WelcomeBanner = () => {
  const WELCOME_BANNER_IMAGE = process.env.WELCOME_BANNER_IMAGE;
  return (
    <div className="welcomeComponent">
      <img alt="Welcome Image" src={WELCOME_BANNER_IMAGE}></img>
      <AppLogo src="../../images/AppLogoReverse.png" />
      <div className="welcomeMessage">Hungry? Order Now</div>
    </div>
  );
};

export default WelcomeBanner;
