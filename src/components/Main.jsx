import React, {useEffect, useState} from "react";
import { Navbar, Puppies } from "./";

const Main = () => {
  const[allPuppies, setAllPuppies]=useState([])
    
    
  async function fetchAllPuppies() {
    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players"
      );
      const result = await response.json();
      const puppies = result.data.players
      // console.log(puppies)
      setAllPuppies(puppies)
      ;
    } catch(error){
      console.log(error)
    }
  }


  useEffect(() => {
    fetchAllPuppies();
  }, []);
  // console.log(allPuppies)

  return (
    <div id="main">
      <Navbar />
      <Puppies allPuppies={allPuppies}/>
    </div>
  );
};

export default Main;
