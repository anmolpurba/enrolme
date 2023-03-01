import React from 'react'

function Summary(props) {
  return (
    <div>
        <p>{props.questionText}</p>
        <input style={{display:"block"}} type="text" />
        <input style={{display:"block"}} type="text" />
        <input style={{display:"block"}} type="text" />
        <input style={{display:"block"}} type="text" />

    </div>
  )
}

export default Summary