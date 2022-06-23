import React, { useState } from "react";
import Rating from '@mui/material/Rating';
import {Button} from "react-bootstrap"


const MovieFilter = ({setTitleF,setRatingF,titleF,ratingF}) => {

  const handleFilter=()=> {
    setTitleF("")
    setRatingF(5)
  }

  return (
    <form className="Search">
      <input onChange={(e)=> setTitleF(e.target.value)} value={titleF}/>
      <Rating name="simple-controlled" onChange={(e)=> setRatingF(e.target.value)} value={ratingF}/>
      <br/>
      <Button variant="warning" onClick={handleFilter} >Reset</Button>
    </form>
  );
}

export default MovieFilter
