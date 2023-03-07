import React from 'react'

function Summary(props) {
    // arr to store number of inputs required for diagram question
    // const summaryInput = [];
    // function inp(num,sr){
    //     for(var i=0;i<num;i++){
    //         summaryInput.push(<div> <span style={{backgroundColor:"#327846",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{sr++}</span> <input type="text" style={{display:"block",marginBottom:"0.6rem",display:"inline"}} /> </div>);
    //     }
    // }
  return (
    <div>
        <p>{props.questionText} <span style={{backgroundColor:"#327846",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{props.sr}</span> <input  style={{margin:"0.2rem"}} type="text" /> </p>

    </div>
  )
}

export default Summary