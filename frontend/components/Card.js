import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";
import { motion } from "framer-motion";

const Card = ({ image, title, price, reviews, url }) => {
  return (
    <motion.section
      className="w-full max-w-sm mx-auto mr-10 overflow-hidden sm:max-w-md lg:max-w-lg"
      whileHover={{ scale: 1.05 }} // Scale up the card on hover
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Card Image */}
      <div className="relative w-full h-60 bg-[#f5f5f5] flex justify-center items-center group">
        {/* Image */}
        <Image
          src={image}
          alt={title}
          style={{ width: "70%", height: "70%" }}
          objectFit="contain"
          className="m-auto rounded-t-lg"
        />

        {/* Icons on the top-right corner */}
        <div className="absolute top-0 flex justify-between w-full h-[40px] p-2">
          {/* Discount Tag */}
          <motion.span
            className={`flex items-center justify-center px-2 py-0.5 text-xs text-white bg-red-500 rounded ${
              url === "best_selling" ? "invisible" : ""
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            -30%
          </motion.span>

          {/* Icons on the right */}
          <div className="space-y-2">
            <motion.div
              className="p-2 bg-white rounded-full"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              <IoIosHeartEmpty
                size="1rem"
                className="text-black cursor-pointer"
              />
            </motion.div>
            <motion.div
              className="p-2 bg-white rounded-full"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              <MdRemoveRedEye
                size="1rem"
                className="text-black cursor-pointer"
              />
            </motion.div>
          </div>
        </div>

        {/* Add to Cart Button with Smooth Transition */}
        <motion.button
          className="absolute bottom-0 left-0 w-full py-2 text-sm font-light text-white transition-all duration-300 translate-y-full bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3 }}
        >
          Add to Cart
        </motion.button>
      </div>

      {/* Card Content */}
      <motion.div
        className="p-4 pl-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-sm font-semibold text-gray-800 truncate">
          {title}
        </h2>
        <p className="mt-2 text-sm font-bold text-gray-600">${price}</p>
        <div className="flex items-center mt-2">
          <span className="flex text-yellow-500">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </span>
          <span className="ml-2 text-gray-500">{reviews}</span>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Card;
