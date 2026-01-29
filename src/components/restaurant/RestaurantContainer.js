import RestaurantCard from "./RestaurantCard";
import RestaurantCardShimmer from "./RestaurantCardShimmer";
import useRestaurantsData from "../../utils/useRestaurantsData";
import { Link } from "react-router-dom";

const RestaurantContainer = () => {
  const [
    filteredRestaurantData,
    searchQuery,
    setSearchQuery,
    isLoading,
    topRatedRestaurantSelected,
    getTopRatedRestaurants,
    filterRestaurant,
  ] = useRestaurantsData();

  return (
    <div className="max-w-300 my-0 mx-auto p-5 flex flex-col">
      <h3 className="text-3xl font-semibold mb-5 text-[#222] border-b-2 border-b-[#eee] pb-2.5">
        Food Delivery Restaurants Near You
      </h3>
      <div className="flex gap-5">
        <div>
          <input
            type="text"
            className="truncate mt-2.5 mr-2.5 mb-7.5 ml-0 p-2.5 rounded-xl w-50 text-[#02060cbf] bg-white border-[#02060c26] border hover:border-black focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition"
            placeholder="Search for restaurants and food"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              console.log(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                filterRestaurant();
              }
            }}
            onBlur={(e) => {
              if (e.target.value === "") {
                filterRestaurant();
              }
            }}
          ></input>
          <button
            className="cursor-pointer text-[#02060cbf] bg-white rounded-xl border-[#02060c26] border w-20 mt-2.5 mb-7.5 p-2.5 text-sm font-semibold hover:text-black hover:border-[#000000] hover:bg-[rgb(240_240_245)]"
            onClick={() => filterRestaurant()}
          >
            Search
          </button>
        </div>
        <button
          className={
            topRatedRestaurantSelected
              ? "cursor-pointer w-[17%] mt-2.5 mr-0 mb-7.5 ml-0 p-2.5 text-white text-sm font-semibold rounded-xl bg-gray-800 border border-black"
              : "cursor-pointer w-[17%] mt-2.5 mr-0 mb-7.5 ml-0 p-2.5 text-black text-sm font-semibold rounded-xl bg-white border-[#02060c26] border hover:border hover:border-black hover:bg-gray-200"
          }
          onClick={() => getTopRatedRestaurants()}
        >
          Top Rated Restaurants
        </button>
      </div>
      {isLoading ? (
        <div className="flex flex-wrap gap-15">
          {Array(6)
            .fill("")
            .map((_, i) => (
              <RestaurantCardShimmer key={i} />
            ))}
        </div>
      ) : filteredRestaurantData.length ? (
        <section className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
          {filteredRestaurantData.map((res) => (
            <Link
              className="no-underline decoration-inherit"
              key={res.id}
              to={"/restaurant/" + res.id}
            >
              <RestaurantCard restaurantData={res} />
            </Link>
          ))}
        </section>
      ) : (
        <p>No restaurants available at the moment.</p>
      )}
    </div>
  );
};

export default RestaurantContainer;
