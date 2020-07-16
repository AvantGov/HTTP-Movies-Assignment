import React, { useState } from 'react';
import axios from 'axios';

const AddForm = (event) => {

    const stars = ['Kurt Russell', 'Bill Paxton', 'Sam Elliot']
    const [ userInput, setUserInput ] = useState({})

    const handleChange = (event) => {
        event.preventDefault()
        setUserInput({
            ...userInput,
            [event.target.name]: event.target.value
        })
        console.log(userInput)
    }

    const handleSubmit = (event) =>  {
        event.preventDefault()
        setUserInput({
            ...userInput,
            stars: stars
        })
        axios.post(`http://localhost:5000/api/movies`, userInput)
            .then((response) => {
                console.log(response)
                // window.location.assign('/')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return(
        <div className='add-form-container'>
        <label className='add-form-container__label' htmlFor='tite'>Title</label>
        <input
            className='add-form-container__input'
            // value=()
            onChange={handleChange}
            name='title'
        />
        <label className='add-form-container__label' htmlFor='tite'>Director</label>
        <input
            className='add-form-container__input'
            // value=()
            onChange={handleChange}
            name='director'
        />
        <label className='add-form-container__label' htmlFor='tite'>Metascore</label>
        <input
            className='add-form-container__input'
            // value=()
            onChange={handleChange}
            name='metascore'
        />
        <button 
            className='add-form-container__button'
            onClick={handleSubmit}
        >New Title!</button>
        </div>
    )
}

export default AddForm;