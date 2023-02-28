import {React,useState,useEffect} from 'react'
import Axios from "axios"

function Blanks(props) {

  return (
    <div>
        <p>{props.questionText} <input type="text" /></p>
    </div>
  )
}

export default Blanks