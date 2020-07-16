import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UpdateForm from '../Movies/UpdateForm'
import axios from 'axios';

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;

  console.log('props from movie card:',props)

  const [ isEditing, setIsEditing ] = useState(false);
  

  const showForm = (event) => {
    event.preventDefault()  
    console.log('props from moviecard: show', props.movie)
    setIsEditing(true)
  }


  const deleteItem = (event) => {
    event.preventDefault()
    axios.delete(`http://localhost:5000/api/movies/${props.movie.id}`, {id: props.movie.id})
      .then((response) => {
        console.log('deletion response:',response)
      })
      .catch((error) => {
        console.log('deletion error:', error)
      })
    window.location.reload(false)

  }

  return (
    <div className="movie-card">
      {isEditing 
        ? <UpdateForm identification={props.movie.id} />
        : <Link key={props.movie.id} to={`/movies/${props.movie.id}`}><h2>{title}</h2></Link>
      }
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>
      
      <button 
        className='movie__edit-button'
        // value={}
        onClick={showForm}
      >Edit Title</button>
      <button 
        className='movie__delete-button'
        // value={}
        onClick={deleteItem}
      >Delete Movie</button>
      
      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
