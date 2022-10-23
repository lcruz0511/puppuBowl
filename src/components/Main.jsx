import React, { useEffect, useState } from "react";
import { Navbar, Puppies } from "./";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import  PuppyDetails from "./PuppyDetails";



const Main = () => {
  const [allPuppies, setAllPuppies] = useState([]);

  async function fetchAllPuppies() {
    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players"
      );
      const result = await response.json();
      const puppies = result.data.players;
      // console.log(puppies)
      setAllPuppies(puppies);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllPuppies();
  }, []);
  // console.log(allPuppies)

  return (
    <BrowserRouter>
    <div id="main">
      <Navbar />{" "}
      <Routes>
        
          <Route path="/" element={<Puppies allPuppies={allPuppies} />} />
          <Route path="/:id" element={<PuppyDetails allPuppies={allPuppies}/>} />
        
        
      </Routes>
    </div>
      </BrowserRouter>
  );
};

export default Main;
