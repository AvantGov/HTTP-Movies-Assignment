//importing dependencies 
import React, { useState } from 'react';
import axios from 'axios';


//component 
const UpdateForm = (props) => {

    console.log('props from updateform', props)

    const [ userInput, setUserInput] = useState({})

    const handleChange = (event) =>  {
        event.preventDefault()
        setUserInput({
            ...userInput,
            id: props.identification,
            [event.target.name]: event.target.value
        })
        console.log(userInput)
    }

    const handleSubmit = (event) =>  {
        event.preventDefault();
        console.log('look here:', props)
        axios.put(`http://localhost:5000/api/movies/${props.identification}`, userInput)
        .then((response) => {
            console.log(response)
            window.location.assign('/')
        })
        .catch((error) => {
            console.log(error)
        })
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
            <button 
                className='update-form-container__button'
                onClick={handleSubmit}
            >New Title!</button>
        </div>
    )
}

export default UpdateForm;