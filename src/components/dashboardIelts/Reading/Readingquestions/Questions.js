import React from 'react'

function Questions() {

    const obj = 
    {
        "id": 1,
        "attributes": {
            "heading": "Complete the sentences below. Choose NO MORE THAN THREE WORDS from the passage for each answer.",
            "questionText": "2) Ancient Egyptians worked as both $$",
            "questionType": "blanks",
            "answer": "craftsmen and artists",
        }
    }
  return (
    <div>
        {obj.attributes.questionType==="blanks"?obj.attributes.questionText:"aukha"}
    </div>
  )
}

export default Questions