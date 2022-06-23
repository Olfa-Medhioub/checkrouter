import {Button} from "react-bootstrap"
import { useState } from 'react';
import MovieList from "./MovieList";
import { useNavigate } from "react-router-dom";

const Home=({movies})=>{
  const [show,setShow] = useState(false)
  const handleShow=()=> setShow(!show)
  const navigate = useNavigate()
    return(
        <div>
            <br/>
            <br/>
            <h2  className="home">Watch Free Movies With <span className="Mov">  MovieNet </span> </h2>
            <br/>
            <h4 className="home">Stop searching for free movie websites and watch MovieNet now </h4>
            <br/>
            <Button variant="warning" style={{marginLeft: '850px'}} onClick={()=> navigate('/Movies')}>Stream Free Now</Button>
             {/* {
              show && <MovieList movies={movies}/>
             } */}
        </div>
    );
}
export default Home