import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-12 text-white bg-black border-b border-gray-300">
      <div className="flex flex-col justify-between w-full space-y-8 md:flex-row md:space-y-0 md:space-x-6">
        <div>
          <h1 className="text-lg font-bold">MarketBase</h1>
          <ul className="space-y-2">
            <li>Subscribe</li>
            <li>Get 10% off your first order</li>
            <li>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-lg font-bold">Support</h1>
          <address className="space-y-2 not-italic">
            <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</p>
            <p>
              <a href="mailto:marketbase@gmail.com">marketbase@gmail.com</a>
            </p>
            <p>
              <a href="tel:+88015888889999">+88015-88888-9999</a>
            </p>
          </address>
        </div>

        <div>
          <h1 className="text-lg font-bold">Account</h1>
          <ul className="space-y-2">
            <li>
              <Link href="/account">My Account</Link>
            </li>
            <li>
              <Link href="/login">Login / Register</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <Link href="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-lg font-bold">Quick Links</h1>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Use</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-lg font-bold">Download App</h1>
          <p>Save $3 with App - New User Only</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
