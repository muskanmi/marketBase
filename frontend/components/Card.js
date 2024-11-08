import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";

const Card = ({ image, title, price, reviews }) => {
  return (
    <section className="w-full max-w-sm mx-auto mt-10 mb-16 mr-10 overflow-hidden sm:max-w-md lg:max-w-lg">
      {/* Card Image */}
      <div className="relative w-full h-60 bg-[#f5f5f5] flex justify-center items-center">
        {/* Image */}
        <Image
          src={image}
          alt={title}
          style={{ width: "70%", height: "70%" }}
          objectFit="contain" // Ensure image maintains aspect ratio
          className="m-auto rounded-t-lg"
        />

        {/* Icons on the top-right corner */}
        <div className="absolute top-0 flex justify-between w-full h-[40px] p-2">
          {/* Discount Tag (aligned to the top-left corner with centered text) */}
          <span className="flex items-center justify-center px-2 py-0.5 text-xs text-white bg-red-500 rounded">
            -30%
          </span>

          {/* Icons on the right */}
          <div className="space-y-2">
            {/* Heart Icon */}
            <div className="p-2 bg-white rounded-full">
              <IoIosHeartEmpty
                size="1rem"
                className="text-black cursor-pointer"
              />
            </div>

            {/* Eye Icon */}
            <div className="p-2 bg-white rounded-full">
              <MdRemoveRedEye
                size="1rem"
                className="text-black cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-sm font-semibold text-gray-800 truncate">
          {title}
        </h2>

        {/* Price */}
        <p className="mt-2 text-sm font-bold text-gray-600">${price}</p>

        {/* Reviews */}
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
