import logo from "../assets/logo.webp";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#2A2F4F] text-white">
      <footer className="container mx-auto">
        <div className=" footer p-5">
          <div>
            <img className="w-14" src={logo} alt="" />
            <p className="text-2xl font-bold italic">Feel Good Yoga</p>
          </div>
          <div>
            <span className="footer-title">Links</span>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">About us</a>
          </div>
          <div>
            <span className="footer-title">Contact</span>
            <a className="link link-hover">
              Level-4, 34, Anam Rangs, Dhanmondi, Dhaka
            </a>
            <a className="link link-hover">Helpline: 01322810867</a>
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
          <p>Copyright © 2023 - All right reserved by Toy Land</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
