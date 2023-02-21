import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <main className='mainContainer'>
      <header className='header'>
        <p>TIMER and STOPWATCH</p>
      </header>

      <section className='innerContainer'>
        
        
        <div className='testeContainer'>
          <header>
            <h3>TIMER</h3>
          </header>
          <Divider />
          <div className='textInputDiv'>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </div>
          <div className='buttons'>
            <Button variant="outlined">start</Button>
            <Button variant="outlined">reset</Button>
          </div>
          <div className='buttonSound'>
            <Button variant="outlined">sound: on</Button>
          </div>
        </div>


        <div className='testeContainer'>
          <header> 
            <h3>STOPWATCH</h3>
          </header>
          <Divider />
          <div className='textInputDiv'>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </div>
          <div className='buttons'>
            <Button variant="outlined">start</Button>
            <Button variant="outlined">reset</Button>
          </div>
        </div>
      </section>
    </main>
  </>
)
