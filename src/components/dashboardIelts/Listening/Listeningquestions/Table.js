import React from 'react'
import ReactMarkdown from "react-markdown"


function Table(props) {
  const markdown = props.questionText
  return (
    <div>
        <p>
        <ReactMarkdown children={markdown} />
        <span style={{backgroundColor:"#32b3c7",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{props.sr}</span> 
        <input  style={{margin:"0.2rem"}} type="text" /> 
        </p>
    </div>
  )
}

export default Table