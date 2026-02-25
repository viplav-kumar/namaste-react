import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/contexts/UserContext";
import AppLogo from "./AppLogo";

const MyFooter = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <footer className="bg-[rgb(248_248_248)] flex justify-center my-0 mx-25 p-5">
      <div className="mr-15">
        <AppLogo
          src="../../images/logos/app.png"
          logoPart1Class="h-[55px]"
          logoPart2Class="mt-5 text-[x-large]"
        />
        <p className="text-[smaller] text-[rgba(2_6_12_0.6)]">
          &copy;&nbsp;2025 Zingry Limited
        </p>
        <p className="my-1 text-[smaller] text-[rgba(2_6_12_0.6)]">
          User: {loggedInUser}
        </p>
      </div>

      <section className="mr-15">
        <p className="text-[#222] text-lg font-semibold">About Zingry</p>
        <ul className="list-none p-0 text-[rgba(2_6_12_0.6)]">
          <li className="my-2.5 mx-0 hover:cursor-pointer text-[#444]">
            <Link className="no-underline decoration-inherit" to="/about">
              Who we are
            </Link>
          </li>
          <li className="my-2.5 mx-0 hover:cursor-pointer text-[#444]">
            <a className="no-underline decoration-inherit">Blog</a>
          </li>
          <li className="my-2.5 mx-0 hover:cursor-pointer text-[#444]">
            <a className="no-underline decoration-inherit">Careers</a>
          </li>
          <li className="my-2.5 mx-0 hover:cursor-pointer text-[#444]">
            <a className="no-underline decoration-inherit">Report Fraud</a>
          </li>
          <li className="my-2.5 mx-0 hover:cursor-pointer text-[#444]">
            <a className="no-underline decoration-inherit">Press Kit</a>
          </li>
        </ul>
      </section>

      <section className="mr-15">
        <p className="text-[#222] text-lg font-semibold">Contact Us</p>
        <ul className="list-none p-0 text-[rgba(2_6_12_0.6)]">
          <li className="my-2.5 mx-0 hover:cursor-pointer text-[#444]">
            <Link to="/contact">Help & Support</Link>
          </li>
          <li className="my-2.5 mx-0 hover:cursor-pointer text-[#444]">
            <a className="no-underline decoration-inherit">Partner with us</a>
          </li>
          <li className="my-2.5 mx-0 hover:cursor-pointer text-[#444]">
            <a className="no-underline decoration-inherit">Work With Us</a>
          </li>
        </ul>
      </section>

      <section className="mr-15">
        <p className="text-[#222] text-lg font-semibold">Learn More</p>
        <ul className="list-none p-0 text-[rgba(2_6_12_0.6)]">
          <li className="my-2.5 mx-0 hover:cursor-pointer text-[#444]">
            <a className="no-underline decoration-inherit">Privacy</a>
          </li>
          <li className="my-2.5 mx-0 hover:cursor-pointer text-[#444]">
            <a className="no-underline decoration-inherit">Security</a>
          </li>
          <li className="my-2.5 mx-0 hover:cursor-pointer text-[#444]">
            <a className="no-underline decoration-inherit">Terms</a>
          </li>
        </ul>
      </section>

      <section className="mr-15">
        <p className="text-[#222] text-lg font-semibold">Legal</p>
        <ul className="list-none p-0 text-[rgba(2_6_12_0.6)]">
          <li className="my-2.5 mx-0 hover:cursor-pointer text-[#444]">
            <a className="no-underline decoration-inherit">
              Terms & Conditions
            </a>
          </li>
          <li className="my-2.5 mx-0 hover:cursor-pointer text-[#444]">
            <a className="no-underline decoration-inherit">Cookie Policy</a>
          </li>
          <li className="my-2.5 mx-0 hover:cursor-pointer text-[#444]">
            <a className="no-underline decoration-inherit">Privacy Policy</a>
          </li>
          <li className="my-2.5 mx-0 hover:cursor-pointer text-[#444]">
            <a className="no-underline decoration-inherit">
              Investor Relations
            </a>
          </li>
        </ul>
      </section>

      <section className="mr-15">
        <p className="text-[#222] text-lg font-semibold">Social Links</p>
        <ul className="flex list-none p-0 text-[rgba(2_6_12_0.6)]">
          <li className="my-0 mx-0.5 hover:cursor-pointer text-[#444]">
            <a className="no-underline decoration-inherit">
              <img
                className="h-6.25 w-6.25"
                alt="LinkedIn-Image"
                src="../../images/icons/social/linkedin.png"
              ></img>
            </a>
          </li>
          <li className="my-0 mx-0.5 hover:cursor-pointer text-[#444]">
            <a className="no-underline decoration-inherit">
              <img
                className="h-6.25 w-6.25"
                alt="Instagram-Image"
                src="../../images/icons/social/instagram.png"
              ></img>
            </a>
          </li>
          <li className="my-0 mx-0.5 hover:cursor-pointer text-[#444]">
            <a className="no-underline decoration-inherit">
              <img
                className="h-6.25 w-6.25"
                alt="X-Image"
                src="../../images/icons/social/x.png"
              ></img>
            </a>
          </li>
          <li className="my-0 mx-0.5 hover:cursor-pointer text-[#444]">
            <a className="no-underline decoration-inherit">
              <img
                className="h-6.25 w-6.25"
                alt="YouTube-Image"
                src="../../images/icons/social/youtube.png"
              ></img>
            </a>
          </li>
          <li className="my-0 mx-0.5 hover:cursor-pointer text-[#444]">
            <a className="no-underline decoration-inherit">
              <img
                className="h-6.25 w-6.25"
                alt="Facebook-Image"
                src="../../images/icons/social/facebook.png"
              ></img>
            </a>
          </li>
        </ul>
        <div className="mt-2.5 mb-1.25">
          <a className="no-underline decoration-inherit hover:cursor-pointer">
            <img
              className="w-32.5 h-10"
              alt="Apple Store"
              src="../../images/app-download/apple.png"
            ></img>
          </a>
        </div>
        <div className="mt-2.5 mb-1.25">
          <a className="no-underline decoration-inherit hover:cursor-pointer">
            <img
              className="w-32.5 h-10"
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
