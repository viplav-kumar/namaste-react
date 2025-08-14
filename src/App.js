/* 
Component Structure:
-------------------
Header:
------ 
  - Logo
  - Navigation Menu Items:
    ---------------------
      - Location
      - Search Restaurant
  - Profile
  - Cart
Body:
----
  - Welcome Image
  - Trending Food Type Selector
  - Famous Food brand Selector
  - Filters and Sorting Bar
  - Restaurant Container:
    --------------------
      - Restaurant Card
Footer:
------
  - Logo
  - Copyright
  - Links
  - About
  - Address
  - Contacts
  - Social Media Links
  - Country & Language Selection
  - App Download Links




  <TrendingFoodTypeCascader />
  <FamousFoodBrandCascader />
  <FiltersAndSortingBar />
  <RestaurantContainer />
*/

import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <div className="res-app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
