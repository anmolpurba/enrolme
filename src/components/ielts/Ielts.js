import React from 'react'
import "./Ielts.css"
import Ieltscard from './Ieltscard'

function Ielts() {
  return (
    <div>
        <div className="container div" style={{justifyConent:"center"}}>
            <h1>Courses We Offer</h1>
        </div>
        <Ieltscard />
    </div>
  )
}

export default Ielts