import { useState } from 'react';
import { ColorBox } from './ColorBox';

export function AddColor() {
  const [color, setColor] = useState("deepskyblue");
  const styles = {
    backgroundColor: color,
  };
  const INITIAL_COLOR_LIST = ["deepskyblue", "crimson", "violet", "purple"];
  const [colorList, setcolorList] = useState(INITIAL_COLOR_LIST);
  return (

    <div>
      <input value={color} onChange={(event) => setColor(event.target.value)} style={styles} placeholder='Enter a color'></input>

      <button onClick={() => setcolorList([...colorList, color])}>AddColor</button>

      {colorList.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}

    </div>
  );

}
