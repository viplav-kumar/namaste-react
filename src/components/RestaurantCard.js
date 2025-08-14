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
  return <div className="res-card"></div>;
};

export default RestaurantCard;
