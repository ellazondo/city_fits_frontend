import { useEffect, useState } from 'react'

import './App.css';
import Navbar from './components/NavBar/Navbar';
import OutfitCreator from './components/OutfitCreator/OutfitCreator';
import OutfitForm from './components/OutfitForm/OutfitForm';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import OutfitMap from './components/OutfitMap/OutfitMap';

// Routes will go there, but we should do this at the end.
function App() {

  
  return (
    <div>
      <Navbar />
      <Home />
      <OutfitCreator />
      <OutfitMap />
      <LogIn />
    </div>
  )
}

// We passed entire components for now.
export default App;
