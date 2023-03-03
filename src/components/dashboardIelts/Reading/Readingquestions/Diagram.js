import React from 'react'

function Diagram(props) {
    // arr to store number of inputs required for diagram question
    const diagramInput = [];
    function inp(num){
        for(var i=0;i<num;i++){
            diagramInput.push(<input type="text" style={{display:"block",marginBottom:"0.6rem"}} />);
        }
    }
  return (
    <div>
        <img src={props.image} alt="" />
        {inp(props.diagramInput)}
        {diagramInput.map((ele)=>{return ele})}
    </div>
  )
}

export default Diagram