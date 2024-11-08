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
      <div>
        <Banner />
      </div>

      {/* Flash Sales section with left container width and right side full width */}
      <div className="relative">
        <div className="container px-4 mx-auto md:px-8">
          <div className="flex items-center space-x-2">
            <span className="block w-4 bg-red-600 rounded-[5px] h-7"></span>{" "}
            <span className="text-sm font-bold text-red-600">Today&apos;s</span>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="pt-5 pb-5 pr-16 text-2xl font-bold">Flash Sales</h1>
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
            <div className="flex items-center ml-auto space-x-3">
              <div className="p-2 bg-[#f5f5f5] rounded-full flex items-center justify-center">
                <FaArrowLeft size="1.2rem" />
              </div>
              <div className="p-2 bg-[#f5f5f5] rounded-full flex items-center justify-center">
                <FaArrowRight size="1.2rem" />
              </div>
            </div>
          </div>
        </div>
        {/* Cards for Flash Sales, with full width on the right */}
        <div className="flex items-center justify-between w-full -mr-4 ml-36">
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
        <div className="flex items-center justify-center pb-5">
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="error">
              View All Products
            </Button>
          </ThemeProvider>
        </div>
      </div>

      {/* Regular Container for other sections */}
      <div className="container px-4 mx-auto md:px-8">
        {/* You can add other sections here */}
        <div className="mt-10">
          {/* Example Section */}
          <h2 className="text-2xl font-bold">Other Section Title</h2>
          <div className="flex justify-between mt-5">
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
      </div>
    </section>
  );
}
