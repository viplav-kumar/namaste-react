const RestaurantPageFooter = ({ restaurantInfo }) => {
  return (
    <div className="bg-white p-5 mx-10 my-5 rounded-xl box-shadow-[0_6px_14px_rgba(0_0_0_0.06)]">
      <div className="flex items-center border-b border-zinc-500">
        <span className="-ml-4">
          <img
            src="../../../images/icons/fssai.png"
            alt="FSSAI"
            className="w-20 h-15"
          ></img>
        </span>
        <span className="text-gray-500">{restaurantInfo.FSSAI}</span>
      </div>

      <div className="flex flex-col border-b border-zinc-500">
        <p className="font-semibold text-gray-600">{restaurantInfo.name}</p>
        <p className="text-gray-500">{`(Outlet: ${restaurantInfo.areaName})`}</p>
        <p className="font-[12px] text-gray-500 my-2">
          📍 {restaurantInfo.completeAddress}
        </p>
      </div>
    </div>
  );
};

export default RestaurantPageFooter;
