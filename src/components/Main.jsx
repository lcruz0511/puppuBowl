import React, { useEffect, useState } from "react";
import { Navbar, Puppies } from "./";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import  PuppyDetails from "./PuppyDetails";



const Main = () => {
  const [query, setQuery] = useState({names:''})

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

  function filterAllPuppies(){
    if (!query.names){
    return allPuppies;
    }else{
      return allPuppies.filter((puppy)=>{
        return puppy.name.toLowerCase()==query.names.toLowerCase()
      })
    }
  }

  useEffect(() => {
    fetchAllPuppies();
  }, []);
  // console.log(allPuppies)

  return (
    <BrowserRouter>
    <div id="main">
      <Navbar query={query} setQuery={setQuery} />
 />{" "}
      <Routes>
        
          <Route path="/" element={<Puppies allPuppies={filterAllPuppies()} />} />
          <Route path="/:id" element={<PuppyDetails allPuppies={allPuppies}/>} />

        
      </Routes>
    </div>
      </BrowserRouter>
  );
};

export default Main;
