import LeftSection from "@/components/ordercomplete/LeftSection"
import RightSection from "@/components/ordercomplete/RightSection"

const page = () => {
  return (
    <div className="w-[90%] m-auto h-fit my-10">
      <div className="flex justify-center gap-5 ">
        <div className="flex-1 py-8">
        <LeftSection />
        </div>
        <div className="w-[50%] py-4">
         <RightSection/>
        </div>
      </div>
    </div>
  )
}

export default page
