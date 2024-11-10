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
import frame_5 from "../public/images/Frame-5.png";

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

      {/* Other Sections */}
      <div className="container px-4 mx-auto mt-10 md:px-8">
        <h2 className="text-2xl font-bold">Other Section Title</h2>
        <div className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2 md:grid-cols-3">
          <Card
            image={frame_5}
            title="Product Title"
            price="99"
            reviews="(150)"
          />
          <Card
            image={frame_2}
            title="Another Product"
            price="110"
            reviews="(95)"
          />
        </div>
      </div>
    </section>
  );
}
