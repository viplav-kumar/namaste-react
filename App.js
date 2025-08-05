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
  - Food Option Selector
  - Brand Options Selector
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

import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="appLogo">
        <img
          alt="App Logo"
          src="https://images.websiteplanet.com/wp-content/uploads/2020/08/9-Best-Z-Logos-and-How-to-Make-Your-Own-for-Free-image1.png"
        ></img>
        <h3>ingry</h3>
      </div>
      <NavigationMenuItems />
      <div className="cartImage">
        <img
          alt="App Cart Image"
          src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/shopping_cart.png"
        ></img>
      </div>
      <div className="profileImage">
        <img
          alt="App Profile Image"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
        ></img>
      </div>
    </div>
  );
};

const NavigationMenuItems = () => {
  return (
    <div className="navigationMenuItems">
      <div className="userLocation">
        <input
          type="text"
          placeholder="Search for area, street name..."
        ></input>
      </div>
      <div className="searchRestaurant">
        <input type="text" placeholder="Search for restaurant and food"></input>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="res-app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
