import Image from "next/image";
import banner from "../public/images/banner_image.png";

export default function Home() {
  return (
    <section className="overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col justify-between w-full md:flex-row mb-28">
          <div>
            <ul>
              <li>Woman's Fashion</li>
              <li>Men's Fashion</li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby’s & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </div>
          <div>
            <Image
              src={banner}
              alt="banner image"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
