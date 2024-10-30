const SearchComponent = () => {
  return (
    <div className="flex justify-center w-full my-5">
      <div className="relative w-4/5">
        <input
          type="text"
          className="w-full bg-white  py-2 pl-4 pr-16 rounded-full focus:outline-none focus:ring-0"
          placeholder="검색"
        />
        <i className="fa-solid fa-magnifying-glass absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"></i>
      </div>
    </div>
  );
};

export default SearchComponent;
