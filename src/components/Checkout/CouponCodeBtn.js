const CouponCodeBtn = () => {
  return (
    <div class="flex justify-between gap-2  m-auto my-10">
      <div class="w-[80%]">
        <input type="text" placeholder="Discount code or gift card" className="input w-full" />
      </div>
      <div className="bg-bgColor-800 w-[20%] text-center flex items-center justify-center rounded-md text-white hover:bg-slate-950 cursor-pointer">
        <button>Apply</button>
      </div>
    </div>
  );
};

export default CouponCodeBtn;
