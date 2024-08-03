import CartPageBottomBtn from "@/components/Cart/CartPage/CartPageBottomBtn";
import CartPageItemContainer from "@/components/Cart/CartPage/CartPageItemContainer";
import SpecialInstructionPage from "@/components/Cart/CartPage/SpecialInstructionPage";
import TopTitleBar from "@/components/Cart/CartPage/TopTitleBar";

const page = () => {
  return (
    <div>
      <TopTitleBar  title={" Your Shopping Cart"} />
      <div className="cartParent">
        <div className="border w-[90%] m-auto my-10">

        {/* <p className="text-center text-2xl py-10">No Items In Cart</p> */}
          <CartPageItemContainer />
          <CartPageItemContainer />
          <CartPageItemContainer />
          <CartPageItemContainer />
        </div>

        <CartPageBottomBtn />

        <SpecialInstructionPage />
      </div>
    </div>
  );
};

export default page;
