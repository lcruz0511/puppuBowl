import React, { useEffect, useState } from "react";



const Puppies = (props) => {
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









// const Puppies = (props) => {
//   const allPuppies = props.puppyData
//     return (
//       <div className='box'>{`This is your Puppies component`}
//       {allPuppies.length ?
//       allPuppies.map((puppy) => {
//         return (
//           <div key={`player-${puppy.id}`} className="puppy">
//               <div>puppy.name</div>
//               <div>puppy.breed</div>
//               <div>puppy.status</div>
//           </div>
//         )
//       })
//       </div>)
//     : <div>Loading the puppies...</div>
    










