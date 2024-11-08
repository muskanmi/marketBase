import React from "react";
import Image from "next/image";
import banner from "../public/images/banner_image.png";
import { IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="container px-4 mx-auto md:px-8">
        <div className="flex flex-col justify-between w-full md:flex-row mb-28">
          {/* Sidebar List with Fixed Width */}
          <div className="w-full h-full mb-6 border-r border-gray-300 md:w-64 md:mb-0">
            <ul className="pt-10 space-y-3">
              <li className="flex items-center justify-between">
                <span>Woman&apos;s Fashion</span>
                <IoIosArrowForward size="1.2rem" className="mr-2" />
              </li>
              <li className="flex items-center justify-between">
                <span>Men&apos;s Fashion</span>
                <IoIosArrowForward size="1.2rem" className="mr-2" />
              </li>
              <li className="flex justify-between">
                <span>Electronics</span>
              </li>
              <li className="flex justify-between">
                <span>Home & Lifestyle</span>
              </li>
              <li className="flex justify-between">
                <span>Medicine</span>
              </li>
              <li className="flex justify-between">
                <span>Sports & Outdoor</span>
              </li>
              <li className="flex justify-between">
                <span>Baby&apos;s & Toys</span>
              </li>
              <li className="flex justify-between">
                <span>Groceries & Pets</span>
              </li>
              <li className="flex justify-between">
                <span>Health & Beauty</span>
              </li>
            </ul>
          </div>

          {/* Banner Image */}
          <div className="w-full pt-10 md:w-2/3">
            <Image
              src={banner}
              alt="banner image"
              layout="responsive"
              width={700} // Set the width you want (optional)
              height={400} // Set the height you want (optional)
              objectFit="cover" // Ensures the image covers the space while maintaining aspect ratio
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
