const RestaurantCardShimmer = () => {
  return (
    <div className="w-75 h-75 bg-[#ffffff] rounded-xl shadow-[0_6px_16px_rgba(0_0_0_0.08)] p-3.5 flex flex-col gap-5 box-border hover:scale-[1.02] transition-transform duration-300 ease-in-out">
      <div
        className="w-full h-40 bg-[#e6e6e6] rounded-[10px] relative overflow-hidden after:content-['']
         after:absolute after:top-0 after:-left-full
         after:h-full after:w-full
         after:bg-[linear-gradient(90deg,rgba(255_255_255_0)_0%,rgba(255_255_255_0.6)_50%,rgba(255_255_255_0)_100%)]
         after:animate-shimmer"
      ></div>

      <div className="flex flex-col gap-2.5">
        <div
          className="h-3.5 bg-[#e6e6e6] rounded-lg relative overflow-hidden w-[60%] after:content-['']
         after:absolute after:top-0 after:-left-full
         after:h-full after:w-full
         after:bg-[linear-gradient(90deg,rgba(255_255_255_0)_0%,rgba(255_255_255_0.6)_50%,rgba(255_255_255_0)_100%)]
         after:animate-shimmer"
        ></div>
        <div
          className="h-3.5 w-full bg-[#e6e6e6] rounded-lg relative overflow-hidden after:content-['']
         after:absolute after:top-0 after:-left-full
         after:h-full after:w-full
         after:bg-[linear-gradient(90deg,rgba(255_255_255_0)_0%,rgba(255_255_255_0.6)_50%,rgba(255_255_255_0)_100%)]
         after:animate-shimmer"
        ></div>
        <div
          className="h-3.5 w-full bg-[#e6e6e6] rounded-lg relative overflow-hidden after:content-['']
         after:absolute after:top-0 after:-left-full
         after:h-full after:w-full
         after:bg-[linear-gradient(90deg,rgba(255_255_255_0)_0%,rgba(255_255_255_0.6)_50%,rgba(255_255_255_0)_100%)]
         after:animate-shimmer"
        ></div>
      </div>
    </div>
  );
};

export default RestaurantCardShimmer;
