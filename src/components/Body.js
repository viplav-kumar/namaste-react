import ImageCascader from "./ImageCascader";
import { FoodTypeImages } from "../utils/mockData";
import { FoodBrandImages } from "../utils/mockData";
import RestaurantContainer from "./RestaurantContainer";
// import UserContainerClass from "./UserContainerClass";

const Body = () => {
  return (
    <main className="body">
      <ImageCascader
        images={FoodTypeImages}
        cascaderTitle="Inspiration for your first order"
      />
      <ImageCascader
        images={FoodBrandImages}
        cascaderTitle="Top brands for you"
      />
      <RestaurantContainer />
      {/* <UserContainerClass /> */}
    </main>
  );
};

export default Body;
