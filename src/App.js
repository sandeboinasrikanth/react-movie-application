import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Welcome, double} from './Welcome' //named imports
// import {Welcome} from './Welcome'  //default imports
// console.log(double(20));

function App() {
  
  const movieList =[
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

  const names = ["Mayuri","Abhay","Netravathi","Kavya"]

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

    {/* <div className='movie-list'>
    {movieList.map((mv, index)=> (
      <Movie key={index} movie={mv} />
      ))}
    </div> */}
    <AddColor/>
    

    </div>

  );
  // jsx ends
}

export default App;


function AddColor(){
  const [color, setColor]= useState("deepskyblue")
  const styles = {
    backgroundColor: color,
  };
  const INITIAL_COLOR_LIST =["deepskyblue", "crimson" ,"violet", "purple"]
  const [colorList, setcolorList]= useState(INITIAL_COLOR_LIST);
  return (
      
    <div>
      <input value={color} onChange={(event)=>setColor(event.target.value)} style={styles} placeholder='Enter a color'></input>

      <button onClick={()=> setcolorList([...colorList, color])}>AddColor</button>

      {colorList.map((clr, index)=>(
      <ColorBox key={index} color={clr}/>
      ))}

    </div>
  )

}

function ColorBox({color}){

  const styles ={
    backgroundColor: color,
    height: "25px",
    width: "250px",
    marginTop: "5px"
  };
  return <div style={styles} ></div>
}


function Movie ({movie}){
  // rating > 8 => green
  // conditional styling
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  // conditional styling
  const [show, setShow] = useState(true);
  const parastyles = {
    display: show ? "block" : "none",
  };
 
    return(
      <div className='movie-container'>
        <img className='movie-poster' src={movie.poster} alt={movie.name} />
        <div className='movie-spec'>
          <h2 className='movie-name'>{movie.name}</h2>
          <p style={styles} className='movie-rating'> ⭐{movie.rating}</p>
        </div>

      {/* update the show value to be opposite to current value */}
          <button onClick={() => setShow(!show)}>Toggle summary</button>
          
          {/* conditional styling */}
      {/* <p style={parastyles}  className='movie-summary'>{movie.summary}</p> */}

      {/* conditional rendering */}
      {show ? <p style={parastyles} className='movie-summary'>{movie.summary}</p> : null}

      </div>
    )

} 

function Counter(){
  // let like= 10;
  const [like, setLike] =useState(0);
  const [dislike, setDislike] =useState(0);

  // onClick => all event listeners - CamelCase
  return(
    <div className='counter-cantainer'>
      <button className='like-button' onClick={() => setLike(like+1)}>👍{like}</button>
      <button  className='dislike-button' onClick={() => setDislike(dislike+1)}>👎{dislike}</button>
    </div>
  )
}


// defined the component- logic+view 

function Message(props){
  // const name = props.name
  // const name ="divyashree ";
  return (
  <div>
    <img className='profile-pic' src={props.pic} alt={props.name} ></img>
    <h1>Hello, {props.name} 👍 😎 ❤️</h1>
    <Counter/>
  </div>
  
  )
}











// js starts
  // const name = "Divyashree ";
  // const time =30;
  // js ends
  // jsx starts
  // DRY -Don't Repeat Yourself


// create component
// function => component
// 1)first letter capital
// 2)it should one only jsx element
// props => properties - pass aruguments to components



// hook - make react listen change
// hook - function -"use" - useState
// const [State, setState ] = useState(IntialValue);
// state - currentValue
// setState - function - Update State - informing that the react is changed


// <> </>  => react fragment - helps in styling & performance
// {} =>template syntax
// jsx =>javascript XML 
// className 

// webpack + babel

// jsx => js
// className
// class - keyword */}
