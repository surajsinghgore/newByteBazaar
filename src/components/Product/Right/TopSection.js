const TopSection = () => {
  return (
    <div className="w-full">
      <div class="flex items-center gap-10 justify-end">
        <div class="search w-[30%]">
          <select className="border-2 p-2 px-6 w-full outline-none">
            <option value="no">Filter</option>
            <option value="ascending">Alphabetically, A-Z</option>
            <option value="descending">Alphabetically, Z-A</option>
            <option value="low">Price, low to high</option>
            <option value="high">Price, high to low</option>
          </select>
        </div>
        <div class="">
          <h1 className="text-xl">Showing 1 - 0 of 0 result</h1>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
