const RestaurantCard = ({ restaurantData }) => {
  const {
    name,
    image_url,
    rating,
    amountForOne,
    cuisine,
    deliveryTime,
    discount,
  } = restaurantData.basicDetails;
  return (
    <div className="res-card">
      <img alt={name} src={image_url}></img>
      <div className="res-name-rating">
        <p className="res-name">{name}</p>
        <div className="res-rating">
          <p>{rating}&nbsp;⭐</p>
        </div>
      </div>
      <div className="res-cuisines-amountforOne">
        <p className="res-cuisines" data-fulltext={cuisine.join(", ")}>
          {cuisine.join(", ")}
        </p>
        <p className="res-amountforOne">{amountForOne}</p>
      </div>
      <div className="res-discount-deliveryTime">
        <p className="res-discount">{discount}</p>
        <p className="res-deliveryTime">{deliveryTime}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
