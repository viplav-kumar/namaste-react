import ImageCarousel from "./ImageCarousel";
import { FoodTypeImages } from "../utils/foodTypeAndOutletData";
import { FoodOutletImages } from "../utils/foodTypeAndOutletData";
import RestaurantContainer from "./RestaurantContainer";
// import UserContainerClass from "./UserContainerClass";

const Body = () => {
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
