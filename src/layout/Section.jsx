import Stopwatch from "../components/Stopwatch";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import Typography from '@mui/material/Typography';
import { allStates } from '../main'
import { stopwatchButtonStyle } from "../components/Stopwatch";
import { buttonStyle } from "./Header";

const Section = () => {

  const english = allStates((state) => state.english)

  let initialList = []
  const [list, setList] = useState(initialList);

  const handleAdd = () => {
    const newList = list.concat({
      id: uuidv4(), 
      element:
        <div className='stopwatch-item'>
          <Stopwatch element={true} key={list.length} />
        </div>
      });
    setList(newList);
  }

  const handleRemove = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }
  
  return (
    <section>

      <div className='stopwatch-main'>
        <Stopwatch element={false}/>
      </div>

      <ul>
        {list.map((item) => (
          <li className='liss' 
            key={item.id}>
              {item.element}

              <div className='stopwatch-item'>
                <button 
                  onClick={() => {handleRemove(item.id)}} 
                  style={stopwatchButtonStyle}>
                    {english ? "remove" : "remover"}
                </button>
              </div>
          </li> 
        ))}
      </ul>

      <div>
        <button style={buttonStyle} onClick={handleAdd}>
          <Typography variant='body1' sx={[{color: '#BB86FC',},]}>
            {english ? "Add more stopwatches" : "Adicione mais cronômetros"}
          </Typography>
        </button>
      </div>

    </section>
  )
}

export default Section;