import React, { useState } from "react";
import PuppyDetails from "./PuppyDetails";

const Navbar = () => {
  const [query, setQuery] = useState('')
  return (
    <div id="navbar">
      {/* <h2>Puppy Bowl</h2> */}

      <div className = "navName">
      <div className = "nameSearch">
        <label> Name: </label>
        <input type="text" onChange={e => setQuery(e.target.value)}/>

        <label> Breed: </label>
        <input type="text" onChange={e => setQuery(e.target.value)}/>
        </div>
      {/* <div className = "breedSearch">Breed: </div> */}
      <button className="submitBtn"> Submit </button>
      </div>
    </div>
  );
};

export default Navbar;