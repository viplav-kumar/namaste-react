const HeaderSearchBar = () => {
  return (
    <section className="navigationMenuItems">
      <div className="userLocation">
        <input
          type="text"
          placeholder="Search for area, street name..."
        ></input>
      </div>
      <div className="searchRestaurant">
        <input type="text" placeholder="Search for restaurant and food"></input>
      </div>
    </section>
  );
};

export default HeaderSearchBar;
