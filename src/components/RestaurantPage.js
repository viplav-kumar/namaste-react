import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantPageShimmer from "./RestaurantPageShimmer";

const RestaurantPage = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { resId } = useParams();
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

  return isLoading ? (
    <RestaurantPageShimmer />
  ) : (
    <div className="restaurant-page">
      {/* Banner Section */}
      <div className="restaurant-banner">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            restaurantInfo.cloudinaryImageId
          }
          alt="Restaurant Banner"
          className="banner-img"
        />
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1 className="restaurant-name">{restaurantInfo.name}</h1>
          <p className="restaurant-tags">
            {restaurantInfo.cuisines.join(" • ")}
          </p>
          <div className="restaurant-meta">
            <span>
              {restaurantInfo.avgRatingString} ⭐ (
              {restaurantInfo.totalRatingsString})
            </span>
            <span>•</span>
            <span>{restaurantInfo.deliveryTime}</span>
            <span>•</span>
            <span>{restaurantInfo.costForTwo}</span>
            <span>•</span>
            <span>{restaurantInfo.discountInfo}</span>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="restaurant-menu">
        {restaurantInfo.restaurantPageDetails.category.map((item) => (
          <div key={item.id}>
            <h2 className="section-title">{item.title}</h2>
            <div className="menu-list">
              {item.itemCards.map((option) => (
                <div key={option.id} className="menu-card">
                  <div className="menu-left">
                    <h3 className="menu-name">
                      {option.name} | {option.rating}⭐ ({option.ratingCount})
                    </h3>
                    <p className="menu-price">{option.price}</p>
                    <p className="menu-desc">{option.description}</p>
                    <button className="add-btn">ADD +</button>
                  </div>

                  <div className="menu-image-wrapper">
                    <img
                      src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/" +
                        option.imageId
                      }
                      alt="item"
                      className="menu-image"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;
