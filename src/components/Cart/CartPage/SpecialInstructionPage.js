import React from "react";

const SpecialInstructionPage = () => {
  return (
    <div class="w-[90%] m-auto my-10 flex gap-5 justify-between">
      <div class="w-[55%]">
        <h1 className="text-2xl font-bold">Special Instruction For Seller</h1>
        <textarea name="instruction" className="border resize-none w-full outline-none p-2 text-sm my-4" rows={8}></textarea>
      </div>

      <div class="flex-1">
        <h4 className="text-2xl font-bold">Cart Totals</h4>
        <div className="my-4">
          <div class="flex items-center font-semibold">
            <li className="border w-[20%] p-3">Subtotal</li>
            <li className="border w-[80%] p-3">Rs. 423423423</li>
          </div>
          <div class="flex items-center font-semibold bg-[#e2e2e2]">
            <li className="border w-[20%] p-3">Total</li>
            <li className="border w-[80%] p-3">Rs. 423423423</li>
          </div>

          <button className="bg-bgColor-800 p-4 px-5 text-white rounded-md hover:bg-slate-950 w-full my-4">Proceed to checkout</button>
        </div>

        {/* <Link href="/checkout">
                  <button>Proceed to checkout</button>
                </Link> */}
      </div>
    </div>
  );
};

export default SpecialInstructionPage;
