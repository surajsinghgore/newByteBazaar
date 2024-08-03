import React from "react";
import OrderItems from "./OrderItems";
import OrderItemContainer from "./OrderItemContainer";

const RightSection = () => {
  return (
    <div className="bg-[#f0f0f0] py-5">
      <div class="w-[80%] m-auto">
        <h1 className="my-4 text-2xl font-medium">Order Summery</h1>

        <OrderItems />

        <OrderItemContainer />
        <OrderItemContainer />
        <OrderItemContainer />
        <OrderItemContainer />
      </div>
    </div>
  );
};

export default RightSection;
