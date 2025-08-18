const RestaurantCard = ({ restaurantData }) => {
  // const {
  //   name,
  //   image_url,
  //   rating,
  //   amountForOne,
  //   cuisines,
  //   deliveryTime,
  //   discount,
  // } = restaurantData.basicDetails;

  const resInfo = {
    name: restaurantData.name,
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/" +
      restaurantData.cloudinaryImageId,
    rating: restaurantData.avgRatingString,
    amountForOne: restaurantData.costForTwo,
    cuisines: restaurantData.cuisines,
    deliveryTime: restaurantData.sla.slaString,
    discount: restaurantData.aggregatedDiscountInfoV3.subHeader,
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
        <p className="res-amountforOne">{resInfo.amountForOne}</p>
      </div>
      <div className="res-discount-deliveryTime">
        <p className="res-discount">{resInfo.discount}</p>
        <p className="res-deliveryTime">{resInfo.deliveryTime}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
