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
        </div>
    )
}

export default OutfitMap