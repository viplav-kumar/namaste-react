export const RestaurantPageAccordionHeader = ({
  item,
  firstDivCss,
  titleCss,
}) => {
  return (
    <div
      className={`flex justify-between items-center text-center p-1 rounded-md mb-2 box-shadow-[0_6px_14px_rgba(0_0_0_0.06)] ${firstDivCss}`}
    >
      <h2 className={`text-[20px] font-semibold text-gray-800 ${titleCss}`}>
        {item.title}
      </h2>
      <p>🔽</p>
    </div>
  );
};

export const RestaurantPageAccordionContent = ({ item, firstDivCss }) => {
  return (
    <div
      className={`bg-white rounded-xl p-3 flex justify-end gap-5 box-shadow-[0_6px_14px_rgba(0_0_0_0.06)] transition-all duration-300 ease-in-out hover:scale-[1.01] ${firstDivCss}`}
    >
      <div className="w-10/12 flex-1">
        <h3 className="m-0 text-[16px] font-semibold text-[#222]">
          {item.name} |{" "}
          {item.rating
            ? item.rating + "⭐" + " " + "(" + item.ratingCount + ")"
            : "(No Reviews Yet)"}
        </h3>
        <p className="mt-1.5 text-[16px] text-[#333] font-medium">
          ₹{item.price}
        </p>
        <p className="whitespace-nowrap overflow-hidden text-ellipsis text-[14px] text-[#666] mt-2 max-w-[90%] leading-[1.4]">
          {item.description}
        </p>
      </div>

      <div className="w-2/12 flex flex-col items-center justify-center">
        <img
          src={item.imageId}
          alt={item.name}
          className="w-35 h-30 rounded-xl overflow-hidden object-cover"
        />
        <button className="-mt-3 py-1 px-3 bg-[#ff6b6b] text-white border-none rounded-lg font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#e25656]">
          ADD +
        </button>
      </div>
    </div>
  );
};
