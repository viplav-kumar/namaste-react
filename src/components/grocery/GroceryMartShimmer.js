const GroceryMartShimmer = () => {
  return (
    <div className="grocery-shimmer-page">
      {/* Header shimmer */}
      <div className="shimmer-header">
        <div className="shimmer shimmer-title"></div>
        <div className="shimmer shimmer-subtitle"></div>
      </div>

      {/* Category chips shimmer */}
      <div className="shimmer-categories">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="shimmer shimmer-chip"></div>
        ))}
      </div>

      {/* Product grid shimmer */}
      <div className="shimmer-grid">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer shimmer-image"></div>

            <div className="shimmer-content">
              <div className="shimmer shimmer-text-lg"></div>
              <div className="shimmer shimmer-text-sm"></div>
              <div className="shimmer shimmer-text-sm short"></div>

              <div className="shimmer-footer">
                <div className="shimmer shimmer-price"></div>
                <div className="shimmer shimmer-button"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroceryMartShimmer;
