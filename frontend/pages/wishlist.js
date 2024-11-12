import { Button, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import Card from "@/components/Card";
import frame_1 from "../public/images/Frame-1.png";
import frame_2 from "../public/images/Frame-2.png";

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

const Wishlist = () => {
  return (
    <section className="container pt-8 pb-8 mx-auto">
      {/* Heading and Button aligned with the cards */}
      <div className="flex justify-between items-center px-4 md:px-8">
        <h1 className="text-lg font-semibold">Wishlist (4)</h1>
        <ThemeProvider theme={theme}>
          <Button
            variant="outlined"
            className="text-black border-black rounded-none"
          >
            Move All To Bag
          </Button>
        </ThemeProvider>
      </div>

      {/* Card Grid */}
      <div className="px-4 mx-auto mt-16 md:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card
            image={frame_1}
            title="HAVIT HV-G92 Gamepad"
            price="120"
            reviews="(88)"
            url="wishlist_card"
          />
          <Card
            image={frame_1}
            title="HAVIT HV-G92 Gamepad"
            price="120"
            reviews="(88)"
            url="wishlist_card"
          />
          <Card
            image={frame_1}
            title="HAVIT HV-G92 Gamepad"
            price="120"
            reviews="(88)"
            url="wishlist_card"
          />
          <Card
            image={frame_1}
            title="HAVIT HV-G92 Gamepad"
            price="120"
            reviews="(88)"
            url="wishlist_card"
          />
        </div>
      </div>

      {/* Just For You Section with See All Button Aligned */}
      <div className="relative container px-4 mx-auto md:px-8 mt-20">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="block w-4 bg-red-600 rounded-[5px] h-7"></span>
            <span className="text-sm font-bold text-red-600">Just For You</span>
          </div>
          <ThemeProvider theme={theme}>
            <Button variant="outlined" className="text-black border-black">
              See All
            </Button>
          </ThemeProvider>
        </div>
      </div>

      {/* Cards for Flash Sales */}
      <div className="container px-4 mx-auto mt-8 md:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          <Card
            image={frame_2}
            title="HAVIT HV-G92 Gamepad"
            price="120"
            reviews="(88)"
            url="just_for_you"
          />
          <Card
            image={frame_2}
            title="AK-900 Wired Keyboard"
            price="960"
            reviews="(75)"
            url="just_for_you"
          />
          <Card
            image={frame_2}
            title="IPS LCD Gaming Monitor"
            price="370"
            reviews="(99)"
            url="just_for_you"
          />
          <Card
            image={frame_2}
            title="S-Series Comfort Chair"
            price="375"
            reviews="(99)"
            url="just_for_you"
          />
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
