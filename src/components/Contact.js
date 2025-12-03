const Contact = () => {
  return (
    <div className="contact-wrapper">
      {/* Header Section */}
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>We are here to help you 24/7. Reach out anytime!</p>
      </section>

      {/* Contact Info + Form Section */}
      <section className="contact-container">
        {/* Left: Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Whether you have a question about your order, delivery, payments, or
            anything else — our team is ready to assist you.
          </p>

          <div className="info-item">
            <span className="info-label">📍 Address:</span>
            <p>Zingry HQ, Bangalore, India</p>
          </div>

          <div className="info-item">
            <span className="info-label">📞 Phone:</span>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-item">
            <span className="info-label">📧 Email:</span>
            <p>support@zingry.com</p>
          </div>

          <div className="info-item">
            <span className="info-label">⏱ Support Hours:</span>
            <p>24×7 Customer Support</p>
          </div>
        </div>

        {/* Right: Form */}
        <form className="contact-form">
          <h2>Send Us a Message</h2>

          <div className="form-group">
            <label>Your Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              placeholder="Write your message..."
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="form-btn">
            Submit
          </button>
        </form>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h2>Find Us on the Map</h2>
        <div className="map-box">
          <iframe
            title="Zingry Map"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.484663219827!2d77.594562!3d12.971599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDEuNCJF!5e0!3m2!1sen!2sin!4v1620132057740!5m2!1sen!2sin"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <h2>Need Quick Help?</h2>
        <p>Our support team is just one message away.</p>
        <button className="cta-btn">Chat with Support</button>
      </section>
    </div>
  );
};

export default Contact;
