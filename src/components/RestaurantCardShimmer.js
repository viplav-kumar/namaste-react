const RestaurantCardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-image shimmer-animate"></div>

      <div className="shimmer-content">
        <div className="shimmer-line shimmer-animate short"></div>
        <div className="shimmer-line shimmer-animate"></div>
        <div className="shimmer-line shimmer-animate"></div>
      </div>
    </div>
  );
};

export default RestaurantCardShimmer;
