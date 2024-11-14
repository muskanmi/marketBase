import React from "react";

const Cart = () => {
  return (
    <section className="container">
      <div className="mt-9 mb-9">
        <span>Home</span>
        <span>/</span>
        <span>Cart</span>
      </div>

      <div className="flex justify-between items-center">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
      </div>
    </section>
  );
};

export default Cart;
