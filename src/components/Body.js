import ImageCarousel from "./ImageCarousel";
import { FoodTypeImages } from "../utils/foodTypeAndOutletData";
import { FoodOutletImages } from "../utils/foodTypeAndOutletData";
import RestaurantContainer from "./restaurant/RestaurantContainer";
// import UserContainerClass from "./UserContainerClass";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflinePage from "./Offlinepage";

const Body = () => {
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <OfflinePage />;
  return (
    <main className="body">
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
