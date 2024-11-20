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
  const products = [
    {
      id: 1,
      name: "LCD Monitor",
      price: 650.0,
      image: cart_1,
      quantity: 1,
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550.0,
      image: cart_2,
      quantity: 2,
    },
  ];

  const [quantities, setQuantities] = useState(
    products.map((product) => product.quantity)
  );

  const handleQuantityChange = (type, index) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      if (type === "increase") {
        newQuantities[index] += 1;
      } else if (type === "decrease" && newQuantities[index] > 1) {
        newQuantities[index] -= 1;
      }
      return newQuantities;
    });
  };

  return (
    <section className="container mx-auto">
      <div className="mt-9 mb-9 flex items-center pl-6 pb-6">
        <span className="text-gray-400 cursor-default text-[12px]">Home</span>
        <span className="text-[12px]">&nbsp;/&nbsp;</span>
        <span className="text-black font-bold text-[12px]">Cart</span>
      </div>

      <div className="flex justify-between items-center shadow-md py-4 px-6 mb-8 bg-white">
        <div className="w-[30%] font-light pl-4 m-2">Product</div>
        <div className="w-[20%] text-center font-light">Price</div>
        <div className="w-[20%] text-center font-light">Quantity</div>
        <div className="w-[20%] text-center font-light">Subtotal</div>
      </div>

      {products.map((product, index) => (
        <div
          key={product.id}
          className="flex justify-between items-center shadow-md py-4 px-6 bg-white mb-8 rounded-lg"
        >
          <div className="flex items-center w-[30%]">
            <Image
              src={product.image}
              alt={product.name}
              width={60}
              height={60}
              className="mr-4 ml-4 m-2"
            />
            <span className="font-medium">{product.name}</span>
          </div>
          <div className="w-[20%] text-center font-light">
            ${product.price.toFixed(2)}
          </div>
          <div className="w-[20%] text-center flex justify-center items-center">
            <div className="border border-black flex items-center rounded">
              <button
                className="px-3 py-1 border-r border-black"
                onClick={() => handleQuantityChange("decrease", index)}
              >
                &#x2212;
              </button>
              <input
                type="text"
                value={quantities[index]}
                readOnly
                className="w-10 text-center outline-none"
              />
              <button
                className="px-3 py-1 border-l border-black"
                onClick={() => handleQuantityChange("increase", index)}
              >
                &#x2b;
              </button>
            </div>
          </div>
          <div className="w-[20%] text-center font-semibold">
            ${(product.price * quantities[index]).toFixed(2)}
          </div>
        </div>
      ))}
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
        <div className="border border-black rounded-lg p-6 w-[40%] mb-32">
          <h1 className="font-bold text-lg mb-4">Cart Total</h1>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>
              $
              {products
                .reduce(
                  (acc, product, index) =>
                    acc + product.price * quantities[index],
                  0
                )
                .toFixed(2)}
            </span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-xl">
            <span>Total:</span>
            <span>
              $
              {products
                .reduce(
                  (acc, product, index) =>
                    acc + product.price * quantities[index],
                  0
                )
                .toFixed(2)}
            </span>
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
