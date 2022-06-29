import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export function Movie({ movie, id}) {
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

  const navigate = useNavigate();

  return (
    <div className='movie-container'>
      <img className='movie-poster' src={movie.poster} alt={movie.name} />
      <div className='movie-spec'>
        <h2 className='movie-name'>{movie.name}</h2>
        <p style={styles} className='movie-rating'> ⭐{movie.rating}</p>
      </div>

      {/* update the show value to be opposite to current value */}
      <button onClick={() => setShow(!show)}>Toggle summary</button>
      {/* <Link to ={`/movies/${id}`}>Info</Link> */}
      <button onClick={()=> navigate(`/movies/${id}`)}>Info</button>


      {/* conditional styling */}
      {/* <p style={parastyles}  className='movie-summary'>{movie.summary}</p> */}

      {/* conditional rendering */}
      {show ? <p style={parastyles} className='movie-summary'>{movie.summary}</p> : null}

    </div>
  );

}
