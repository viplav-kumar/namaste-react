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
  - Welcome Image (Optional)
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

*/

import ReactDOM from "react-dom/client";
import MyHeader from "./components/MyHeader";
import Body from "./components/Body";
import MyFooter from "./components/MyFooter";

const AppLayout = () => {
  return (
    <div className="res-app">
      <MyHeader />
      <Body />
      <MyFooter />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
