import { useParams } from "react-router-dom";
import useRestaurantDetails from "../../utils/customHooks/useRestaurantDetails";
import RestaurantPageFooter from "./RestaurantPageFooter";
import RestaurantPageHeader from "./RestaurantPageHeader";
import RestaurantPageMenu from "./RestaurantPageMenu";
import RestaurantPageShimmer from "./RestaurantPageShimmer";

const RestaurantPage = () => {
  const { resId } = useParams();
  const [isLoading, restaurantInfo] = useRestaurantDetails(resId);
  return isLoading ? (
    <RestaurantPageShimmer />
  ) : (
    <div className="w-full pb-15 box-border">
      {/* Header Section */}
      <RestaurantPageHeader restaurantInfo={restaurantInfo} />
      {/* Menu Section */}
      <RestaurantPageMenu restaurantInfo={restaurantInfo} />
      {/* Footer Section */}
      <RestaurantPageFooter restaurantInfo={restaurantInfo} />
    </div>
  );
};

export default RestaurantPage;
