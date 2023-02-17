import { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const MapPopUp = ({ coordinates, outfit, handleDeleteOutfit }) => {
    const handleDeleteClick = async () => {
        fetch(`http://localhost:3000/outfits/${outfit.id}`,{
        method: "DELETE",
        });
        handleDeleteOutfit(outfit.id);
    }
return (
    <Marker position={coordinates}>
        <Popup>
            <h3>{outfit.name}</h3>
            <button onClick={handleDeleteClick}>delete</button>
        </Popup>
    </Marker>
    )
}
export default MapPopUp