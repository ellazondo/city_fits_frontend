import './OutfitMap.scss'
import { useState, useEffect, useCallback } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MapPopUp from './MapPopUp.jsx';

// center = center of the map
const center = [40.705329, -74.013969]   

const OutfitMap = () => {

    // state to set outfits
    const [outfits, setOutfits] = useState([]);

    
    useEffect(() => {
        const fetchOutfits = async () => {
            let res = await fetch("http://localhost:3000/outfits")
            let outfits = await res.json();
            setOutfits(outfits);
        };
        fetchOutfits();
    }, [])

    const renderOutfitList = outfits.map((outfit) => {
        return (
            <div classname='outfit' >
                <ul>{outfit.name}</ul>
            </div>
        )
    })


    // create new object to add to combos array
    const newOutfit = {
        name: "",
        latitude: null,
        longitude: null,    
        user_id: 1
        }

    // state to pass new object into
    const [formData, setFormData] = useState(newOutfit)


    // handleChange to take user imput
    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData({...formData, [name]: value})
    }

    // onSubmit: method to add form data to 
    const onAddNewOutfit = (newOutfit) => {
        setOutfits((outfits) => [...outfits, newOutfit])
    }


    // post method to pass through fetch
    const objPost = {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
      },
        body:JSON.stringify(formData)
    }

    const postNewOutfit = async () => {
        fetch("http://localhost:3000/outfits",objPost)
        .then(r => r.json())
        .then((newOutfit) => onAddNewOutfit(newOutfit))
    }



    return (
        <div className='map'>
            <h2 id="findoutfit">Find your OutFit:</h2>
            <MapContainer center={center} zoom={14} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                <Marker position={[40.70537726572433, -74.0138610846558]}>
                    <Popup>
                    hello 
                    </Popup>
                </Marker>
                {/* {renderOutfitPopUp} */}
            </MapContainer>

            <div className='outfit-list'>
            <h2 id="findoutfit">All OutFits:</h2>
                {renderOutfitList}
            </div>
            

        <form id='outfit-form' onSubmit={postNewOutfit}>
            <div className='inputs-div'>
                <input
                className='form-input'
                type="text"
                name="name"
                placeholder="Outfit name"
                onChange={handleChange}
                />
                <input
                className='form-input'
                type="text"
                name="latitude"
                placeholder="Latitude"
                onChange={handleChange}
                />
                <input
                className='form-input'
                type="text"
                name="longitude"
                placeholder="Longitude"
                onChange={handleChange}
                />
            </div>
            <div>
                <button id='form-btn' type="save">Save Outfit</button>
            </div>
        </form>

        </div>
    )
}

export default OutfitMap
