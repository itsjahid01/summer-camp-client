import logo from "../assets/worldspeaklogo-removebg-preview.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
// import { FaLocationArrow } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="mt-8">
      <footer className="container mx-auto">
        <hr />
        <br />
        <div className=" footer p-5">
          <div className="text-center">
            <img className="w-1/2 " src={logo} alt="" />
            <p className="text-base ">Learn language to communicate</p>
          </div>
          <div>
            <span className="footer-title">LANGUAGES</span>
            <a className="link link-hover">Chinese</a>
            <a className="link link-hover">English</a>
            <a className="link link-hover">Spanish</a>
            <a className="link link-hover">Arabic</a>
            <a className="link link-hover">Portuguese</a>
            <a className="link link-hover">Bengali</a>
          </div>
          <div>
            <span className="footer-title">SCHOOL</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Become instructor</a>
            <a className="link link-hover">documentation</a>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
          </div>
          <div>
            <span className="footer-title">Contact</span>
            <a className="link link-hover">164 7th Avenue, Seattle, WA 9801</a>
            <a className="link link-hover">Helpline: 01322810867</a>
            <a className="link link-hover">Mon. - Fri.: 09:00 - 18:30</a>
            <a className="link link-hover">Support: admin@example.com</a>
          </div>

          <div>
            <span className="footer-title">Social</span>
            <div className="grid grid-flow-col gap-4 text-2xl">
              <a>
                <FaFacebook></FaFacebook>
              </a>
              <a>
                <FaTwitter></FaTwitter>
              </a>
              <a>
                <FaYoutube></FaYoutube>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-3 pb-3">
          <p>Copyright © 2023 - All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
