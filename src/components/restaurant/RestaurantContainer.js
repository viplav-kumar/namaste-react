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
    <div className="res-container">
      <h3>Food Delivery Restaurants Near You</h3>
      <div className="res-search-filter">
        <div className="search-food-restaurants-container">
          <input
            type="text"
            className="search-food-restaurants-input"
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
            className="search-food-restaurants-btn"
            onClick={() => filterRestaurant()}
          >
            Search
          </button>
        </div>
        <button
          className={
            topRatedRestaurantSelected
              ? "top-rated-res-btn filterSelected"
              : "top-rated-res-btn"
          }
          onClick={() => getTopRatedRestaurants()}
        >
          Top Rated Restaurants
        </button>
      </div>
      {isLoading ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "60px" }}>
          {Array(6)
            .fill("")
            .map((_, i) => (
              <RestaurantCardShimmer key={i} />
            ))}
        </div>
      ) : filteredRestaurantData.length ? (
        <section className="res-container-cards">
          {filteredRestaurantData.map((res) => (
            <Link key={res.id} to={"/restaurant/" + res.id}>
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
