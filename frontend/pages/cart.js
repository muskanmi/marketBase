import Image from "next/image";
import React, { useState } from "react";
import cart_1 from "../public/images/cart_1.png";
import cart_2 from "../public/images/cart_2.png";
import { Button, createTheme, ThemeProvider } from "@mui/material";

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

const Cart = () => {
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(2);

  const handleQuantityChange = (type, product) => {
    if (product === "product1") {
      if (type === "increase") setQuantity1(quantity1 + 1);
      else if (type === "decrease" && quantity1 > 1)
        setQuantity1(quantity1 - 1);
    } else if (product === "product2") {
      if (type === "increase") setQuantity2(quantity2 + 1);
      else if (type === "decrease" && quantity2 > 1)
        setQuantity2(quantity2 - 1);
    }
  };

  return (
    <section className="container mx-auto">
      {/* Breadcrumb */}
      <div className="mt-9 mb-9 flex items-center pl-6 pb-6">
        {/* Disabled Home link */}
        <span className="text-gray-400 cursor-default text-[12px]">Home</span>
        <span className="text-[12px]">&nbsp;/&nbsp;</span>
        {/* Active Cart link */}
        <span className="text-black font-bold text-[12px]">Cart</span>
      </div>

      {/* Cart Table Headers */}
      <div className="flex justify-between items-center shadow-md py-4 px-6 mb-8 bg-white">
        <div className="w-[30%] font-light pl-4 m-2">Product</div>
        <div className="w-[20%] text-center font-light">Price</div>
        <div className="w-[20%] text-center font-light">Quantity</div>
        <div className="w-[20%] text-center font-light">Subtotal</div>
      </div>

      {/* Product Row 1 */}
      <div className="flex justify-between items-center shadow-md py-4 px-6 bg-white mb-8 rounded-lg">
        {/* Product Image & Name */}
        <div className="flex items-center w-[30%]">
          <Image
            src={cart_1}
            alt="Cart One"
            width={60}
            height={60}
            className="mr-4 ml-4 m-2"
          />
          <span className="font-medium">LCD Monitor</span>
        </div>
        <div className="w-[20%] text-center font-light">$650.00</div>
        {/* <div className="w-[20%] text-center font-light">01</div> */}
        <div className="w-[20%] text-center flex justify-center items-center">
          {/* Quantity Button */}
          <div className="border border-black flex items-center rounded">
            <button
              className="px-3 py-1 border-r border-black"
              onClick={() => handleQuantityChange("decrease", "product1")}
            >
              &#x2212;
            </button>
            <input
              type="text"
              value={quantity1}
              readOnly
              className="w-10 text-center outline-none"
            />
            <button
              className="px-3 py-1 border-l border-black"
              onClick={() => handleQuantityChange("increase", "product1")}
            >
              &#x2b;
            </button>
          </div>
        </div>
        <div className="w-[20%] text-center font-semibold">$650.00</div>
      </div>

      {/* Product Row 2 */}
      <div className="flex justify-between items-center shadow-md py-4 px-6 bg-white mb-4 rounded-lg">
        {/* Product Image & Name */}
        <div className="flex items-center w-[30%]">
          <Image
            src={cart_2}
            alt="Cart Two"
            width={60}
            height={60}
            className="mr-4 ml-4 m-2"
          />
          <span className="font-medium">H1 Gamepad</span>
        </div>
        <div className="w-[20%] text-center font-light">$550.00</div>
        {/* <div className="w-[20%] text-center font-light">02</div> */}
        <div className="w-[20%] text-center flex justify-center items-center">
          {/* Quantity Button */}
          <div className="border border-black flex items-center rounded">
            <button
              className="px-3 py-1 border-r border-black"
              onClick={() => handleQuantityChange("decrease", "product2")}
            >
              &#x2212;
            </button>
            <input
              type="text"
              value={quantity2}
              readOnly
              className="w-10 text-center outline-none"
            />
            <button
              className="px-3 py-1 border-l border-black"
              onClick={() => handleQuantityChange("increase", "product2")}
            >
              &#x2b;
            </button>
          </div>
        </div>
        <div className="w-[20%] text-center font-semibold">$1100.00</div>
      </div>

      <div className="flex justify-between pt-2 pb-8">
        <ThemeProvider theme={theme}>
          <Button
            variant="outlined"
            className="text-black border-black pl-10 pr-10"
          >
            Return To Shop
          </Button>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Button
            variant="outlined"
            className="text-black border-black pl-10 pr-10"
          >
            Update Cart
          </Button>
        </ThemeProvider>
      </div>

      <div className="flex justify-between items-start gap-8 pt-10">
        {/* Coupon Code Section */}
        <div className="flex items-center rounded-lg p-2">
          <input
            type="text"
            placeholder="Coupon Code"
            className="p-2 border border-black rounded mr-4"
          />
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="error">
              Apply Coupon
            </Button>
          </ThemeProvider>
        </div>

        {/* Cart Total Section */}
        <div className="border border-black rounded-lg p-6 w-[40%] mb-32">
          <h1 className="font-bold text-lg mb-4">Cart Total</h1>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-xl">
            <span>Total:</span>
            <span>$1750</span>
          </div>
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="error"
              fullWidth
              className="mt-4"
            >
              Process to checkout
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </section>
  );
};

export default Cart;
