import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './layout/Header';
import Section from './layout/Section';
import './index.css';
import { create } from 'zustand'

export const allStates = create((set) => ({
  darkMode: false,
  english: true,
  setMode: () => set(state => ({darkMode: !state.darkMode})),
  setLanguages: () => set(state => ({english: !state.english}))
}))

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <main className='mainContainer'>
      <Header />
      <Section />
    </main>
  </>
)