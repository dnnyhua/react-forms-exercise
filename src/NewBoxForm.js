import { useState } from "react"

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        width: '',
        height: '',
        color: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // this will pass data up to the parent component which will update the state and re-render
        addBox({ ...formData })
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width</label>
            <input
                id="width"
                type="integer"
                name="width"
                placeholder="Box Width"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="height">Height</label>
            <input
                id="height"
                type="integer"
                name="height"
                placeholder="Box height"
                value={formData.height}
                onChange={handleChange}
            />
            <label htmlFor="color">Color</label>
            <input
                id="color"
                type="text"
                name="color"
                placeholder="Box color"
                value={formData.color}
                onChange={handleChange}
            />
            <button>Add Box</button>
        </form>
    )

}

export default NewBoxForm
