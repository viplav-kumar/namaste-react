import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../utils/mockData";

const RestaurantContainer = () => {
  return (
    <div className="res-container">
      <h3>Food Delivery Restaurants Near You</h3>
      <section className="res-container-cards">
        {RestaurantList.map((res) => (
          <RestaurantCard restaurantData={res} key={res.basicDetails.resId} />
        ))}
      </section>
    </div>
  );
};

export default RestaurantContainer;
