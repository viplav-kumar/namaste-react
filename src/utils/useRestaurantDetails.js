import { useState, useEffect } from "react";

const useRestaurantDetails = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const restaurantAPI = process.env.RESTAURANT_LIST_API;

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    try {
      const data = await fetch(restaurantAPI + "/" + resId);
      const restaurantData = await data.json();
      setRestaurantInfo(restaurantData);
    } catch (error) {
      console.log(error || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, restaurantInfo];
};

export default useRestaurantDetails;
