const RestaurantPageMenu = ({ restaurantInfo }) => {
  return (
    <div className="mt-10 py-0 px-10">
      {restaurantInfo.restaurantPageDetails.category.map((item) => (
        <div key={item.id}>
          <h2 className="text-[28px] mb-5 font-semibold text-[#222]">
            {item.title}
          </h2>
          <div className="flex flex-col gap-6">
            {item?.itemCards?.categories?.length
              ? item?.itemCards?.categories?.map((nestedCategory) => (
                  <div key={nestedCategory.id}>
                    <h3 className="text-[22px] mb-5 font-semibold text-[#222]">
                      {nestedCategory.title}
                    </h3>
                    {nestedCategory?.itemCards?.length ? (
                      nestedCategory?.itemCards?.map((nestedItem) => (
                        <div
                          key={nestedItem.id}
                          className="bg-white rounded-xl p-5 flex justify-between gap-5 box-shadow-[0_6px_14px_rgba(0_0_0_0.06)] transition-all duration-300 ease-in-out hover:scale-[1.01]
"
                        >
                          <div className="flex-1">
                            <h3 className="m-0 text-[18px] font-semibold text-[#222]">
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
                            <p className="mt-1.5 text-[18px] text-[#333] font-medium">
                              {nestedItem.price}
                            </p>
                            <p className="text-[15px] text-[#666] mt-2 max-w-[90%] leading-[1.4]">
                              {nestedItem.description}
                            </p>
                            <button className="mt-4 py-2.5 px-5.5 bg-[#ff6b6b] text-white border-none rounded-lg font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#e25656]">
                              ADD +
                            </button>
                          </div>

                          <div className="w-35 h-30 rounded-xl overflow-hidden">
                            <img
                              src={nestedItem.imageId}
                              alt={nestedItem.name}
                              className="w-full h-full object-cover"
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
                  <div
                    key={option.id}
                    className="bg-white rounded-xl p-5 flex justify-between gap-5 box-shadow-[0_6px_14px_rgba(0_0_0_0.06)] transition-all duration-300 ease-in-out hover:scale-[1.01]
"
                  >
                    <div className="flex-1">
                      <h3 className="m-0 text-[18px] font-semibold text-[#222]">
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
                      <p className="mt-1.5 text-[18px] text-[#333] font-medium">
                        {option.price}
                      </p>
                      <p className="text-[15px] text-[#666] mt-2 max-w-[90%] leading-[1.4]">
                        {option.description}
                      </p>
                      <button className="mt-4 py-2.5 px-5.5 bg-[#ff6b6b] text-white border-none rounded-lg font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#e25656]">
                        ADD +
                      </button>
                    </div>

                    <div className="w-35 h-30 rounded-xl overflow-hidden">
                      <img
                        src={option.imageId}
                        alt={option.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantPageMenu;
