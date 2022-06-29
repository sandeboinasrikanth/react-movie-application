import logo from './logo.svg';
import './App.css';
import {Welcome, double} from './Welcome'; //named imports
// import {Welcome} from './Welcome'  //default imports
// console.log(double(20));
import { AddColor } from './AddColor';
import { Counter }  from './Counter';
import { ColorBox} from './ColorBox';
import {Message} from './Message';
import { Movie } from './Movie';
import { useState } from 'react';
import { Routes, Route, Link, Navigate} from "react-router-dom";





function App() {
  
  const students =[
    {
      name: "Mayuri" ,
      pic: 'https://2.bp.blogspot.com/-PFvDOnT0qE8/UhM_tKDGzFI/AAAAAAAAEXo/KJE_-RYhJuk/s1600/6.jpg'
    },
    {
      name: "Abhay" ,
      pic: 'https://www.attitudestatus.org/wp-content/uploads/2021/05/Attitude-girl-with-Sun-glasses-dp.jpg'
      
    },
    
    {
      name: "Netravathi" ,
      pic: 'https://dp.profilepics.in/profile_pictures/dashing_boys/dashing_boys_profile_pictures_dashing_dps_333.jpg'
    },

    {
      name: "Kavya" ,
      pic: 'https://i.pinimg.com/originals/fa/94/18/fa94180586f12b800bee88f5fad29cf7.jpg'
    }
  ]

  const names = ["Mayuri","Abhay","Netravathi","Kavya"]
  
  const INITIAL_MOVIE_LIST =[
    {
    name: "RRR",
    poster:
    "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    rating: 8.8,
    summary:
    "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    
    },
    {
    name: "Iron man 2",
    poster:
    "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 7,
    summary:
    "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    
    },
    {
    name: "No Country for Old Men",
    poster:
    "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    rating: 8.1,
    summary:
    "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    
    },
    {
    name: "Jai Bhim",
    poster:
    "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    summary:
    "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    rating: 8.8,
    
    },
    {
    name: "The Avengers",
    rating: 8,
    summary:
    "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    poster:
    "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    
    },
    {
    name: "Interstellar",
    poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    rating: 8.6,
    summary:
    "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    
    },
    {
    name: "Baahubali",
    poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    rating: 8,
    summary:
    "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    
    },
    {
    name: "Ratatouille",
    poster:
    "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    rating: 8,
    summary:
    "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    
    }
    ];
  
  const [movieList, setMovieList]= useState(INITIAL_MOVIE_LIST)

  
  return (
    <div className="App">
    {/* components + Loop */}

    {/* {students.map((student)=>(
       <Message name={student.name} pic={student.pic} />
    ))}  */}

    {/* {names.map((nm)=>(
       <Welcome name={nm}/>
    ))} */}
    {/* <Movie/> */}

    <nav >
      <ul>
        <li>
          <Link to ='/' >Home</Link >
        </li>
        <li>
          <Link to ='/color-game' >Color Game</Link >
        </li>
        <li>
          <Link to ='/movies' >Movies</Link >
        </li>
      </ul>
    </nav>

    <Routes >
        <Route path="/" element={<Home />} />
        <Route path="color-game" element={<AddColor />} />
        <Route path="movies" element={<MovieList movieList={movieList} setMovieList={setMovieList} />} />

        <Route path="/movies/:id" element={<MovieDetails/>} />

        <Route path="/films" element={<Navigate replace to ="/movies"/>} />

        <Route path="/404" element={<NotFound />} />
        {/* 404  */}
        <Route path="*" element={<Navigate replace to ="/404"/>} />

    </Routes>
    

    {/* <MovieList movieList={movieList} setMovieList={setMovieList} /> */}
    {/* <Welcome name={vishal}/> */}
    {/* <AddColor/> */}
    

    </div>

  );
  // jsx ends
}

function MovieDetails(){
  return <p>Movie details page</p>
}

function NotFound(){
  return <div>
    <img src='https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif'
     alt='404 not found'  className='not-found'  />
  </div>
}

function Home(){
  return <h1>Welcome to the Movie App 👍❤️</h1>;
}

export default App;

function MovieList({movieList, setMovieList}){
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating]= useState("");
  const [summary, setSummary]= useState("");

  const addMovie=()=> {
    const newMovie={
      name: name,
      poster:poster,
      rating:rating,
      summary:summary,
    } 
    // console.log(newMovie)
    // copy the MovieList & add the newMovie 
    setMovieList([...movieList, newMovie])
    }


  return(
    <div>
      <div className='add-movie-form'>
        <input placeholder='Name' onChange={(event)=>setName(event.target.value)}/>
        <input placeholder='Poster' onChange={(event)=>setPoster(event.target.value)}/>
        <input placeholder='Rating' onChange={(event)=>setRating(event.target.value)}/>
        <input placeholder='Summary' onChange={(event)=>setSummary(event.target.value)}/>

        {/* <p>name: {name}</p>
        <p>poster: {poster}</p>
        <p>rating: {rating}</p>
        <p>summary: {summary}</p> */}
      
        {/* // copy the MovieList & add the newMovie in console*/}
        <button onClick={ addMovie}>Add Movie</button>

      </div>
      <div className='movie-list'>
        {movieList.map((mv, index)=> (
        <Movie key={index} movie={mv} />
      ))}
      </div>
    </div>
  )

}

