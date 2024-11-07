import Banner from "@/components/Banner";
import Card from "@/components/Card";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

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

      <div className="container px-4 mx-auto md:px-8">
        <div className="flex items-center space-x-2">
          <span className="block w-4 bg-red-600 rounded-[5px] h-7"></span>{" "}
          <span className="text-sm font-bold text-red-600">Today&apos;s</span>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="pt-5 pb-5 pr-16 text-2xl font-bold">Flash Sales</h1>
          {/* Countdown Timer */}
          <div className="flex items-center text-2xl font-semibold space-x-4">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-[10px] font-light">{label}</span>
                <div className="flex items-center">
                  <span className="text-black">
                    {["03", "23", "19", "56"][index]}
                  </span>
                  {index < 3 && (
                    <span className="text-2xl font-semibold text-black mx-1">
                      :
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Navigation Arrows */}
          <div className="flex items-center space-x-3 ml-auto">
            <div className="p-2 bg-[#f5f5f5] rounded-full flex items-center justify-center">
              <FaArrowLeft size="1.2rem" />
            </div>
            <div className="p-2 bg-[#f5f5f5] rounded-full flex items-center justify-center">
              <FaArrowRight size="1.2rem" />
            </div>
          </div>
        </div>
        <div>
          <Card />
        </div>
        <div className="flex items-center justify-center pb-5">
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="error">
              View All Products
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </section>
  );
}
