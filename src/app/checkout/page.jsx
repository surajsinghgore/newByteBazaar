import RightSideItemContainer from "@/components/Checkout/RightSideItemContainer";
import CheckoutFormPage from "../../components/Checkout/CheckoutFormPage";
import CouponCodeBtn from "@/components/Checkout/CouponCodeBtn";
import SubTotalPage from "@/components/Checkout/SubTotalPage";
const page = () => {
  return (
    <div className="w-[90%] m-auto h-fit">
      <div class="flex justify-center gap-5 ">
        <div class="flex-1 py-8">
          <CheckoutFormPage />
        </div>
        <div class="w-[50%] p-4 border-l-2 h-[90vh] ">
          <div class="w-[90%] m-auto py-8">
            <RightSideItemContainer />
            <CouponCodeBtn />
            <SubTotalPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
