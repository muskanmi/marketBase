import Image from "next/image";
import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";

const Card = ({ image, title, price, reviews, url }) => {
  return (
    <section className="w-full max-w-sm mx-auto mr-10 overflow-hidden sm:max-w-md lg:max-w-lg">
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
          <span
            className={`flex items-center justify-center px-2 py-0.5 text-xs text-white bg-red-500 rounded ${
              url === "best_selling" ? "invisible" : ""
            }`}
          >
            -30%
          </span>

          {/* Icons on the right */}
          <div className="space-y-2">
            <div className="p-2 bg-white rounded-full">
              <IoIosHeartEmpty
                size="1rem"
                className="text-black cursor-pointer"
              />
            </div>
            <div className="p-2 bg-white rounded-full">
              <MdRemoveRedEye
                size="1rem"
                className="text-black cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Add to Cart Button with Smooth Transition */}
        <button className="absolute bottom-0 left-0 w-full py-2 text-sm font-light text-white transition-all duration-300 translate-y-full bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
          Add to Cart
        </button>
      </div>

      {/* Card Content */}
      <div className="p-4 pl-0">
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
      </div>
    </section>
  );
};

export default Card;
