import SubCategoryCard from "./SubCategorySection/SubCategoryCard";

const LeftCategoryMenu = () => {
  return (
    <div className="px-10">
      <div className="my-6">
        <SubCategoryCard />
      </div>

      <div className="my-6">
        <SubCategoryCard />
      </div>

      <div className="my-6">
        <SubCategoryCard />
      </div>

      <div className="my-6">
        <SubCategoryCard />
      </div>
    </div>
  );
};

export default LeftCategoryMenu;
