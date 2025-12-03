import { Link } from "react-router-dom";

const AppLogo = ({ src }) => {
  return (
    <div className="appLogo">
      <Link to="/">
        <img alt="App Logo" src={src}></img>
        <h3>ingry</h3>
      </Link>
    </div>
  );
};

export default AppLogo;
