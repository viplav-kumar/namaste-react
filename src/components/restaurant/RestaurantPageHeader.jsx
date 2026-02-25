const RestaurantPageHeader = ({ restaurantInfo }) => {
  return (
    <div className="relative h-70 overflow-hidden">
      <img
        src={restaurantInfo.cloudinaryImageId}
        alt="Restaurant Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.7))]"></div>
      <div className="absolute bottom-6.5 left-10 text-white">
        <h1 className="m-0 text-[32px] font-bold">{restaurantInfo.name}</h1>
        <p className="mt-1 text-[16px] opacity-[0.9]">
          {restaurantInfo.cuisines.join(" • ")}
        </p>
        <div className="mt-2.5 text-[15px] flex gap-2 opacity-[0.9]">
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
  );
};

export default RestaurantPageHeader;
