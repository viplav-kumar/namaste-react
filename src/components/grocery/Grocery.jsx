import { useContext } from "react";
import UserContext from "../../utils/contexts/UserContext";

const Grocery = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="flex flex-col justify-center items-center h-screen font-[Segoe_UI,Tahoma,sans-serif]">
      <h3>
        Welcome to Zingry Mart
        {loggedInUser === "Guest"
          ? " "
          : `, ${loggedInUser.trim().split(/\s+/)[0]}! `}
        -{" "}
        <i>
          <u>Get your grocery items delivered in minutes</u>.
        </i>
      </h3>
      <p className="bg-yellow-300 text-black p-1.25 mt-1 text-center rounded-lg">
        Page under maintenance...
      </p>
      <p className=" text-black p-1.25 text-center">
        Sorry for the inconvenience.
      </p>
    </div>
  );
};

export default Grocery;
