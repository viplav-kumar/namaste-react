const RestaurantCard = ({ restaurantData }) => {
  const resInfo = {
    name: restaurantData.name ? restaurantData.name : "",
    image_url: restaurantData.cloudinaryImageId
      ? "https://media-assets.swiggy.com/swiggy/image/upload/" +
        restaurantData.cloudinaryImageId
      : "",
    rating: restaurantData.avgRatingString
      ? restaurantData.avgRatingString
      : "",
    amountForTwo: restaurantData.costForTwo ? restaurantData.costForTwo : "",
    cuisines: restaurantData.cuisines.length ? restaurantData.cuisines : [],
    deliveryTime: restaurantData.deliveryTime
      ? restaurantData.deliveryTime
      : "",
    discount: restaurantData.discountInfo ? restaurantData.discountInfo : "",
  };

  return (
    <div className="res-card">
      <img alt={resInfo.name} src={resInfo.image_url}></img>
      <div className="res-name-rating">
        <p className="res-name">{resInfo.name}</p>
        <div className="res-rating">
          <p>{resInfo.rating}&nbsp;⭐</p>
        </div>
      </div>
      <div className="res-cuisines-amountforOne">
        <p className="res-cuisines" data-fulltext={resInfo.cuisines.join(", ")}>
          {resInfo.cuisines.join(", ")}
        </p>
        <p className="res-amountforTwo">{resInfo.amountForTwo}</p>
      </div>
      <div className="res-discount-deliveryTime">
        <p className="res-discount">{resInfo.discount}</p>
        <p className="res-deliveryTime">{resInfo.deliveryTime}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
