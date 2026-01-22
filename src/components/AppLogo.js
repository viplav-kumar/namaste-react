import { Link } from "react-router-dom";

const AppLogo = ({ src }) => {
  return (
    <Link className="flex hover:cursor-pointer" to="/">
      <img className="h-[65] rounded-full" alt="App Logo" src={src}></img>
      <h3 className="pl-[3] text-3xl font-bold font-[cursive] mt-[15]">
        ingry
      </h3>
    </Link>
  );
};

export default AppLogo;
