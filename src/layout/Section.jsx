import Stopwatch from "../components/Stopwatch";
import StopWatchElement from "../components/StopWatchElement";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { v4 as uuidv4 } from 'uuid';
import { IconButton } from '@mui/material';
import { useState } from "react";

const Section = () => {

  let initialList = []
  const [list, setList] = useState(initialList);

  const handleAdd = () => {
    const newList = list.concat({id: uuidv4(), element: <StopWatchElement key={list.length} />});
    setList(newList);
  }

  const handleRemove = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }
  
  return (
    <section className='innerContainer'>
      <Stopwatch />

        <div className="listOfStopWatches">
          <ul>
            {list.map((item) => (
              <li className='liss' 
                key={item.id}>
                  {item.element}
                  <IconButton
                    onClick={() => {handleRemove(item.id)}}
                    aria-label="RemoveCircleOutlineOutlinedIcon">
                      <RemoveCircleOutlineOutlinedIcon 
                        fontSize="small"
                        sx={[{'&:hover': {color: 'red',},},]}
                      />
                  </IconButton>
              </li> 
            ))}
          </ul>
        </div>

        <div>
          <p>Add more StopWatches</p>
          <IconButton
            onClick={handleAdd}
            aria-label="AddCircleOutlineOutlinedIcon">
            <AddCircleOutlineOutlinedIcon 
              fontSize='large' 
              sx={[{'&:hover': {color: 'green',},},]}
            />
          </IconButton>
        </div>

    </section>
  )
}

export default Section;