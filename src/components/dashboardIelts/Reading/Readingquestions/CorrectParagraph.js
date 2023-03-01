import React from 'react'

function CorrectParagraph(props) {
  return (
    <div>
        <p>{props.questionText} <input type="text" /></p>
    </div>
  )
}

export default CorrectParagraph