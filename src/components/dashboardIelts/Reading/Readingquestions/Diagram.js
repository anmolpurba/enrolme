import React from 'react'

function Diagram(props) {
  return (
    <div>
        <img src={props.image} alt="" />
        <input type="text" style={{display:"block"}} />
        <input type="text" style={{display:"block"}} />
        <input type="text" style={{display:"block"}} />
        <input type="text" style={{display:"block"}} />
    </div>
  )
}

export default Diagram