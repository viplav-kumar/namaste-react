const RestaurantPageShimmer = () => {
  return (
    <div className="max-w-230 my-0 mx-auto p-6 bg-[#fafafa] ">
      {/* Header */}
      <section className="bg-[#ffffff] rounded-[14px] p-3 shadow-[0_4px_14px_rgba(0_0_0_0.06)] flex flex-col gap-3 mb-7">
        <div className="bg-[linear-gradient(90deg,#e6e6e6_25%,#f0f0f0_37%,#e6e6e6_63%)] bg-size-[300%_100%] animate-shimmerLoading rounded-md w-[55%] h-6.5"></div>
        <div className="bg-[linear-gradient(90deg,#e6e6e6_25%,#f0f0f0_37%,#e6e6e6_63%)] bg-size-[300%_100%] animate-shimmerLoading rounded-md w-[40%] h-4"></div>
        <div className="bg-[linear-gradient(90deg,#e6e6e6_25%,#f0f0f0_37%,#e6e6e6_63%)] bg-size-[300%_100%] animate-shimmerLoading rounded-md w-[30%] h-3.5"></div>
      </section>

      {/* Menu Sections */}
      {[1, 2, 3].map((section) => (
        <section key={section} className="mb-10">
          <div className="bg-[linear-gradient(90deg,#e6e6e6_25%,#f0f0f0_37%,#e6e6e6_63%)] bg-size-[300%_100%] animate-shimmerLoading rounded-md w-[35%] h-5 mb-4.5"></div>

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-[#ffffff] rounded-[14px] p-3 shadow-[0_4px_14px_rgba(0_0_0_0.06)] flex justify-between gap-5 items-start mb-4"
            >
              <div className="flex flex-1 flex-col gap-2.5">
                <div className="bg-[linear-gradient(90deg,#e6e6e6_25%,#f0f0f0_37%,#e6e6e6_63%)] bg-size-[300%_100%] animate-shimmerLoading rounded-md w-[60%] h-4.5"></div>
                <div className="bg-[linear-gradient(90deg,#e6e6e6_25%,#f0f0f0_37%,#e6e6e6_63%)] bg-size-[300%_100%] animate-shimmerLoading rounded-md w-[90%] h-3.5"></div>
                <div className="bg-[linear-gradient(90deg,#e6e6e6_25%,#f0f0f0_37%,#e6e6e6_63%)] bg-size-[300%_100%] animate-shimmerLoading rounded-md w-[25%] h-3.5"></div>
              </div>

              <div className="w-27.5">
                <div className="bg-[linear-gradient(90deg,#e6e6e6_25%,#f0f0f0_37%,#e6e6e6_63%)] bg-size-[300%_100%] animate-shimmerLoading w-full h-22.5 rounded-[10px]"></div>
              </div>
            </div>
          ))}
        </section>
      ))}

      {/* Footer */}
      <section className="bg-[#ffffff] rounded-[14px] p-3 shadow-[0_4px_14px_rgba(0_0_0_0.06)] mb-7 flex flex-col gap-2.5">
        <div className="bg-[linear-gradient(90deg,#e6e6e6_25%,#f0f0f0_37%,#e6e6e6_63%)] bg-size-[300%_100%] animate-shimmerLoading rounded-md w-[60%] h-3.5"></div>
        <div className="bg-[linear-gradient(90deg,#e6e6e6_25%,#f0f0f0_37%,#e6e6e6_63%)] bg-size-[300%_100%] animate-shimmerLoading rounded-md w-[35%] h-3.5"></div>
      </section>
    </div>
  );
};

export default RestaurantPageShimmer;
