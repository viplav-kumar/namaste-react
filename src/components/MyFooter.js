import AppLogo from "./AppLogo";

const MyFooter = () => {
  return (
    <footer className="footer">
      <div className="footerAppLogo">
        <AppLogo src="../../images/AppLogo.png" />
        <p>&copy;&nbsp;2025 Zingry Limited</p>
      </div>

      <section className="footer-about">
        <p>About Zingry</p>
        <ul>
          <li>
            <a>Who we are</a>
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
            <a>Help & Support</a>
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
              <img alt="LinkedIn-Image" src="../../images/LinkedIn.png"></img>
            </a>
          </li>
          <li>
            <a>
              <img alt="Instagram-Image" src="../../images/Instagram.png"></img>
            </a>
          </li>
          <li>
            <a>
              <img alt="X-Twitter-Image" src="../../images/X-Twitter.png"></img>
            </a>
          </li>
          <li>
            <a>
              <img alt="YouTube-Image" src="../../images/YouTube.png"></img>
            </a>
          </li>
          <li>
            <a>
              <img alt="Facebook-Image" src="../../images/Facebook.png"></img>
            </a>
          </li>
        </ul>
        <div className="apple-download">
          <a>
            <img alt="Apple Store" src="../../images/AppleDownload.png"></img>
          </a>
        </div>
        <div className="google-download">
          <a>
            <img alt="Google Store" src="../../images/GoogleDownload.png"></img>
          </a>
        </div>
      </section>
    </footer>
  );
};

export default MyFooter;
