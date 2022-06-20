import logo from './logo.svg';
import './App.css';

function App() {
  // js starts
  // const name = "Divyashree ";
  // const time =30;
  // js ends
  // jsx starts
  // DRY -Don't Repeat Yourself
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
    {/* <Message
      name= "Mayuri" 
      pic= "https://2.bp.blogspot.com/-PFvDOnT0qE8/UhM_tKDGzFI/AAAAAAAAEXo/KJE_-RYhJuk/s1600/6.jpg"
    />
    <Message
      name= "Abhay" 
      pic= "https://i.pinimg.com/originals/fa/94/18/fa94180586f12b800bee88f5fad29cf7.jpg"
      
    />
    <Message
      name= "Netravathi" 
      pic="https://www.attitudestatus.org/wp-content/uploads/2021/05/Attitude-girl-with-Sun-glasses-dp.jpg"
    />   */}

    
      {/* components + Loop */}
    {students.map((student)=>(
       <Welcome name={student.name} pic={student.pic} />
    ))}

    {/* {names.map((nm)=>(
       <Welcome name={nm}/>
    ))} */}

    </div>

  );
  // jsx ends
}

export default App;

// create component
// function => component
// 1)first letter capital
// 2)it should one only jsx element
// props => properties - pass aruguments to components

function Welcome(props){
  
  return (
  <div>
    <img className='profile-pic' src={props.pic} alt={props.name} ></img>
    <h1>Hello, {props.name} 👍 😎 ❤️</h1>
  </div>
  
  )
}

// defined the component- logic+view 

function Message(props){
  
  // const name= "Divyashree";
  return (
  <div>
    <img className='profile-pic' src={props.pic} alt={props.name} ></img>
    <h1>Hello, {props.name} 👍 😎 ❤️</h1>
  </div>
  
  )
}





// <> </>  => react fragment - helps in styling & performance
// {} =>template syntax
// jsx =>javascript
// className 

// webpack + babel

// jsx => js
// className
// class - keyword */}
