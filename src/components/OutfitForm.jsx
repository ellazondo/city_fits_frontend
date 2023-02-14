import './OutfitForm.scss'
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
            addNewRedFlag(formData)
            setFormData(initialValues)
        }
    
        return (
    <div>
        <h2 className="formtitle">Add your Red Flag:</h2>
        <form className="new-redflag" onSubmit={handleSubmit}>
            <input className="input-one"
                type="text"
                placeholder="title"
                title='title'
                onChange={handleOnChange}
            />
    
            <input className="input-two"
                type="text"
                placeholder="description"
                title='description'
                onChange={handleOnChange}
            />
            <button className="formbutton">Add</button>
        </form>
    </div>
    
    )
    }
    
    
}
    
export default OutfitForm
    
