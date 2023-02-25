import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './layout/Header';
import Section from './layout/Section';

ReactDOM.createRoot(document.getElementById('root')).render(
  <> 
    <main className='mainContainer'>
      <Header />
      <Section />
    </main>
  </>
)

/*
main (blue)
  header (yellow)
  section
    div (blue)          -> main Stopwatch
    div (greenyellow)   -> list of Stopwatches
    div                 -> button to add Stopwatch


*/