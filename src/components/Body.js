import WelcomeBanner from "./WelcomeBanner";
import ImageCascader from "./ImageCascader";
import { FoodTypeImages } from "../utils/mockData";
import { FoodBrandImages } from "../utils/mockData";
import RestaurantContainer from "./RestaurantContainer";

const Body = () => {
  return (
    <main className="body">
      {/* <WelcomeBanner /> */}
      <ImageCascader
        images={FoodTypeImages}
        cascaderTitle="Inspiration for your first order"
      />
      <ImageCascader
        images={FoodBrandImages}
        cascaderTitle="Top brands for you"
      />
      <RestaurantContainer />
    </main>
  );
};

export default Body;
