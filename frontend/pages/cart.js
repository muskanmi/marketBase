import React from "react";

const Cart = () => {
  return (
    <section className="container">
      {/* Breadcrumb */}
      <div className="mt-9 mb-9 flex items-center">
        {/* Disabled Home link */}
        <span className="text-gray-400 cursor-default text-[12px]">Home</span>
        <span className="text-[12px]">&nbsp;/&nbsp;</span>
        {/* Active Cart link */}
        <span className="text-black font-bold text-[12px]">Cart</span>
      </div>

      {/* Cart Table Headers */}
      <div className="flex justify-between items-center shadow-lg py-4 px-6 mb-8">
        <div className="font-semibold">Product</div>
        <div className="font-semibold">Price</div>
        <div className="font-semibold">Quantity</div>
        <div className="font-semibold">Subtotal</div>
      </div>
    </section>
  );
};

export default Cart;
