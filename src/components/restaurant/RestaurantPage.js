import { useParams } from "react-router-dom";
import useRestaurantDetails from "../../utils/useRestaurantDetails";
import RestaurantPageShimmer from "./RestaurantPageShimmer";

const RestaurantPage = () => {
  const { resId } = useParams();
  const [isLoading, restaurantInfo] = useRestaurantDetails(resId);
  return isLoading ? (
    <RestaurantPageShimmer />
  ) : (
    <div className="restaurant-page">
      {/* Banner Section */}
      <div className="restaurant-banner">
        <img
          src={restaurantInfo.cloudinaryImageId}
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
              {item?.itemCards?.categories?.length
                ? item?.itemCards?.categories?.map((nestedCategory) => (
                    <div key={nestedCategory.id}>
                      <h3 className="section-subtitle">
                        {nestedCategory.title}
                      </h3>
                      {nestedCategory?.itemCards?.length ? (
                        nestedCategory?.itemCards?.map((nestedItem) => (
                          <div key={nestedItem.id} className="menu-card">
                            <div className="menu-left">
                              <h3 className="menu-name">
                                {nestedItem.name} |{" "}
                                {nestedItem.rating
                                  ? nestedItem.rating +
                                    "⭐" +
                                    " " +
                                    "(" +
                                    nestedItem.ratingCount +
                                    ")"
                                  : "(No Reviews Yet)"}
                              </h3>
                              <p className="menu-price">{nestedItem.price}</p>
                              <p className="menu-desc">
                                {nestedItem.description}
                              </p>
                              <button className="add-btn">ADD +</button>
                            </div>

                            <div className="menu-image-wrapper">
                              <img
                                src={nestedItem.imageId}
                                alt={nestedItem.name}
                                className="menu-image"
                              />
                            </div>
                          </div>
                        ))
                      ) : (
                        <></>
                      )}
                    </div>
                  ))
                : item.itemCards.map((option) => (
                    <div key={option.id} className="menu-card">
                      <div className="menu-left">
                        <h3 className="menu-name">
                          {option.name} |{" "}
                          {option.rating
                            ? option.rating +
                              "⭐" +
                              " " +
                              "(" +
                              option.ratingCount +
                              ")"
                            : "(No Reviews Yet)"}
                        </h3>
                        <p className="menu-price">{option.price}</p>
                        <p className="menu-desc">{option.description}</p>
                        <button className="add-btn">ADD +</button>
                      </div>

                      <div className="menu-image-wrapper">
                        <img
                          src={option.imageId}
                          alt={option.name}
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
