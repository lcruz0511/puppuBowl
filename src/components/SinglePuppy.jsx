import React from "react";
import PuppyDetails from "./PuppyDetails";
import { Link } from "react-router-dom";

const SinglePuppy = ({puppy}) => {
  return (
    <div className="puppy">
      <div className="headerName">
        <div className="name">{puppy?.name}</div>
        <div className="id">#{puppy?.id}</div>
      </div>
      <img src ={puppy?.imageUrl} className ="img" />
       <Link to={`/${puppy?.id}`}> 
       <button className="detailBtn">See Details</button>

    </Link>
      <button className="deleteBtn">Delete From Roster</button>
    </div>
  );
};

export default SinglePuppy;