import React from "react";
import OrderItemCard from "./OrderItemCard";

const UserLeftSection = () => {
  return (
    <div>
      <h1 className="text-lg font-semibold">Order History</h1>
      <p className="my-2">You haven&lsquo;t placed any orders yet.</p>

      <OrderItemCard />
    </div>
  );
};

export default UserLeftSection;
