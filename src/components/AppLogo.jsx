import { Link } from "react-router-dom";

const AppLogo = ({ src, logoPart1Class, logoPart2Class }) => {
  return (
    <Link className="flex hover:cursor-pointer" to="/">
      <img
        className={`h-[65] rounded-full ${logoPart1Class}`}
        alt="App Logo"
        src={src}
      ></img>
      <h3
        className={`text-3xl font-bold font-[cursive] mt-3.75 ${logoPart2Class}`}
      >
        ingry
      </h3>
    </Link>
  );
};

export default AppLogo;
