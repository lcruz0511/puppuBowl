import React from "react";

const Navbar = () => {
  return (
    <div id="navbar">
      {/* <h2>Puppy Bowl</h2> */}

      <div className = "navName">
      <div className = "nameSearch">Name: </div>


      {/* <form class="search-form" action="/search">
          <input class= "search-bar" type="text" name="search-term" placeholder="search">
          <button type="submit"><i class="material-icons">search</i></button>
        </form> */}

      <div className = "breedSearch">Breed: </div>
      <button className="submitBtn">Submit</button>
      </div>
    </div>
  );
};

export default Navbar;