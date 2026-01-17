const RestaurantPageShimmer = () => {
  return (
    <div className="restaurant-shimmer-page">
      {/* Header */}
      <section className="shimmer-card shimmer-header">
        <div className="shimmer shimmer-heading"></div>
        <div className="shimmer shimmer-subheading"></div>
        <div className="shimmer shimmer-meta"></div>
      </section>

      {/* Menu Sections */}
      {[1, 2, 3].map((section) => (
        <section key={section} className="menu-section">
          <div className="shimmer shimmer-section-title"></div>

          {[1, 2, 3].map((item) => (
            <div key={item} className="shimmer-card shimmer-menu-item">
              <div className="menu-item-left">
                <div className="shimmer shimmer-item-title"></div>
                <div className="shimmer shimmer-item-desc"></div>
                <div className="shimmer shimmer-item-price"></div>
              </div>

              <div className="menu-item-right">
                <div className="shimmer shimmer-item-image"></div>
              </div>
            </div>
          ))}
        </section>
      ))}

      {/* Footer */}
      <section className="shimmer-card shimmer-footer">
        <div className="shimmer shimmer-footer-line"></div>
        <div className="shimmer shimmer-footer-line short"></div>
      </section>
    </div>
  );
};

export default RestaurantPageShimmer;
