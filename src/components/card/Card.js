import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div class="container col-md-4">
        <div class="card">
        
        <img src={props.gif} class="card-img-top img" />
        
        <div class="card-body">
            
            <center>
            <h5 class="card-title">{props.title}</h5>
            </center>
            
            <p class="card-text">{props.descr}</p>
        </div>
        </div>
    </div>
  )
}

export default Card