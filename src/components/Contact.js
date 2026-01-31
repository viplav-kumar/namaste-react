const Contact = () => {
  return (
    <div className="font-[Inter,sans-serif] text-[#333] leading-[1.6]">
      {/* Header Section */}
      <section className="bg-[linear-gradient(to_right,#494949,#000000)] py-20 px-5 text-center text-white">
        <h1 className="text-[3rem] mb-2.5">Contact Us</h1>
        <p className="text-[1.2rem] opacity-[0.9]">
          We are here to help you 24/7. Reach out anytime!
        </p>
      </section>

      {/* Contact Info + Form Section */}
      <section className="max-w-275 my-17.5 mx-auto py-0 px-5 grid grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-[2rem] mb-3.75">Get in Touch</h2>
          <p className="text-[#555]">
            Whether you have a question about your order, delivery, payments, or
            anything else — our team is ready to assist you.
          </p>

          <div className="my-5 mx-0">
            <span className="font-semibold">📍 Address:</span>
            <p>Zingry HQ, Bangalore, India</p>
          </div>

          <div className="my-5 mx-0">
            <span className="font-semibold">📞 Phone:</span>
            <p>+91 98765 43210</p>
          </div>

          <div className="my-5 mx-0">
            <span className="font-semibold">📧 Email:</span>
            <p>support@zingry.com</p>
          </div>

          <div className="my-5 mx-0">
            <span className="font-semibold">⏱ Support Hours:</span>
            <p>24×7 Customer Support</p>
          </div>
        </div>

        {/* Right: Form */}
        <form className="bg-white p-8.75 rounded-[14px] shadow-[0_3px_12px_rgba(0_0_0_0.08)]">
          <h2 className="text-[1.8rem] mb-5">Send Us a Message</h2>

          <div className="mb-4.5 flex flex-col">
            <label className="mb-1.5 font-semibold">Your Name</label>
            <input
              className="p-3 border-[1.5px] border-solid border-[#ddd] rounded-lg text-[0.95rem] outline-none transition-all duration-200 ease-in-out focus:border-[#ff6a00]"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-4.5 flex flex-col">
            <label className="mb-1.5 font-semibold">Your Email</label>
            <input
              className="p-3 border-[1.5px] border-solid border-[#ddd] rounded-lg text-[0.95rem] outline-none transition-all duration-200 ease-in-out focus:border-[#ff6a00]"
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="mb-4.5 flex flex-col">
            <label className="mb-1.5 font-semibold">Message</label>
            <textarea
              className="p-3 border-[1.5px] border-solid border-[#ddd] rounded-lg text-[0.95rem] outline-none transition-all duration-200 ease-in-out focus:border-[#ff6a00]"
              placeholder="Write your message..."
              rows="5"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#3b3b3b] text-white border-none py-3.5 px-6 mt-2.5 rounded-lg text-[1rem] cursor-pointer font-semibold transition-all duration-200 ease-in-out hover:bg-[#000000]"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Map Section */}
      <section className="text-center py-17.5 px-5">
        <h2 className="text-[2.2rem] mb-6.25">Find Us on the Map</h2>
        <div className="max-w-237.5 h-100 m-auto rounded-[14px] overflow-hidden shadow-[0_3px_15px_rgba(0_0_0_0.12)]">
          <iframe
            title="Zingry Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.484663219827!2d77.594562!3d12.971599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDEuNCJF!5e0!3m2!1sen!2sin!4v1620132057740!5m2!1sen!2sin"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[linear-gradient(to_right,#494949,#000000)] text-center text-white py-17.5 px-5">
        <h2 className="text-[2.2rem] mb-2.5">Need Quick Help?</h2>
        <p className="mb-6.25 opacity-[0.9]">
          Our support team is just one message away.
        </p>
        <button className="bg-white text-[#3b3b3b] py-3.5 px-8 rounded-[30px] text-[1rem] border-none cursor-pointer font-semibold transition-all duration-300 ease-in-out hover:shadow-[0_6px_20px_rgba(255_255_255_0.4)] hover:-translate-y-1">
          Chat with Support
        </button>
      </section>
    </div>
  );
};

export default Contact;
