import './navbar.scss'

const Navbar = () => {
    return (
      <div className="navbar">
        <div class="title">
        <h1>CityFits</h1>
      </div>
      <div className='nav-div'>
        <h1 className='nav-title'>About</h1>
      </div>
      <div className='nav-div'>
        <h1 className='nav-title'>OutFit Creator</h1>
      </div>
      <div className='nav-div'>
        <h1 className='nav-title'>OutFit Map</h1>
      </div>
      <div className='nav-div'>
        <h1 className='nav-title'>LogIn</h1>
      </div>
    </div>
    )
}

export default Navbar