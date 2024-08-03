import CartPageBottomBtn from "@/components/Cart/CartPage/CartPageBottomBtn";
import CartPageItemContainer from "@/components/Cart/CartPage/CartPageItemContainer";
import SpecialInstructionPage from "@/components/Cart/CartPage/SpecialInstructionPage";
import TopTitleBar from "@/components/Cart/CartPage/TopTitleBar";
import WishListCartPage from "@/components/WhishlistPage/WishListCartPage";
const page = () => {
  return (
    <div>
      <TopTitleBar title={"Wishlist Page"}/>
      <div className="cartParent">
        <div className="w-[90%] m-auto my-10">

        {/* <p className="text-center text-2xl py-10">No Items In Wishlist</p> */}
         <div className="w-full grid grid-cols-4 gap-4 my-4 p-5">
            <WishListCartPage />
            <WishListCartPage />
            <WishListCartPage />
            <WishListCartPage />
            <WishListCartPage />
         </div>
         
        </div>

       
      </div>
    </div>
  )
}

export default page
