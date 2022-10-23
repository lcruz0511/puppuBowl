import React, { useEffect, useState }  from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import SinglePuppy from "./SinglePuppy";


const PuppyDetails = ({allPuppies}) => {

const [selectedPuppy, setSelectedPuppy] = useState(null);

    let {id} = useParams()
useEffect(()=>{
    console.log(allPuppies)
    let p = allPuppies.find(puppy=>puppy.id == id)
    console.log(p)
    setSelectedPuppy(p)
},[allPuppies])

if (selectedPuppy) {
    return (
        <div>Puppy Details {id}
        <SinglePuppy puppy={selectedPuppy}/>
        </div>
    )

} else {
return <div></div>
}

}


export default PuppyDetails;