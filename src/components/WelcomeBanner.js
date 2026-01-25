import AppLogo from "./AppLogo";

const WelcomeBanner = () => {
  return (
    <div className="relative text-center p-5">
      <img
        className="w-full h-[80%] rounded-[70px]"
        alt="Welcome Image"
        src="../../images/banners/welcome.png"
      ></img>
      <AppLogo
        logoPart1Class="absolute top-9 left-240"
        logoPart2Class="absolute top-9 left-255 pl-[5px]"
        src="../../images/logos/app.png"
      />
      <div className="absolute top-178 left-115 text-4xl font-semibold font-[Segoe UI, Tahoma, sans-serif] text-white drop-shadow-[0_0_2px_black]">
        Hungry? Order Now
      </div>
    </div>
  );
};

export default WelcomeBanner;
