import React from "react";
import Image from "next/image";
import banner from "../public/images/banner_image.png";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="animate-bounce-once overflow-x-hidden">
      <div className="container px-4 mx-auto md:px-8">
        <div className="flex flex-col justify-between w-full md:flex-row mb-28">
          <motion.div
            className="w-full h-full mb-6 border-r border-gray-300 md:w-64 md:mb-0"
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
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
          </motion.div>

          <motion.div
            className="w-full pt-10 md:w-2/3"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src={banner}
              alt="banner image"
              layout="responsive"
              width={700}
              height={400}
              objectFit="cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
