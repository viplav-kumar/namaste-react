import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantPage = () => {
  console.log("Restaurant Page Component Rendered");
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { resId } = useParams();

  const restaurantAPI = process.env.SWIGGY_RESTAURANT_API;
  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    try {
      const data = await fetch(restaurantAPI + resId);
      const restaurantData = await data?.json();
      console.log(restaurantData);
      setRestaurantInfo(restaurantData);
    } catch (error) {
      console.log(error || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="restaurant-page">
      {/* Banner Section */}
      <div className="restaurant-banner">
        <img
          src="/images/restaurant-banner.jpg"
          alt="Restaurant Banner"
          className="banner-img"
        />
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1 className="restaurant-name">La Pino'z Pizza</h1>
          <p className="restaurant-tags">Italian • Pizza • Beverages</p>
          <div className="restaurant-meta">
            <span>⭐ 4.3</span>
            <span>•</span>
            <span>35 mins</span>
            <span>•</span>
            <span>₹300 for two</span>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="restaurant-menu">
        <h2 className="section-title">Recommended</h2>

        <div className="menu-list">
          {Array(8)
            .fill("")
            .map((_, i) => (
              <div key={i} className="menu-card">
                <div className="menu-left">
                  <h3 className="menu-name">Margherita Pizza</h3>
                  <p className="menu-price">₹249</p>
                  <p className="menu-desc">
                    Classic delight with 100% real mozzarella cheese.
                  </p>

                  <button className="add-btn">ADD +</button>
                </div>

                <div className="menu-image-wrapper">
                  <img
                    src="/images/pizza-item.jpg"
                    alt="item"
                    className="menu-image"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
