import Link from "next/link";
import React from "react";

const CartPageBottomBtn = () => {
  return (
    <div className="w-[90%] m-auto my-10">
      <div className="flex gap-2 items-center">
        <Link href={"/product"}>
          <button className="bg-bgColor-800 p-4 px-5 text-white rounded-md hover:bg-slate-950">Continue Shopping</button>
        </Link>
        <button className="bg-bgColor-800 p-4 px-5 text-white rounded-md hover:bg-slate-950">Clean Cart</button>
      </div>
    </div>
  );
};

export default CartPageBottomBtn;
