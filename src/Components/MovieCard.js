import { Card,Button} from "react-bootstrap"
import Rating from '@mui/material/Rating';
import MovieEdit from "./MovieEdit";
import { useState } from "react";
import {Link} from 'react-router-dom'

const MovieCard=({movie,movies,setMovies})=>{  
    const [showMore, setShowMore] = useState(false)
    const handleShow=()=> setShowMore(!showMore)
    const handleDelete=(id)=>  setMovies(movies.filter(movie => movie.id != id))  
        return(
         <div>
       
          <Card style={{ width: '18rem' }}>
            <Link to={`/Movies/${movie.id}`}><Card.Img variant="top"  src={movie.posterURL} style={{width:'286px',height:'300px'}}/></Link>
           <Card.Body>
           <Card.Title>{movie.title}</Card.Title>
           <Card.Text    style={{ height: !showMore && '60px'}}>
           {showMore ? movie.description : `${movie.description.substring(0, 40)}...`}
            <a className="btn" onClick={handleShow} style={{color :showMore ? 'red' : 'green'}}>{showMore ? 'Show Less' : 'Show More'}</a>             
           </Card.Text>
            <Rating name="read-only" value={movie.rating} readOnly />
            <br/>  <br/>
            <i class="fa-solid fa-trash fa-2xl" onClick={()=>{handleDelete(movie.id) }}></i>
            <MovieEdit movie={movie} movies={movies} setMovies={setMovies}/>
           </Card.Body>
          </Card>
       </div>
    //    <div className= "film" >
    //    {movie.map((el,i)=>{
    //     return(
    //    <div key={el.id}>
    //    <img  className= "imgRad" src={el.posterURL}/>
    //    </div>);})}
    //    </div>

        )
    }
    
export default MovieCard 