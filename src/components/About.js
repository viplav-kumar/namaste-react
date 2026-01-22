const About = () => {
  return (
    <div className="about-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>About Zingry</h1>
          <p>Delivering food with speed, trust, and unmatched convenience.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              At <strong>Zingry</strong>, our mission is simple — bring
              delicious food from your favorite restaurants straight to your
              door as fast as possible. We combine powerful technology,
              efficient delivery operations, and a seamless ordering experience
              to make your food journey smooth and enjoyable every single time.
            </p>
          </div>

          <img
            src="../../images/placeholders/restaurant.png"
            alt="Our mission"
            className="mission-image"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-header">
          <h2>What We Stand For</h2>
          <p>The pillars that make Zingry a trusted food delivery platform.</p>
        </div>

        <div className="values-cards">
          <div className="value-card">
            <h3>⚡ Speed</h3>
            <p>
              With our optimized delivery network, your food arrives fresh and
              fast — every time.
            </p>
          </div>

          <div className="value-card">
            <h3>🤝 Reliability</h3>
            <p>
              From restaurant selection to payment safety, we operate with
              transparency and trust.
            </p>
          </div>

          <div className="value-card">
            <h3>🍱 Quality</h3>
            <p>
              Partnering with top-rated restaurants ensures premium food,
              delivered with care.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <h2>Our Story</h2>
        <p>
          Zingry started with a simple idea — eating great food should be easy.
          Whether you're at home, at work, or celebrating with friends, we
          believe delicious meals should be just a tap away. What began as a
          small initiative has now grown into an ever-expanding network of
          restaurants, delivery heroes, and technology that works together to
          serve millions of hungry customers every day.
        </p>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Join us on our journey to redefine food delivery.</h2>
        <p>Faster deliveries. Better food. A happier you.</p>
        <button className="cta-btn">Explore Restaurants</button>
      </section>
    </div>
  );
};

export default About;
