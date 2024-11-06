import Link from "next/link";
import { AiOutlineSend } from "react-icons/ai";
import app_image from "../public/images/appstore.png";
import play_image from "../public/images/playstore.png";
import Image from "next/image";
import { RiFacebookLine } from "react-icons/ri";
import { PiTwitterLogo, PiInstagramLogo } from "react-icons/pi";
import { LiaLinkedinIn } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="p-12 text-white bg-black border-b border-gray-300">
      <div className="flex flex-col justify-between w-full space-y-8 md:flex-row md:space-y-0 md:space-x-6">
        <div>
          <h1 className="text-lg font-bold pb-6">MarketBase</h1>
          <ul className="space-y-2">
            <li className="text-sm pb-2">Subscribe</li>
            <li className="text-sm pb-2">Get 10% off your first order</li>
            <li className="text-sm relative w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your Email"
                className="bg-transparent w-full px-3 py-2 text-black border border-gray-300 focus:outline-none focus:border-blue-500 text-sm"
              />
              <AiOutlineSend
                size="1.2rem"
                className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2"
              />
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-lg font-medium pb-6">Support</h1>
          <address className="space-y-2 not-italic">
            <p className="text-sm pb-2">
              111 Bijoy Sarani, Dhaka,
              <br /> DH 1515, Bangladesh
            </p>
            <p className="text-sm pb-2">
              <a href="mailto:marketbase@gmail.com">marketbase@gmail.com</a>
            </p>
            <p className="text-sm">
              <a href="tel:+88015888889999">+88015-88888-9999</a>
            </p>
          </address>
        </div>

        <div>
          <h1 className="text-lg font-medium pb-6">Account</h1>
          <ul className="space-y-2">
            <li className="text-sm pb-2">
              <Link href="/account">My Account</Link>
            </li>
            <li className="text-sm pb-2">
              <Link href="/login">Login / Register</Link>
            </li>
            <li className="text-sm pb-2">
              <Link href="/cart">Cart</Link>
            </li>
            <li className="text-sm pb-2">
              <Link href="/wishlist">Wishlist</Link>
            </li>
            <li className="text-sm">
              <Link href="/shop">Shop</Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-lg font-medium pb-6">Quick Links</h1>
          <ul className="space-y-2">
            <li className="text-sm pb-2">
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li className="text-sm pb-2">
              <Link href="/terms">Terms of Use</Link>
            </li>
            <li className="text-sm pb-2">
              <Link href="/faq">FAQ</Link>
            </li>
            <li className="text-sm">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-lg font-medium pb-6">Download App</h1>
          <p className="text-sm">Save $3 with App - New User Only</p>
          <Image
            src={app_image}
            alt="app store image"
            className="pt-2 pb-3"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <Image
            src={play_image}
            alt="app store image"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <div className="flex items-center pt-4">
            <RiFacebookLine size="1.5rem" className="mr-5" />
            <PiTwitterLogo size="1.5rem" className="mr-5" />
            <PiInstagramLogo size="1.5rem" className="mr-5" />
            <LiaLinkedinIn size="1.5rem" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
