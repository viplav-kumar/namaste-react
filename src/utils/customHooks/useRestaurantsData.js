import { useState, useEffect } from "react";

const useRestaurantsData = () => {
  const restaurantListAPI = process.env.RESTAURANT_LIST_API;
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);
  const [topRatedRestaurantSelected, setTopRatedRestaurantSelected] =
    useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    try {
      const response = await fetch(restaurantListAPI);
      const restaurantInfo = await response.json();
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
        (res) => res.avgRating >= 4.5
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
      res.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRestaurantData(filteredRestaurants);
  };

  return [
    filteredRestaurantData,
    searchQuery,
    setSearchQuery,
    isLoading,
    topRatedRestaurantSelected,
    getTopRatedRestaurants,
    filterRestaurant,
  ];
};

export default useRestaurantsData;
