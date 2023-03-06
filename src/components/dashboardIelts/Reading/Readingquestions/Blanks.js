import {React,useState,useEffect} from 'react'
import Axios from "axios"

function Blanks(props) {

  return (
    <>
        <p> <span style={{backgroundColor:"#327846",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{props.sr}</span> {props.questionText} <input  style={{margin:"0.2rem"}} type="text" /></p>
    </>
  )
}

export default Blanks