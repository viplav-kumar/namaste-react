const HeaderSearchBar = () => {
  return (
    <section className="flex justify-between">
      <div className="p-[10]">
        <input
          className="h-[40] w-[250] border border-gray-300 rounded-lg px-4 py-2
         text-sm text-gray-700
         focus:border-orange-500 focus:ring-2 focus:ring-orange-200
         focus:outline-none transition"
          type="text"
          placeholder="Search for area, street name..."
        ></input>
      </div>
      <div className="p-[10]">
        <input
          className="h-[40] w-[250] border border-gray-300 rounded-lg px-4 py-2
         text-sm text-gray-700
         focus:border-orange-500 focus:ring-2 focus:ring-orange-200
         focus:outline-none transition"
          type="text"
          placeholder="Search for restaurant and food"
        ></input>
      </div>
    </section>
  );
};

export default HeaderSearchBar;
