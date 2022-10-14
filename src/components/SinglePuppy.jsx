import React from 'react';
import PuppyDetails from './PuppyDetails';

const SinglePuppy = (props) => {
    const puppy = props.puppy;
    return (
        <div className="puppy">
            <div>{puppy.name}</div>
            <div>{puppy.breed}</div>
            <div>{puppy.status}</div>
        </div>
    )

}



export default SinglePuppy