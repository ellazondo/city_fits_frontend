/*import './OutfitForm.scss'
import { useState } from "react"

const OutfitForm = () => {
    
        const initialValues =  {
            title: "title",
            description: "description"
        }
    
        const [formData, setFormData] = useState(initialValues)
    
        const { title, description } = formData
    
        const handleOnChange = (event) => {
            const {title, value } = event.target
            setFormData(formData => ({...formData, [title]: value}))
        }
    
        const handleSubmit = (event) => {
            event.preventDefault()
            addNewOutfit(formData)
            setFormData(initialValues)
        }
    
        return (
    <div>
        <h2 className="formtitle">New OutFit:</h2>
        <form className="new-outfit" onSubmit={handleSubmit}>
            <input className="input-one"
                type="text"
                placeholder="name"
                title='title'
                onChange={handleOnChange}
            />
    
            <input className="input-two"
                type="text"
                placeholder="description"
                title='location'
                onChange={handleOnChange}
            />
            <button className="formbutton">Save</button>
        </form>
    </div>
    
    )
    }
    
    
}
    
export default OutfitForm*/
