import React from "react"
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import DescriptionMovie from './Components/DescriptionMovie';
import MovieCard from './Components/MovieCard';
import MovieList from './Components/MovieList';
import NavMovie from './Components/NavMovie';
import MovieFilter from './Components/MovieFilter';
import MovieAdd from "./Components/MovieAdd";
import SignIn from "./Components/SignIn";
import {useState} from "react"

function App() {
  const [movies, setMovies] = useState([{title:'The lost city', id:Math.random() ,description:'American action-adventure comedy film directed by the Nee brothers, who co-wrote the screenplay with Oren Uziel and Dana Fox, from a story conceived by Seth Gordon',posterURL: '/film1.jpg',rating: 3, trailler : "https://www.youtube.com/embed/nfKO9rYDmE8"},
                                    {title:'Morbius', id:Math.random(),description:'American superhero film based on the Marvel Comics character of the same name, produced by Columbia Pictures in association with Marvel.',posterURL:'/film5.jpg',rating:5, trailler : "https://www.youtube.com/embed/wvAZybYcWu8"},
                                    {title:'Uncharted', id:Math.random(), description:'American action-adventure film directed by Ruben Fleischer from a screenplay by Rafe Lee Judkins, Art Marcum and Matt Holloway, based on the video game franchise developed by Naughty Dog and published by Sony Interactive Entertainment.',posterURL:'/film3.jpg',rating:4, trailler : "https://www.youtube.com/embed/eHp3MbsCbMg"},
                                    {title:'Squid Game', id:Math.random(), description:'South Korean survival drama television series created by Hwang Dong-hyuk for Netflix. Its cast includes Lee Jung-jae, Park Hae-soo, Wi Ha-joon, HoYeon Jung, O Yeong-su, Heo Sung-tae, Anupam Tripathi, and Kim Joo-ryoung.',posterURL:'/film4.jpg',rating:3, trailler : "https://www.youtube.com/embed/oqxAJKy0ii4"}])
                                    // {title:'The northman', id:Math.random(), description:'Adventure/Action',posterURL:'/film2.jpg',rating:3.7},
                                    // {title:'Les secrets de Dumbledore', id:Math.random(),description:'Adventure/Fantasy movie',posterURL:'/film6.jpg',rating:3.2},
                                    // {title:'Jurassic World', id:Math.random(), description:'Science fiction',posterURL:'/film7.jpg',rating:5}
 const [titleF, setTitleF] = useState("");
 const [ratingF,setRatingF] = useState(5)
  return (
    <div> 
      <NavMovie/>
      {/* <br/>
      <MovieAdd setMovies={setMovies} movies={movies}/>
      <br/>
      <h5 className ='hed'>sharing a few of our favourite movies</h5>
      <br/>
      <MovieFilter setTitleF={setTitleF} setRatingF={setRatingF} titleF={titleF} ratingF={ratingF}/>
      <br/>
      <br/>
       <MovieList movies={movies} setMovies={setMovies} titleF={titleF} ratingF={ratingF} /> */}
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Movies' element={<MovieList movies={movies} setMovies={setMovies} titleF={titleF} ratingF={ratingF} setTitleF={setTitleF} setRatingF={setRatingF}/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/Movies/:id' element={<DescriptionMovie movies={movies}/>}/>
      </Routes>
    </div>
  );
}

export default App;
