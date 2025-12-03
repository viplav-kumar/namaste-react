import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../utils/mockData";
import { useState, useEffect } from "react";

const RestaurantContainer = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);
  const [topRatedRestaurantSelected, setTopRatedRestaurantSelected] =
    useState(false);
  const [serachQuery, setSerachQuery] = useState("");
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
      let restaurantInfo = [];
      if (
        jsonResponse?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
          ?.restaurants?.length
      ) {
        restaurantInfo =
          jsonResponse?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
      } else if (
        jsonResponse?.data?.cards[4].card?.card?.gridElements?.infoWithStyle
          ?.restaurants?.length
      ) {
        restaurantInfo =
          jsonResponse?.data?.cards[4].card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
      }
      setRestaurantData(restaurantInfo);
      setFilteredRestaurantData(restaurantInfo);
    } else {
      console.log("Failed to get restaurants data");
    }
  };

  const getTopRatedRestaurants = () => {
    if (!topRatedRestaurantSelected) {
      const topRatedRestaurants = restaurantData.filter(
        (res) => res.info.avgRating >= 4.5
      );
      setFilteredRestaurantData(topRatedRestaurants);
      setTopRatedRestaurantSelected(true);
    } else {
      fetchRestaurantData();
      setTopRatedRestaurantSelected(false);
    }
  };

  const filterRestaurant = () => {
    const filteredRestaurants = restaurantData.filter((res) =>
      res.info.name.toLowerCase().includes(serachQuery.toLowerCase())
    );
    setFilteredRestaurantData(filteredRestaurants);
  };

  return (
    <div className="res-container">
      <h3>Food Delivery Restaurants Near You</h3>
      <div className="res-search-filter">
        <div className="search-food-restaurants-container">
          <input
            type="text"
            className="search-food-restaurants-input"
            placeholder="Search for restaurants and food"
            value={serachQuery}
            onChange={(e) => {
              setSerachQuery(e.target.value);
              console.log(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                filterRestaurant();
              }
            }}
            onBlur={(e) => {
              if (e.target.value === "") {
                filterRestaurant();
              }
            }}
          ></input>
          <button
            className="search-food-restaurants-btn"
            onClick={() => filterRestaurant()}
          >
            Search
          </button>
        </div>
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
      </div>
      {filteredRestaurantData.length ? (
        <section className="res-container-cards">
          {filteredRestaurantData.map((res) => (
            <RestaurantCard restaurantData={res.info} key={res.info.id} />
          ))}
        </section>
      ) : (
        <p>No restaurants available at the moment.</p>
      )}
    </div>
  );
};

export default RestaurantContainer;
