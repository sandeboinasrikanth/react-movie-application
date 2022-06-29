import { useState } from 'react';

export function Counter() {
  // let like= 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const incrementLike = () => setLike(like + 1);
  const incrementDisLike = () => setLike(dislike + 1);


  // onClick => all event listeners - CamelCase
  return (
    <div className='counter-cantainer'>
      <button className='like-button' onClick={incrementLike}>👍{like}</button>
      <button className='dislike-button' onClick={incrementDisLike}>👎{dislike}</button>
    </div>
  );
}
