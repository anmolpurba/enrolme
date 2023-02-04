import React from 'react'
import "./Ieltscard.css"

function Ieltscard() {
  return (
    <div className='home'>
        <div class="position-absolute top-50 start-50 translate-middle">
  
        <div class="animate__animated animate bounce card " style={{width: "18rem"}}>
            <div class="container mt-3">
            <img src="https://i.ibb.co/gRpP2Lm/icons8-online-128.png" class="card-img-top " alt="..." /></div>
            <div class="card-body">
            <h5 class="card-title ms-1">Website</h5>
            <p class="card-text mb-5 ms-1">See more bootstrap code snippets on my website</p>
        
            <a href="https://freesnippetcode.blogspot.com/" target="_blank" class="btn btn-primary mb-1 mt-1 ">Go now</a>
            </div>
        </div>
            </div>
    </div>
  )
}

export default Ieltscard