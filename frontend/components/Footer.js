import React from "react";

const Footer = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-between w-full p-12 text-white bg-black border-b border-gray-300 md:flex-row md:space-x-6 md:px-12">
        <div>
          <h1>MarketBase</h1>
          <ul>
            <li>Subscribe</li>
            <li>Get 10% off your first order</li>
            <li>
              <input
                type="text"
                placeholder="Enter your Email"
                className="w-full px-3 py-2 pr-10 text-sm text-black border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </li>
          </ul>
        </div>
        <div>
          <h1>Support</h1>
          <ul>
            <li>
              111 Bijoy sarani, Dhaka,
              <br /> DH 1515, Bangladesh.
            </li>
            <li>marketbase@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>
        <div>
          <h1>Account</h1>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        <div>
          <h1>Quick Link</h1>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h1>Download App</h1>
          <ul>
            <li>Save $3 with App New User Only</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
