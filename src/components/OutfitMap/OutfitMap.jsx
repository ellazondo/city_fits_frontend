import './OutfitMap.scss'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const center = [40.705329, -74.013969]   

const OutfitMap = () => {
    return (
        <div>

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

            <h2 id="comments">Comments:</h2>
                <div>
                    <li className="comment">This OutFit is Fire!!! -- by AnaInNyc</li>
                    <li className='comment'>I need this ASAP! -- by fashionlover88</li>
                    <li className='comment'>Perfect for the occasion... -- by UWSgirl</li>
                </div>
                <div>
                    <h2 id="fakeformtitle">Add your comment:</h2>
                </div>
        </div>
    )
}

export default OutfitMap