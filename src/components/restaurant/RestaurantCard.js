const RestaurantCard = ({ restaurantData }) => {
  const resInfo = {
    name: restaurantData.name ? restaurantData.name : "",
    image_url: restaurantData.cloudinaryImageId
      ? restaurantData.cloudinaryImageId
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
    <div className="w-75 bg-gray-100 rounded-xl shadow-[0_4px_10px_rgba(0_0_0_0.08)] overflow-hidden flex flex-col cursor-pointer transition-transform transition-shadow duration-200 ease-in-out hover:shadow-[0_6px_16px_rgba(0_0_0_0.12)] hover:-translate-y-0.75">
      <img
        className="w-full h-full object-contain"
        alt={resInfo.name}
        src={resInfo.image_url}
      ></img>
      <div className="flex justify-between items-center pt-3 pb-0 px-1">
        <p className="m-0 text-[1.1rem] font-semibold text-[#222]">
          {resInfo.name}
        </p>
        <div>
          <p className="m-o bg-[#28a745] text-white text-[0.85rem] font-medium pt-1 pr-2 pb-1 pl-2 rounded-md ">
            {resInfo.rating}&nbsp;⭐
          </p>
        </div>
      </div>
      <div className="flex justify-between py-1 px-1">
        <p
          className="m-0 w-37.5 whitespace-nowrap overflow-hidden text-ellipsis text-[0.9rem] text-[#555]"
          data-fulltext={resInfo.cuisines.join(", ")}
        >
          {resInfo.cuisines.join(", ")}
        </p>
        <p className="m-0 text-[0.9rem] font-medium text-[#444]">
          {resInfo.amountForTwo}
        </p>
      </div>
      <div className="flex justify-between py-1 px-1">
        <p className="m-0 text-[#d9534f] text-[0.85rem] font-medium">
          {resInfo.discount}
        </p>
        <p className="m-0 text-[0.85rem] text-[#555]">{resInfo.deliveryTime}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
