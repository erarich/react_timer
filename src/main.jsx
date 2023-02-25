import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './layout/Header';
import Section from './layout/Section';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <> 
    <main className='mainContainer'>
      <Header />
      <Section />
    </main>
  </>
)