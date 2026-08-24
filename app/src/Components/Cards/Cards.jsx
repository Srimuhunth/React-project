import React from 'react'
import './Cards.css'

function Cards(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.id}</p>
    </div>
  )
}


export default Cards