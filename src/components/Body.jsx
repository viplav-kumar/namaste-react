import { useContext } from "react";
import {
  FoodOutletImages,
  FoodTypeImages,
} from "../utils/constants/foodTypeAndOutletData";
import UserContext from "../utils/contexts/UserContext";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
import ImageCarousel from "./ImageCarousel";
import OfflinePage from "./OfflinePage";
import RestaurantContainer from "./restaurant/RestaurantContainer";
import WelcomeBanner from "./WelcomeBanner";

const Body = () => {
  const { loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <OfflinePage />;
  return (
    <main className="mx-25 my-5">
      <i>
        <h3 className="font-semibold text-[24px] -mb-2.5 text-center text-[#222222ab] font-['Segoe_UI'_Tahoma_sans-serif]">
          Zingry welcomes you {loggedInUser}
        </h3>
      </i>
      <WelcomeBanner />
      <ImageCarousel
        images={FoodTypeImages}
        title="Inspiration for your first order"
      />
      <ImageCarousel images={FoodOutletImages} title="Top brands for you" />
      <RestaurantContainer />
      {/* <UserContainerClass /> */}
    </main>
  );
};

export default Body;
