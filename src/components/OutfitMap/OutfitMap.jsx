import './OutfitMap.scss'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const center = [40.705329, -74.013969]   

const OutfitMap = () => {
    return (
        <div className='map'>
            <h2 id="findoutfit">Find your OutFit:</h2>
            <MapContainer center={center} zoom={14} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            </MapContainer>

<div>
            <div id='form-div'>
      <form id='outfit-form'>
        <div className='inputs-div'>
        <input
          className='form-input'
          type="text"
          name="name"
          placeholder="Outfit name"
        />
         <input
          className='form-input'
          type="text"
          name="name"
          placeholder="Latitude"
        />
        <input
         className='form-input'
          type="text"
          name="name"
          placeholder="Longitude"
        />
        </div>
        <div>
        <button id='form-btn' type="save">Save Outfit</button>
        </div>
        <p href="#">Don't have an account? Sign In</p>
      </form>

      
  <div className="drops">
    <div className="drop drop-1"></div>
    <div className="drop drop-2"></div>
    <div className="drop drop-3"></div>
    <div className="drop drop-4"></div>
    <div className="drop drop-5"></div>
  </div>
    </div>
  </div>


        </div>
    )
}

export default OutfitMap