import './navbar.scss'
import { Link } from "react-router-dom"

// This is just a regular HTML, no logic yet, but the links for the routes will go here.

const Navbar = () => {
    return (
      <div className="navbar">
        <div className="title">
        <Link id='home' to='/Home'>CityFits</Link>
        </div>
        <div className="group-links">
      <div className='nav-div'>
        <Link className='nav-title' id='outfitcreator' to='/OutfitCreator'>OutFit Creator</Link>
      </div>
      <div className='nav-div'>
        <Link  className='nav-title' id='outfitmap' to='/OutfitMap'>OutFit Map</Link>
      </div>
      <div className='nav-div'>
        <Link className='nav-title' id='login' to='/LogIn'>Log In</Link>
      </div>
      </div>
    </div>
    )
}

export default Navbar