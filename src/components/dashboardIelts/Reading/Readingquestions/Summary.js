import React from 'react'

function Summary(props) {
    // arr to store number of inputs required for diagram question
    const summaryInput = [];
    function inp(num){
        for(var i=0;i<num;i++){
            summaryInput.push(<input type="text" style={{display:"block"}} />);
        }
    }
  return (
    <div>
        <p>{props.questionText}</p>
        {inp(props.summaryInput)}
        {summaryInput.map((ele)=>{return ele})}

    </div>
  )
}

export default Summary