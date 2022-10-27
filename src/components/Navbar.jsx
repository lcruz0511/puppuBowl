import React, { useState } from "react";
import PuppyDetails from "./PuppyDetails";

const Navbar = (props) => {
  const query=props.query;
  const setQuery=props.setQuery;
  const handleChange = event =>{
    const nameSearch=event.target.value
    setQuery({
      names:nameSearch
    })
  }
  return (
    <div id="navbar">
      {/* <h2>Puppy Bowl</h2> */}

      <div className = "navName">
      <div className = "nameSearch">
        <label> Name: </label>
        <input type="text" onChange={handleChange}/>

        <label> Breed: </label>
        <input type="text" onChange={e => setQuery(e.target.value)}/>
        </div>
      {/* <div className = "breedSearch">Breed: </div> */}
      <button className="submitBtn" onSubmit={setQuery}> Submit </button>
      </div>
    </div>
  );
};

export default Navbar;