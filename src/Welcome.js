//1)  named import/exports -preffered-multiple exports
// 2) default import/exports - only one export for file

// object destructuring
// named export
export function Welcome(props){  
  
    return (
    <div>
      <img className='profile-pic' src={props.pic} alt={props.name} ></img>
      <h1>Hello, {props.name} 👍 😎 ❤️</h1>
    </div>
    
    )
  }
  
export const double =(n)=>  n*2;

// End of the file
// export{Welcome, double}

// default export
// export default Welcome;