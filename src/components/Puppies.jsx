import React, { useEffect, useState } from "react";
import SinglePuppy from './SinglePuppy';



const Puppies = (props) => {
    const myPuppies = props.allPuppies
    console.log(props)

    return (
    <div className="allPups">{myPuppies.map((puppy)=>{
      console.log(puppy)
      return <SinglePuppy puppy={puppy}/>
    })}
    </div>)
    

  
};

export default Puppies;
