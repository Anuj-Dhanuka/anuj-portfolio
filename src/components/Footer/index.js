import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import "./index.css";

const Footer = () => {
  return (
    <div className="footer-bg-container">
      <div className="footer-container">
        <div className="footer-left">
          <h4 className="footer-left-heading">Let's Connect:</h4>
          <p className="footer-left-para">
            I'm excited about the prospect of contributing to innovative
            projects. If you have an opportunity or just want to discuss web
            development, feel free to reach out.
          </p>
          <div className="footer-mail-container">
            <HiOutlineMail className="footer-mail-icon" />
            <p>anujd973@gmail.com</p>
          </div>
        </div>
        <hr className="footer-hr-line" />
        <div className="footer-right">
          <h4 className="footer-left-heading">Social:</h4>

          <div className="footer-icon-container">
            <a
              href="https://www.facebook.com/profile.php?id=100082010867719&mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
              className="footer-icon-link-el"
            >
              <FaFacebook className="footer-social-icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/anuj-dhanuka-1b0598155"
              target="_blank"
              rel="noreferrer"
              className="footer-icon-link-el"
            >
              <FaLinkedin className="footer-social-icon" />
            </a>
            <a
              href="https://www.instagram.com/anuj_dhanuka/"
              target="_blank"
              className="footer-icon-link-el"
              rel="noreferrer"
            >
              <FaInstagram className="footer-social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
