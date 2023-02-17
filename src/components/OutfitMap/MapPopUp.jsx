import { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const MapPopUp = ({ coordinates, outfit, handleDeleteOutfit, handleUpdateOutfit }) => {

    const [updatedOutfit, setUpdatedOutfit] = useState("")

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/outfits/${outfit.id}`,{
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: updatedOutfit}),
        })
        .then((r) => r.json())
        .then((updatedOutfit) => {
            handleUpdateOutfit(updatedOutfit);
        });
    }

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
            <form onSubmit={handleUpdateSubmit}>
                <input 
                    type="name"
                    placeholder="New outfit name..."
                    value={updatedOutfit}
                    onChange={(e) => setUpdatedOutfit(e.target.value)}
                />
                <button type="submit">Update Outfit Name</button>
            </form>
        </Popup>
    </Marker>
    )
}
export default MapPopUp