import AppLogo from "./AppLogo";
import { Link } from "react-router-dom";

const MyFooter = () => {
  return (
    <footer className="footer">
      <div className="footerAppLogo">
        <AppLogo src="../../images/logos/app.png" />
        <p>&copy;&nbsp;2025 Zingry Limited</p>
      </div>

      <section className="footer-about">
        <p>About Zingry</p>
        <ul>
          <li>
            <Link to="/about">Who we are</Link>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Careers</a>
          </li>
          <li>
            <a>Report Fraud</a>
          </li>
          <li>
            <a>Press Kit</a>
          </li>
        </ul>
      </section>

      <section className="footer-about">
        <p>Contact Us</p>
        <ul>
          <li>
            <Link to="/contact">Help & Support</Link>
          </li>
          <li>
            <a>Partner with us</a>
          </li>
          <li>
            <a>Work With Us</a>
          </li>
        </ul>
      </section>

      <section className="footer-about">
        <p>Learn More</p>
        <ul>
          <li>
            <a>Privacy</a>
          </li>
          <li>
            <a>Security</a>
          </li>
          <li>
            <a>Terms</a>
          </li>
        </ul>
      </section>

      <section className="footer-about">
        <p>Legal</p>
        <ul>
          <li>
            <a>Terms & Conditions</a>
          </li>
          <li>
            <a>Cookie Policy</a>
          </li>
          <li>
            <a>Privacy Policy</a>
          </li>
          <li>
            <a>Investor Relations</a>
          </li>
        </ul>
      </section>

      <section className="footer-about socialLinks">
        <p>Social Links</p>
        <ul>
          <li>
            <a>
              <img
                alt="LinkedIn-Image"
                src="../../images/icons/social/linkedin.png"
              ></img>
            </a>
          </li>
          <li>
            <a>
              <img
                alt="Instagram-Image"
                src="../../images/icons/social/instagram.png"
              ></img>
            </a>
          </li>
          <li>
            <a>
              <img alt="X-Image" src="../../images/icons/social/x.png"></img>
            </a>
          </li>
          <li>
            <a>
              <img
                alt="YouTube-Image"
                src="../../images/icons/social/youtube.png"
              ></img>
            </a>
          </li>
          <li>
            <a>
              <img
                alt="Facebook-Image"
                src="../../images/icons/social/facebook.png"
              ></img>
            </a>
          </li>
        </ul>
        <div className="apple-download">
          <a>
            <img
              alt="Apple Store"
              src="../../images/app-download/apple.png"
            ></img>
          </a>
        </div>
        <div className="google-download">
          <a>
            <img
              alt="Google Store"
              src="../../images/app-download/google.png"
            ></img>
          </a>
        </div>
      </section>
    </footer>
  );
};

export default MyFooter;
