import Stopwatch from "../components/Stopwatch";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { v4 as uuidv4 } from 'uuid';
import { IconButton } from '@mui/material';
import { useState } from "react";
import Typography from '@mui/material/Typography';

const Section = () => {

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

      <div>
        <Typography variant="body1" >
          Add more StopWatches
        </Typography>
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