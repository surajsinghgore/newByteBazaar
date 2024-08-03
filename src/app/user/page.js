import TopTittleBar from "@/components/user/TopTittleBar";
import UserLeftSection from "@/components/user/UserLeftSection";
import UserRightSection from "@/components/user/UserRightSection";
import React from "react";

function page() {
  return (
    <div className="w-[70%] m-auto my-4">
      <TopTittleBar />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="py-6 flex justify-between">
          <div className="w-[50%]">
            <UserLeftSection />
          </div>
          <div className="w-[50%]">
            <UserRightSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
