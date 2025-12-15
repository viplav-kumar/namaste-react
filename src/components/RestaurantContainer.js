import RestaurantCard from "./RestaurantCard";
import RestaurantCardShimmer from "./RestaurantCardShimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RestaurantContainer = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);
  const [topRatedRestaurantSelected, setTopRatedRestaurantSelected] =
    useState(false);
  const [serachQuery, setSerachQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const restaurantListAPI = process.env.SWIGGY_RESTAURANT_LIST_API;
  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    try {
      const response = await fetch(restaurantListAPI);
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
    } catch (error) {
      console.log(error || "Something went wrong.");
    } finally {
      setIsLoading(false);
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
      {isLoading ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "60px" }}>
          {Array(6)
            .fill("")
            .map((_, i) => (
              <RestaurantCardShimmer key={i} />
            ))}
        </div>
      ) : filteredRestaurantData.length ? (
        <section className="res-container-cards">
          {filteredRestaurantData.map((res) => (
            <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
              <RestaurantCard restaurantData={res.info} />
            </Link>
          ))}
        </section>
      ) : (
        <p>No restaurants available at the moment.</p>
      )}
    </div>
  );
};

export default RestaurantContainer;
