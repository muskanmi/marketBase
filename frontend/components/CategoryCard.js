import React from "react";

const CategoryCard = ({ icon, title }) => {
  return (
    <section className="w-full max-w-xs mx-auto overflow-hidden">
      <div className="flex flex-col items-center justify-center border-2 border-gray-200 p-6 hover:bg-[#db4444] hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out rounded-md">
        {/* Icon */}
        <div className="text-5xl text-inherit mb-4">{icon}</div>
        {/* Title */}
        <p className="text-[14px] font-light text-inherit">{title}</p>
      </div>
    </section>
  );
};

export default CategoryCard;
