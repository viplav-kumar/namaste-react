import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../utils/mockData";
import { useState, useEffect } from "react";

const RestaurantContainer = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [topRatedRestaurantSelected, setTopRatedRestaurantSelected] =
    useState(false);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

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

  const getTopRatedRestaurants = () => {
    if (!topRatedRestaurantSelected) {
      const topRatedRestaurants = restaurantData.filter(
        (res) => res.info.avgRating >= 4.4
      );
      setRestaurantData(topRatedRestaurants);
      setTopRatedRestaurantSelected(true);
    } else {
      fetchRestaurantData();
      setTopRatedRestaurantSelected(false);
    }
  };

  return (
    <div className="res-container">
      <h3>Food Delivery Restaurants Near You</h3>
      <button
        className={
          topRatedRestaurantSelected
            ? "top-rated-res-btn filterSelected"
            : "top-rated-res-btn"
        }
        onClick={() => getTopRatedRestaurants()}
      >
        Top Rated Restaurants
      </button>
      <section className="res-container-cards">
        {restaurantData.map((res) => (
          <RestaurantCard restaurantData={res.info} key={res.info.id} />
        ))}
      </section>
    </div>
  );
};

export default RestaurantContainer;
