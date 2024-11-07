import Banner from "@/components/Banner";
import Card from "@/components/Card";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
          <div className="flex items-center space-x-3 text-2xl font-semibold">
            <div className="flex flex-col items-center">
              <span className="text-sm">Days</span>
              <span className="pr-3 text-black">03</span>
            </div>
            <span className="text-2xl">:</span>

            <div className="flex flex-col items-center">
              <span className="text-sm">Hours</span>
              <span className="pr-3 text-black">23</span>
            </div>
            <span className="text-2xl">:</span>

            <div className="flex flex-col items-center">
              <span className="text-sm">Minutes</span>
              <span className="pr-3 text-black">19</span>
            </div>
            <span className="text-2xl">:</span>

            <div className="flex flex-col items-center">
              <span className="text-sm">Seconds</span>
              <span className="text-black ">56</span>
            </div>
          </div>
          <div className="flex items-center ml-auto space-x-3">
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
