import {React,useState} from 'react'
import Select, { components } from 'react-select'
import ReactMarkdown from "react-markdown"
// var createReactClass = require('create-react-class');


function ChooseCorrect(props) {
  const options = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
    { value: 'D', label: 'D' }
  ]

  const [mcq, Setmcq] = useState("")
  let markdown = props.questionText

  return (
    <div>
        <p> 
          <ReactMarkdown children={markdown} />
          <label> Choose Your Response :    
          <span style={{backgroundColor:"#32b3c7",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{props.sr}</span> 
            <select className='userInput' id={props.sr} style={{marginLeft:"1rem"}}  value={mcq} onChange={e => Setmcq(e.target.value)}>
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
              <option value="d">D</option>
            </select>
          </label>
        </p> 
        
    </div>
  )
}

export default ChooseCorrect