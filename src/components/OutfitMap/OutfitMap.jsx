import './OutfitMap.scss'
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
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

    // pulls up list of outfits
    const renderOutfitList = outfits.map((outfit) => {
        return (
            <div className='outfit' >
                <ul>{outfit.name}</ul>
            </div>
        )
    })

        // DELETE OUTFIT ------------------------------------------------

    const handleDeleteOutfit = (id) => {
        const updatedOutfits = outfits.filter((outfit) => outfit.id !== id);
        setOutfits(updatedOutfits);
    }
    // END OF DELETING OUTFIT ---------------------------------------
    
    const renderOutfitPopUp = outfits.map((outfit) => {
        const coordinates = [outfit.latitude, outfit.longitude]
        return (
            <MapPopUp coordinates={coordinates} outfit={outfit} handleDeleteOutfit={handleDeleteOutfit} />
        )
    })

    // CREATE NEW OUTFIT ----------------------------------------
    // create new object to add to combos array
    const newOutfit = {
        name: "",
        latitude: null,
        longitude: null,    
        user_id: 1
        }

    // state to pass newOutfit object into
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


    // fetch to post new outfit
    const handleSubmit = async () => {
        let res = await fetch("http://localhost:3000/outfits",{
        method: "POST",
        headers: {
        "Content-Type": "application/json"
      },
        body:JSON.stringify(formData)
    })
        let newFit = await res.json();
        onAddNewOutfit(newFit)
    };
    // END OF CREATING OUTFIT ---------------------------------------
    
    // UPDATE OUTFIT ------------------------------------------------

    // END OF UPDATING OUTFIT ---------------------------------------


    return (
        <div className='map'>
            <h2 id="findoutfit">Find your OutFit:</h2>
            <MapContainer center={center} zoom={14} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                {renderOutfitPopUp}
            </MapContainer>

            <div className='outfit-list'>
            <h2 id="findoutfit">All OutFits:</h2>
                {renderOutfitList}
            </div>
            

        <form id='outfit-form' onSubmit={handleSubmit}>
            <div className='inputs-div'>
                <input
                className='form-input'
                type="text"
                name="name"
                placeholder="Outfit name"
                required onChange={handleChange}
                />
                <input
                className='form-input'
                type="text"
                name="latitude"
                placeholder="Latitude"
                required onChange={handleChange}
                />
                <input
                className='form-input'
                type="text"
                name="longitude"
                placeholder="Longitude"
                required onChange={handleChange}
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
