import React from 'react'

function Summary(props) {
  return (
    <div>
        <p>{props.questionText} <span style={{backgroundColor:"#32b3c7",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{props.sr}</span> <input  style={{margin:"0.2rem"}} type="text" /> </p>

    </div>
  )
}

export default Summary