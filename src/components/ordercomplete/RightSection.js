import React from "react";
import OrderItems from "./OrderItems";
import OrderItemContainer from "./OrderItemContainer";
import OrderSubTotalPage from "./OrderSubTotalPage";

const RightSection = () => {
  return (
    <div className="bg-[#f0f0f0] py-5">
      <div className="w-[80%] m-auto">
        <h1 className="my-4 text-2xl font-medium">Order Summery</h1>
        <OrderItems />
        <div className="my-6">

        <OrderItemContainer />
        <OrderItemContainer />
        <OrderItemContainer />
        <OrderItemContainer />
        <OrderSubTotalPage />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
