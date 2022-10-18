import React from "react";
import PuppyDetails from "./PuppyDetails";

const SinglePuppy = (props) => {
  const puppy = props.puppy;
  return (
    <div className="puppy">
      <div className="headerName">
        <div className="name">{puppy.name}</div>
        <div className="id">#{puppy.id}</div>
      </div>
      <img src ={puppy.imageUrl} className ="img" />
      <button className="detailBtn">See Details</button>
        {/* <Link to={`${puppy.id}`}>See Details</Link> */}
        {/* <Link to= "/puppies">
          <button>See Details</button></Link> */}
      <button className="deleteBtn">Delete From Roster</button>
    </div>
  );
};

export default SinglePuppy;