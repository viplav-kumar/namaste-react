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

import React, { useRef } from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <AppLogo />
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

const AppLogo = () => {
  return (
    <div className="appLogo">
      <img
        alt="App Logo"
        src="https://images.websiteplanet.com/wp-content/uploads/2020/08/9-Best-Z-Logos-and-How-to-Make-Your-Own-for-Free-image1.png"
      ></img>
      <h3>ingry</h3>
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

const Body = () => {
  return (
    <div className="body">
      <WelcomeComponent />
      <TrendingFoodTypeCascader />
    </div>
  );
};

const WelcomeComponent = () => {
  return (
    <div className="welcomeComponent">
      <img
        alt="Welcome Image"
        src="https://img.freepik.com/premium-vector/fast-food-background-realistic-style_98292-41700.jpg"
      ></img>
      <AppLogo />
      <div className="welcomeMessage">Hungry? Order Now</div>
    </div>
  );
};

const images = [
  {
    src: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
    label: "Pizza",
  },
  {
    src: "https://media.istockphoto.com/id/545286388/photo/chinese-food-blank-background.jpg?s=612x612&w=0&k=20&c=pqOIy07YKO5PlU5VxjscwTGRrrZ8PluKMUjSOz-II60=",
    label: "Chinese",
  },
  {
    src: "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2503,h_2503,c_limit/Smashburger-recipe-120219.jpg",
    label: "Burger",
  },
  {
    src: "https://static.vecteezy.com/system/resources/thumbnails/049/544/526/small_2x/traditional-indian-thali-platter-presenting-various-curries-and-naan-bread-photo.jpg",
    label: "North Indian",
  },
  {
    src: "https://static.vecteezy.com/system/resources/thumbnails/040/703/949/small/ai-generated-royal-feast-master-the-art-of-chicken-biryani-at-home-generative-ai-photo.jpg",
    label: "Biryani",
  },
  {
    src: "https://www.chefkunalkapur.com/wp-content/uploads/2021/08/CW0_7822-1300x865.jpg?v=1628745250",
    label: "Rolls",
  },
  {
    src: "https://justbakedcake.com/wp-content/uploads/2020/09/Chocochip-pastry.jpg",
    label: "Pastry",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO-QRQclfQAeQenRfuKG2XWsXD6oQ3anYpQw&s",
    label: "South Indian",
  },
  {
    src: "https://vegecravings.com/wp-content/uploads/2017/03/veg-hakka-noodles-recipe-with-step-by-step-instructions.jpg",
    label: "Noodles",
  },
  {
    src: "https://junifoods.com/wp-content/uploads/2023/11/Easy-Chicken-Momo-Dumplings-Sajilo-Kukhura-ko-Momo-%E0%A4%B8%E0%A4%9C%E0%A4%BF%E0%A4%B2%E0%A5%8B-%E0%A4%95%E0%A5%81%E0%A4%96%E0%A5%81%E0%A4%B0%E0%A4%BE%E0%A4%95%E0%A5%8B-%E0%A4%AE%E0%A4%AE-500x375.jpg",
    label: "Momos",
  },
  {
    src: "https://static.toiimg.com/thumb/52416693.cms?width=1200&height=900",
    label: "Pav Bhaji",
  },
  {
    src: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?semt=ais_hybrid&w=740",
    label: "Pasta",
  },
  {
    src: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/easy_chocolate_cake_31070_16x9.jpg",
    label: "Cake",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJV3Wk0lFM7rabY5bdyvGTFhtSsyyP-BYTA&s",
    label: "Parantha",
  },
  {
    src: "https://www.milkmaid.in/sites/default/files/2022-12/Chocolate-Ice-Cream-335x300.jpg",
    label: "Ice Cream",
  },
  {
    src: "https://www.foodandwine.com/thmb/IuZPWAXBp4YaT9hn1YLHhuijT3k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-big-italian-salad-hero-83e6ea846722478f8feb1eea33158b00.jpg",
    label: "Salad",
  },
];

const TrendingFoodTypeCascader = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 120; // Scroll by one image width
    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <h3 className="FoodTypeChooserMsg">What's on your mind?</h3>
      <div className="carousel-container">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          &#8592;
        </button>

        <div className="image-track" ref={scrollRef}>
          {images.map((item, index) => (
            <div className="image-item" key={index}>
              <img src={item.src} alt={item.label} className="carousel-image" />
              <div className="image-label">{item.label}</div>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll("right")}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="res-app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
