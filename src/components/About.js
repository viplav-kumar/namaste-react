const About = () => {
  return (
    <div className="font-[Inter,sans-serif] text-[#333] leading-[1.6]">
      {/* Hero Section */}
      <section className="bg-[linear-gradient(to_right,#494949,#000000)] py-20 px-5 text-center text-white">
        <div>
          <h1 className="text-[3rem] mb-2.5">About Zingry</h1>
          <p className="text-[1.2rem] opacity-[0.9]">
            Delivering food with speed, trust, and unmatched convenience.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-17.5 px-5">
        <div className="max-w-275 m-auto grid grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-[2.2rem] mb-3.75">Our Mission</h2>
            <p className="text-[#555]">
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
            className="w-full h-75 object-cover rounded-[14px] shadow-[0_4px_20px_rgba(0_0_0_0.15)]"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#f7f7f7] py-20 px-5 text-center">
        <div>
          <h2 className="text-[2.4rem] mb-2.5">What We Stand For</h2>
          <p className="text-[#666] mb-10">
            The pillars that make Zingry a trusted food delivery platform.
          </p>
        </div>

        <div className="max-w-275 m-auto grid grid-cols-3 gap-8.75">
          <div className="bg-white p-7.5 rounded-[14px] transition-transform transition-shadow duration-300 ease-in-out shadow-[03px12pxrgba(0_0_0_0.08)] hover:-translate-y-1.5 hover:shadow-[0_6px_22px_rgba(0_0_0_0.15)]">
            <h3 className="text-[1.3rem] mb-2.5">⚡ Speed</h3>
            <p>
              With our optimized delivery network, your food arrives fresh and
              fast — every time.
            </p>
          </div>

          <div className="bg-white p-7.5 rounded-[14px] transition-transform transition-shadow duration-300 ease-in-out shadow-[03px12pxrgba(0_0_0_0.08)] hover:-translate-y-1.5 hover:shadow-[0_6px_22px_rgba(0_0_0_0.15)]">
            <h3 className="text-[1.3rem] mb-2.5">🤝 Reliability</h3>
            <p>
              From restaurant selection to payment safety, we operate with
              transparency and trust.
            </p>
          </div>

          <div className="bg-white p-7.5 rounded-[14px] transition-transform transition-shadow duration-300 ease-in-out shadow-[03px12pxrgba(0_0_0_0.08)] hover:-translate-y-1.5 hover:shadow-[0_6px_22px_rgba(0_0_0_0.15)]">
            <h3 className="text-[1.3rem] mb-2.5">🍱 Quality</h3>
            <p>
              Partnering with top-rated restaurants ensures premium food,
              delivered with care.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-212.5 my-20 mx-auto py-0 px-5 text-center">
        <h2 className="text-[2.3rem] mb-5">Our Story</h2>
        <p className="text-[#555] text-[1.05rem]">
          Zingry started with a simple idea — eating great food should be easy.
          Whether you're at home, at work, or celebrating with friends, we
          believe delicious meals should be just a tap away. What began as a
          small initiative has now grown into an ever-expanding network of
          restaurants, delivery heroes, and technology that works together to
          serve millions of hungry customers every day.
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-[linear-gradient(to_right,#494949,#000000)] text-white text-center py-17.5 px-5">
        <h2 className="text-[2.3rem] mb-2.5">
          Join us on our journey to redefine food delivery.
        </h2>
        <p className="opacity-[0.9] mb-6.25">
          Faster deliveries. Better food. A happier you.
        </p>
        <button
          className="bg-white text-[#3b3b3b] py-3.5 px-8 rounded-[30px] text-[1rem] border-none cursor-pointer font-semibold transition-transform transition-shadow duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[06px20pxrgba(255_255_255_0.4)]
"
        >
          Explore Restaurants
        </button>
      </section>
    </div>
  );
};

export default About;
