
import './App.css';
import Navbar from './components/NavBar/Navbar';
import OutfitCreator from './components/OutfitCreator/OutfitCreator';
import OutfitForm from './components/OutfitForm/OutfitForm';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Routes will go there, but we should do this at the end.
function App() {
  return (
    <div>
      <Navbar />
      <OutfitCreator />
    </div>
  )
}

// We passed entire components for now.
export default App;
