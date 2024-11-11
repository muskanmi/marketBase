import Banner from "@/components/Banner";
import Card from "@/components/Card";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaTruckFast } from "react-icons/fa6";
import frame_1 from "../public/images/Frame-1.png";
import frame_2 from "../public/images/Frame-2.png";
import frame_3 from "../public/images/Frame-3.png";
import frame_4 from "../public/images/Frame-4.png";
import jbl from "../public/images/headphone.jpg";
import image_1 from "../public/images/image1.png";
import image_2 from "../public/images/image2.png";
import image_3 from "../public/images/image3.png";
import image_4 from "../public/images/image4.png";
import { FaHeadphones, FaVolumeUp, FaMusic } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import {
  MdPhoneAndroid,
  MdOutlineCameraAlt,
  MdOutlineVideogameAsset,
} from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { FiHeadphones } from "react-icons/fi";
import CategoryCard from "@/components/CategoryCard";
import Image from "next/image";
import { motion } from "framer-motion";

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
  const [sectionsInView, setSectionsInView] = useState({});
  const sectionRefs = useRef({
    flashSales: null,
    category: null,
    bestSelling: null,
    imageSection: null,
    products: null,
    newArrival: null,
    service: null,
  });
  const handleScroll = () => {
    const newSectionsInView = {};
    Object.keys(sectionRefs.current).forEach((section) => {
      if (sectionRefs.current[section]) {
        const rect = sectionRefs.current[section].getBoundingClientRect();
        newSectionsInView[section] =
          rect.top < window.innerHeight && rect.bottom >= 0;
      }
    });
    setSectionsInView(newSectionsInView);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="overflow-x-hidden">
      {/* Banner Section */}
      <div>
        <Banner />
      </div>
      {/* Flash Sales Section */}
      <div
        ref={(el) => (sectionRefs.current.flashSales = el)}
        className="relative"
      >
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
        <motion.div
          className="container px-4 mx-auto mt-8 md:px-8"
          initial={{ opacity: 0, x: -200 }} // Start off-screen on the left
          animate={{
            opacity: sectionsInView.flashSales ? 1 : 0,
            x: sectionsInView.flashSales ? 0 : -200, // Slide in from the left when in view
          }}
          transition={{ duration: 1 }}
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
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
          </div>

          {/* Button for Viewing All Products */}
          <div className="flex justify-center pb-5 mt-8">
            <ThemeProvider theme={theme}>
              <Button variant="contained" color="error">
                View All Products
              </Button>
            </ThemeProvider>
          </div>
        </motion.div>
      </div>

      <hr className="container mb-8 mt-8" />

      {/* Categories Sections */}
      <div
        ref={(el) => (sectionRefs.current.category = el)}
        className="relative"
      >
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

        <motion.div
          className="container px-4 mx-auto mt-8 md:px-8"
          initial={{ opacity: 0, y: 200 }} // Start offscreen below
          animate={{
            opacity: sectionsInView.category ? 1 : 0, // Fade-in when in view
            y: sectionsInView.category ? 0 : 200, // Slide-up into view
          }}
          transition={{
            opacity: { duration: 1 },
            y: { type: "spring", stiffness: 50, damping: 25 }, // Bounce effect when sliding up
          }}
        >
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
        </motion.div>
      </div>

      <hr className="container mb-8 mt-16" />

      {/* Best Selling Sections */}
      <div
        ref={(el) => (sectionRefs.current.bestSelling = el)}
        className="relative"
      >
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

        <motion.div
          className="container px-4 mx-auto mt-4 md:px-8"
          initial={{ opacity: 0, y: 200 }} // Start offscreen below
          animate={{
            opacity: sectionsInView.bestSelling ? 1 : 0, // Fade-in when in view
            y: sectionsInView.bestSelling ? 0 : 200, // Slide-up effect
          }}
          transition={{
            opacity: { duration: 1 },
            y: { type: "spring", stiffness: 50, damping: 25 }, // Spring for slide-up
          }}
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: sectionsInView.bestSelling ? 1 : 0,
                y: sectionsInView.bestSelling ? 0 : 50,
              }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card
                image={frame_1}
                title="HAVIT HV-G92 Gamepad"
                price="120"
                reviews="(88)"
                url="best_selling"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: sectionsInView.bestSelling ? 1 : 0,
                y: sectionsInView.bestSelling ? 0 : 50,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card
                image={frame_2}
                title="AK-900 Wired Keyboard"
                price="960"
                reviews="(75)"
                url="best_selling"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: sectionsInView.bestSelling ? 1 : 0,
                y: sectionsInView.bestSelling ? 0 : 50,
              }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card
                image={frame_3}
                title="IPS LCD Gaming Monitor"
                price="370"
                reviews="(99)"
                url="best_selling"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: sectionsInView.bestSelling ? 1 : 0,
                y: sectionsInView.bestSelling ? 0 : 50,
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card
                image={frame_4}
                title="S-Series Comfort Chair"
                price="375"
                reviews="(99)"
                url="best_selling"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Image Sections */}
      <div
        ref={(el) => (sectionRefs.current.imageSection = el)}
        className="container pt-24 pb-24 bg-cover object-contain flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
      >
        {/* Image Container */}
        <motion.div
          className="flex justify-center md:justify-start w-full md:w-auto"
          initial={{ opacity: 0, x: -200 }} // Start from left
          animate={{
            opacity: sectionsInView.imageSection ? 1 : 0, // Trigger fade-in based on visibility
            x: sectionsInView.imageSection ? 0 : -200, // Trigger slide in based on visibility
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex justify-center w-full sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-2/3">
            <Image
              src={jbl}
              alt="JBL image"
              className="w-full h-auto object-contain rounded-t-lg"
              objectFit="contain"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-0 md:ml-4 bg-white p-6 rounded-lg"
          initial={{ opacity: 0, x: 200 }} // Start from right
          animate={{
            opacity: sectionsInView.imageSection ? 1 : 0, // Trigger fade-in based on visibility
            x: sectionsInView.imageSection ? 0 : 200, // Trigger slide in based on visibility
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex items-center space-x-2 text-red-500">
            <FaHeadphones size={20} />
            <span className="text-lg font-semibold">Categories</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold pb-8 pt-4">
            Enhance Your Music Experience
          </h1>
          <p className="text-sm text-gray-600 mb-6">
            Discover high-quality audio products that bring music to life, from
            wireless speakers to noise-cancelling headphones. Perfect for every
            music lover.
          </p>
          {/* New icons section */}
          <div className="flex space-x-4 mb-6 pt-4 pb-4">
            <div className="flex items-center space-x-2">
              <FaVolumeUp size={25} className="text-gray-600" />
              <span className="text-gray-600">Premium Sound</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMusic size={25} className="text-gray-600" />
              <span className="text-gray-600">Music Anywhere</span>
            </div>
          </div>
          <div className="flex justify-center md:justify-start mt-8 pb-5">
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="error"
                className="text-[14px] pl-8 pr-8 pt-2 pb-2"
              >
                Buy Now
              </Button>
            </ThemeProvider>
          </div>
        </motion.div>
      </div>

      {/* Product Sections */}
      <div
        ref={(el) => (sectionRefs.current.products = el)}
        className="relative"
      >
        <motion.div
          className="container px-4 mx-auto md:px-8"
          initial={{ opacity: 0, y: 50 }}
          animate={sectionsInView.products ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center space-x-2">
            <span className="block w-4 bg-red-600 rounded-[5px] h-7"></span>
            <span className="text-sm font-bold text-red-600">Our Products</span>
          </div>
          <div className="flex flex-col items-center justify-between mt-5 md:flex-row">
            <h1 className="pb-5 mb-4 text-2xl font-bold md:pb-0">
              Explore Our Products
            </h1>
            {/* Navigation Arrows */}
            <motion.div
              className="flex items-center mt-4 space-x-3 md:mt-0"
              initial={{ opacity: 0, x: 20 }}
              animate={sectionsInView.products ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="p-2 bg-[#f5f5f5] rounded-full flex items-center justify-center cursor-pointer">
                <FaArrowLeft size="1.2rem" />
              </div>
              <div className="p-2 bg-[#f5f5f5] rounded-full flex items-center justify-center cursor-pointer">
                <FaArrowRight size="1.2rem" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="container px-4 mx-auto mt-4 md:px-8"
          initial="hidden"
          animate={sectionsInView.products ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2, // Delay between each card animation
                delayChildren: 0.3,
              },
            },
          }}
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {[
              frame_1,
              frame_2,
              frame_3,
              frame_4,
              frame_1,
              frame_4,
              frame_2,
              frame_3,
            ].map((image, index) => (
              <motion.div
                key={index}
                className="w-full"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Card
                  image={image}
                  title={
                    index % 4 === 0
                      ? "HAVIT HV-G92 Gamepad"
                      : index % 4 === 1
                      ? "AK-900 Wired Keyboard"
                      : index % 4 === 2
                      ? "IPS LCD Gaming Monitor"
                      : "S-Series Comfort Chair"
                  }
                  price={
                    index % 4 === 1 ? "960" : index % 4 === 2 ? "370" : "120"
                  }
                  reviews={
                    index % 4 === 1 ? "(75)" : index % 4 === 2 ? "(99)" : "(88)"
                  }
                  url="best_selling"
                />
              </motion.div>
            ))}
          </div>

          {/* Button Section */}
          <div className="flex justify-center pb-5 mt-8">
            <ThemeProvider theme={theme}>
              <Button variant="contained" color="error" className="px-8">
                View All Products
              </Button>
            </ThemeProvider>
          </div>
        </motion.div>
      </div>

      {/* New Arrival Sections */}
      <div
        ref={(el) => (sectionRefs.current.newArrival = el)}
        className="relative"
      >
        <motion.div
          className="container px-4 mx-auto md:px-8"
          ref={(el) => (sectionRefs.current.newArrival = el)} // Assign ref
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={
            sectionsInView.newArrival ? { opacity: 1, y: 0, scale: 1 } : {}
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center space-x-2">
            <span className="block w-4 bg-red-600 rounded-[5px] h-7"></span>
            <span className="text-sm font-bold text-red-600">Featured</span>
          </div>
          <motion.div
            className="flex flex-col items-center justify-between mt-5 md:flex-row"
            initial={{ opacity: 0, rotateX: 30 }}
            animate={
              sectionsInView.newArrival ? { opacity: 1, rotateX: 0 } : {}
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="pb-5 mb-4 text-2xl font-bold md:pb-0">
              New Arrival
            </h1>
          </motion.div>
        </motion.div>

        <div className="container px-4 mx-auto mt-4 md:px-8 flex flex-row gap-6">
          <motion.div
            className="flex justify-center mb-8 relative"
            initial={{ opacity: 0, y: 100, rotate: -10 }}
            animate={
              sectionsInView.newArrival ? { opacity: 1, y: 0, rotate: 0 } : {}
            }
            transition={{ duration: 1 }}
          >
            <Image
              src={image_1}
              alt="image 1"
              style={{ width: "100%", height: "630px", objectFit: "cover" }}
              className="rounded-t-lg"
            />
            <div className="absolute bottom-4 left-4 space-y-2">
              <h1 className="text-white text-xl font-bold">PlayStation 5</h1>
              <p className="text-white text-sm">
                Black and White version of the PS5
                <br /> coming out on sale.
              </p>
              <ThemeProvider theme={theme}>
                <Button
                  className="text-white text-sm"
                  variant="outlined"
                  color="white"
                >
                  Shop Now
                </Button>
              </ThemeProvider>
            </div>
          </motion.div>

          {/* Second Row: Image 2, Image 3, and Image 4 */}
          <div className="flex flex-col gap-6">
            <motion.div
              className="flex justify-center relative"
              initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
              animate={
                sectionsInView.newArrival
                  ? { opacity: 1, scale: 1, rotateY: 0 }
                  : {}
              }
              transition={{ duration: 1 }}
            >
              <Image
                src={image_2}
                alt="image 2"
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
                className="rounded-t-lg"
              />
              <div className="absolute top-4 left-4 space-y-2">
                <h1 className="text-white text-xl font-bold">
                  Women Collections
                </h1>
                <p className="text-white text-sm">
                  Featured women collections that
                  <br /> give you another vibe.
                </p>
                <ThemeProvider theme={theme}>
                  <Button
                    className="text-white text-sm"
                    variant="outlined"
                    color="white"
                  >
                    Shop Now
                  </Button>
                </ThemeProvider>
              </div>
            </motion.div>

            {/* Image 3 and 4 in the same row, side by side */}
            <div className="flex gap-6">
              <motion.div
                className="flex justify-center w-1/2 relative"
                initial={{ opacity: 0, x: -50, scale: 0.95 }}
                animate={
                  sectionsInView.newArrival
                    ? { opacity: 1, x: 0, scale: 1 }
                    : {}
                }
                transition={{ duration: 1 }}
              >
                <Image
                  src={image_3}
                  alt="image 3"
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                  className="rounded-t-lg"
                />
                <div className="absolute bottom-4 left-4 space-y-2">
                  <h1 className="text-white text-xl font-bold">Speakers</h1>
                  <p className="text-white text-sm">Amazon wireless speakers</p>
                  <ThemeProvider theme={theme}>
                    <Button
                      className="text-white text-sm"
                      variant="outlined"
                      color="white"
                    >
                      Shop Now
                    </Button>
                  </ThemeProvider>
                </div>
              </motion.div>
              <motion.div
                className="flex justify-center w-1/2 relative"
                initial={{ opacity: 0, x: 50, rotate: 15 }}
                animate={
                  sectionsInView.newArrival
                    ? { opacity: 1, x: 0, rotate: 0 }
                    : {}
                }
                transition={{ duration: 1 }}
              >
                <Image
                  src={image_4}
                  alt="image 4"
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                  className="rounded-t-lg"
                />
                <div className="absolute bottom-4 left-4 space-y-2">
                  <h1 className="text-white text-xl font-bold">Perfume</h1>
                  <p className="text-white text-sm">GUCCI INTENSE OUD EDP</p>
                  <ThemeProvider theme={theme}>
                    <Button
                      className="text-white text-sm"
                      variant="outlined"
                      color="white"
                    >
                      Shop Now
                    </Button>
                  </ThemeProvider>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Offered Section */}
      <div
        ref={(el) => (sectionRefs.current.service = el)}
        className="container flex justify-between items-center pt-20 pb-20 p-6"
      >
        {/* Service 1 */}
        <motion.div
          className="text-center w-full sm:w-auto"
          initial={{ opacity: 0, x: 100 }}
          animate={
            sectionsInView.service
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: 100 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="bg-black text-white p-4 inline-block mb-4 rounded-full">
            <FaTruckFast size="2rem" />
          </div>
          <h1 className="text-lg font-bold uppercase mb-2">
            Free and fast delivery
          </h1>
          <p>Free delivery for all orders over $140</p>
        </motion.div>

        {/* Service 2 */}
        <motion.div
          className="text-center w-full sm:w-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={
            sectionsInView.service
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: -50 }
          }
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="bg-black text-white p-4 inline-block mb-4 rounded-full">
            <FiHeadphones size="2rem" />
          </div>
          <h1 className="text-lg font-bold uppercase mb-2">
            24/7 CUSTOMER SERVICE
          </h1>
          <p>Friendly 24/7 customer support</p>
        </motion.div>

        {/* Service 3 */}
        <motion.div
          className="text-center w-full sm:w-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            sectionsInView.service
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.5 }
          }
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <div className="bg-black text-white p-4 inline-block mb-4 rounded-full">
            <SiTicktick size="2rem" />
          </div>
          <h1 className="text-lg font-bold uppercase mb-2">
            MONEY BACK GUARANTEE
          </h1>
          <p>We return money within 30 days</p>
        </motion.div>
      </div>
    </section>
  );
}
