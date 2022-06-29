import { Counter } from './Counter';

// defined the component- logic+view 
function Message(props) {
  // const name = props.name
  // const name ="divyashree ";
  return (
    <div>
      <img className='profile-pic' src={props.pic} alt={props.name}></img>
      <h1>Hello, {props.name} 👍 😎 ❤️</h1>
      <Counter />
    </div>

  );
}
