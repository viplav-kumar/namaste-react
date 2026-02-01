const GroceryMartShimmer = () => {
  return (
    <div className="p-6 max-w-300 m-auto font-[Inter_system-ui_sans-serif]">
      {/* Header shimmer */}
      <div className="mb-6">
        <div className="bg-[linear-gradient(90deg,#f0f0f0_25%,#e6e6e6_37%,#f0f0f0_63%)] bg-size-[400%_100%] rounded-md animate-shimmer w-65 h-5.5 mb-2.5"></div>
        <div className="bg-[linear-gradient(90deg,#f0f0f0_25%,#e6e6e6_37%,#f0f0f0_63%)] bg-size-[400%_100%] rounded-md animate-shimmer w-45 h-3.5"></div>
      </div>

      {/* Category chips shimmer */}
      <div className="flex gap-3 mb-7 overflow-x-auto">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-[linear-gradient(90deg,#f0f0f0_25%,#e6e6e6_37%,#f0f0f0_63%)] bg-size-[400%_100%] animate-shimmer w-22.5 h-8 rounded-2xl shrink-0"
          ></div>
        ))}
      </div>

      {/* Product grid shimmer */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="">
            <div className="bg-[linear-gradient(90deg,#f0f0f0_25%,#e6e6e6_37%,#f0f0f0_63%)] bg-size-[400%_100%] animate-shimmer w-full h-32.5 rounded-[10px] mb-3"></div>

            <div className="flex flex-col gap-2">
              <div className="bg-[linear-gradient(90deg,#f0f0f0_25%,#e6e6e6_37%,#f0f0f0_63%)] bg-size-[400%_100%] rounded-md animate-shimmer h-4 w-[90%]"></div>
              <div className="bg-[linear-gradient(90deg,#f0f0f0_25%,#e6e6e6_37%,#f0f0f0_63%)] bg-size-[400%_100%] rounded-md animate-shimmer h-3 w-[80%]"></div>
              <div className="bg-[linear-gradient(90deg,#f0f0f0_25%,#e6e6e6_37%,#f0f0f0_63%)] bg-size-[400%_100%] rounded-md animate-shimmer h-3 w-[60%]"></div>

              <div className="flex justify-between items-center mt-3">
                <div className="bg-[linear-gradient(90deg,#f0f0f0_25%,#e6e6e6_37%,#f0f0f0_63%)] bg-size-[400%_100%] rounded-md animate-shimmer w-12.5 h-3.5"></div>
                <div className="bg-[linear-gradient(90deg,#f0f0f0_25%,#e6e6e6_37%,#f0f0f0_63%)] bg-size-[400%_100%] animate-shimmer w-17.5 h-7 rounded-md"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroceryMartShimmer;
