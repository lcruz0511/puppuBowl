import React, { useEffect, useState } from "react";


// const players= [{}]

const Puppies = () => {
    const[allPuppies, setAllPuppies]=useState([])
    setAllPuppies(allPuppies);
    
  async function fetchAllPuppies() {
    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players"
      );
      const result = await response.json();
      console.log(result.data.players);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    fetchAllPuppies();
  }, []);
};

export default Puppies;
