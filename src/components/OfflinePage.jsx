const OfflinePage = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="h-screen w-full bg-[linear-gradient(135deg,#fff5f2,#ffffff)] flex items-center justify-center font-[Inter,system-ui,-apple-system,BlinkMacSystemFont,sans-serif]">
      <div className="bg-[#ffffff] rounded-2xl py-10 px-8 max-w-105 w-[90%] text-center shadow-[0_10px_40px_rgba(0_0_0_0.08)]">
        <img src="" alt="Offline" className="w-30 h-auto mb-6" />

        <h1 className="text-[26px] font-bold text-[#1c1c1c] mb-3">
          You're Offline
        </h1>

        <p className="text-[15px] text-[#606060] leading-[1.6] mb-7">
          Looks like your internet connection is lost. Please check your network
          and try again.
        </p>

        <button
          className="bg-[#fc8019] text-[#ffffff] border-none rounded-[10px] py-3 px-6 text-[15px] font-semibold cursor-pointer transition-colors transition-transform duration-200 ease-in-out hover:bg-[#f26d00] active:scale-[0.97]"
          onClick={handleRetry}
        >
          Retry Connection
        </button>

        <p className="mt-5 text-[13px] text-[#9a9a9a]">
          Zingry works best with a stable internet connection.
        </p>
      </div>
    </div>
  );
};

export default OfflinePage;
