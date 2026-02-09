import { useParams } from "react-router-dom";
import useRestaurantDetails from "../../utils/useRestaurantDetails";
import RestaurantPageShimmer from "./RestaurantPageShimmer";
import RestaurantPageHeader from "./RestaurantPageHeader";
import RestaurantPageMenu from "./RestaurantPageMenu";
import RestaurantPageFooter from "./RestaurantPageFooter";

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
