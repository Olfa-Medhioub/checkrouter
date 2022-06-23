import MovieCard from "./MovieCard"
import MovieFilter from "./MovieFilter"
import MovieAdd from "./MovieAdd";

const MovieList=({movies,setMovies,titleF,ratingF,setTitleF,setRatingF})=>{
  var movieToShow = movies.filter(movie=>movie.title.toUpperCase().includes(titleF.toUpperCase()) && movie.rating <= ratingF).map(movie=><MovieCard key={movie.id} movie={movie} setMovies={setMovies} movies={movies}/>)        

return(
    <div>
      <br/>
      <MovieAdd setMovies={setMovies} movies={movies}/>
      <br/>
      <h5 className ='hed'>sharing a few of our favourite movies</h5>
      <br/>            
      <MovieFilter setTitleF={setTitleF} setRatingF={setRatingF} titleF={titleF} ratingF={ratingF}/>
      <br/>
          <div className= "List" >
                 
            {
              movieToShow.length == 0 ? <img src= '/noResult.jpg'/> : movieToShow
            }
            {/* <img  className= "imgRad" src={el.posterURL}/> */}      
          </div>
          </div>

)
}

export default MovieList 