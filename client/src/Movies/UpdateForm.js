//importing dependencies 
import React, { useState } from 'react';


//component 
const UpdateForm = () => {

    const [ userInput, setUserInput] = useState({})

    const handleChange = (event) =>  {
        event.preventDefault()
        setUserInput({
            ...userInput,
            [event.target.name]: event.target.value
        })
        console.log(userInput)
    }


    return (
        <div className='update-form-container'>
            <label className='update-form-container__label' htmlFor='tite'>Update Title</label>
            <input
                className='update-form-container__input'
                // value=()
                onChange={handleChange}
                name='title'
            />
            <button className='update-form-container__button'>New Title!</button>
        </div>
    )
}

export default UpdateForm;