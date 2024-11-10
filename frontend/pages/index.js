import Banner from "@/components/Banner";
import Card from "@/components/Card";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import frame_1 from "../public/images/Frame-1.png";
import frame_2 from "../public/images/Frame-2.png";
import frame_3 from "../public/images/Frame-3.png";
import frame_4 from "../public/images/Frame-4.png";
import {
  MdPhoneAndroid,
  MdOutlineCameraAlt,
  MdOutlineVideogameAsset,
} from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { FiHeadphones } from "react-icons/fi";
import CategoryCard from "@/components/CategoryCard";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
  },
});

export default function Home() {
  return (
    <section className="overflow-x-hidden">
      {/* Banner Section */}
      <div>
        <Banner />
      </div>

      {/* Flash Sales Section */}
      <div className="relative">
        <div className="container px-4 mx-auto md:px-8">
          <div className="flex items-center space-x-2">
            <span className="block w-4 bg-red-600 rounded-[5px] h-7"></span>
            <span className="text-sm font-bold text-red-600">Today&apos;s</span>
          </div>
          <div className="flex flex-col items-center justify-between mt-5 md:flex-row">
            <h1 className="pb-5 text-2xl font-bold md:pb-0">Flash Sales</h1>

            {/* Countdown Timer */}
            <div className="flex items-center space-x-4 text-2xl font-semibold">
              {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
                <div key={label} className="flex flex-col items-center">
                  <span className="text-[10px] font-light">{label}</span>
                  <div className="flex items-center">
                    <span className="text-black">
                      {["03", "23", "19", "56"][index]}
                    </span>
                    {index < 3 && (
                      <span className="mx-1 text-2xl font-semibold text-black">
                        :
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center mt-4 space-x-3 md:mt-0">
              <div className="p-2 bg-[#f5f5f5] rounded-full flex items-center justify-center cursor-pointer">
                <FaArrowLeft size="1.2rem" />
              </div>
              <div className="p-2 bg-[#f5f5f5] rounded-full flex items-center justify-center cursor-pointer">
                <FaArrowRight size="1.2rem" />
              </div>
            </div>
          </div>
        </div>

        {/* Cards for Flash Sales */}
        <div className="container px-4 mx-auto mt-8 md:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <Card
              image={frame_1}
              title="HAVIT HV-G92 Gamepad"
              price="120"
              reviews="(88)"
            />
            <Card
              image={frame_2}
              title="AK-900 Wired Keyboard"
              price="960"
              reviews="(75)"
            />
            <Card
              image={frame_3}
              title="IPS LCD Gaming Monitor"
              price="370"
              reviews="(99)"
            />
            <Card
              image={frame_4}
              title="S-Series Comfort Chair"
              price="375"
              reviews="(99)"
            />
            <Card
              image={frame_1}
              title="HAVIT HV-G92 Gamepad"
              price="120"
              reviews="(88)"
            />
          </div>

          {/* Button for Viewing All Products */}
          <div className="flex justify-center pb-5 mt-8">
            <ThemeProvider theme={theme}>
              <Button variant="contained" color="error">
                View All Products
              </Button>
            </ThemeProvider>
          </div>
        </div>
      </div>

      <hr className="container mb-8 mt-8" />

      {/* Categories Sections */}
      <div className="relative">
        <div className="container px-4 mx-auto md:px-8">
          <div className="flex items-center space-x-2">
            <span className="block w-4 bg-red-600 rounded-[5px] h-7"></span>
            <span className="text-sm font-bold text-red-600">Categories</span>
          </div>
          <div className="flex flex-col items-center justify-between mt-5 md:flex-row">
            <h1 className="pb-5 mb-4 text-2xl font-bold md:pb-0">
              Browse By Category
            </h1>
            {/* Navigation Arrows */}
            <div className="flex items-center mt-4 space-x-3 md:mt-0">
              <div className="p-2 bg-[#f5f5f5] rounded-full flex items-center justify-center cursor-pointer">
                <FaArrowLeft size="1.2rem" />
              </div>
              <div className="p-2 bg-[#f5f5f5] rounded-full flex items-center justify-center cursor-pointer">
                <FaArrowRight size="1.2rem" />
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 mx-auto mt-8 md:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
            <CategoryCard icon={<MdPhoneAndroid />} title="Phones" />
            <CategoryCard
              icon={<HiOutlineDesktopComputer />}
              title="Computers"
            />
            <CategoryCard icon={<BsSmartwatch />} title="Smartwatch" />
            <CategoryCard icon={<MdOutlineCameraAlt />} title="Camera" />
            <CategoryCard icon={<FiHeadphones />} title="HeadPhones" />
            <CategoryCard icon={<MdOutlineVideogameAsset />} title="Gaming" />
          </div>
        </div>
      </div>

      <hr className="container mb-8 mt-16" />

      {/* Best Selling Sections */}
      <div className="relative">
        <div className="container px-4 mx-auto md:px-8">
          <div className="flex items-center space-x-2">
            <span className="block w-4 bg-red-600 rounded-[5px] h-7"></span>
            <span className="text-sm font-bold text-red-600">This Month</span>
          </div>
          <div className="flex flex-col items-center justify-between mt-5 md:flex-row">
            <h1 className="pb-5 text-2xl font-bold md:pb-0">
              Best Selling Products
            </h1>
            <div className="flex items-center mt-4 space-x-3 md:mt-0">
              <div className="flex justify-center pb-5 mt-8">
                <ThemeProvider theme={theme}>
                  <Button
                    variant="contained"
                    color="error"
                    className="text-[12px] pl-5 pr-5"
                  >
                    View All
                  </Button>
                </ThemeProvider>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 mx-auto mt-4 md:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <Card
              image={frame_1}
              title="HAVIT HV-G92 Gamepad"
              price="120"
              reviews="(88)"
              url="best_selling"
            />
            <Card
              image={frame_2}
              title="AK-900 Wired Keyboard"
              price="960"
              reviews="(75)"
              url="best_selling"
            />
            <Card
              image={frame_3}
              title="IPS LCD Gaming Monitor"
              price="370"
              reviews="(99)"
              url="best_selling"
            />
            <Card
              image={frame_4}
              title="S-Series Comfort Chair"
              price="375"
              reviews="(99)"
              url="best_selling"
            />
            <Card
              image={frame_1}
              title="HAVIT HV-G92 Gamepad"
              price="120"
              reviews="(88)"
              url="best_selling"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
