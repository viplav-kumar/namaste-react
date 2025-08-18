import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../utils/mockData";
import { useState, useEffect } from "react";

const RestaurantContainer = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  useEffect(() => {
    const fetchRestaurantData = async () => {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139&lng=77.2090&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) {
        console.log("API Failed");
        return;
      } else if (response.ok) {
        const jsonResponse = await response.json();
        const restaurantInfo =
          jsonResponse?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        setRestaurantData(restaurantInfo);
      } else {
        console.log("Failed to get restaurants data");
      }
    };
    fetchRestaurantData();
  }, []);

  return (
    <div className="res-container">
      <h3>Food Delivery Restaurants Near You</h3>
      <section className="res-container-cards">
        {restaurantData.map((res) => (
          <RestaurantCard restaurantData={res.info} key={res.info.id} />
        ))}
      </section>
    </div>
  );
};

export default RestaurantContainer;
