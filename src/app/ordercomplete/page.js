import LeftSection from "@/components/ordercomplete/LeftSection"
import RightSection from "@/components/ordercomplete/RightSection"

const page = () => {
  return (
    <div className="w-[90%] m-auto h-fit my-10">
      <div class="flex justify-center gap-5 ">
        <div class="flex-1 py-8">
        <LeftSection />
        </div>
        <div class="w-[50%] py-4">
         <RightSection/>
        </div>
      </div>
    </div>
  )
}

export default page
