import {React,useState} from 'react'
import Select from 'react-select'
import ReactMarkdown from "react-markdown"

function ChooseCorrect(props) {
  const options = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
    { value: 'D', label: 'D' }
  ]

  const [mcq, Setmcq] = useState("")
  const markdown = props.questionText

  return (
    <div>
        <p> <span style={{backgroundColor:"#32b3c7",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{props.sr}</span> 
          <ReactMarkdown children={markdown} />
          {/* {props.questionText}  */}
          <select style={{marginLeft:"1rem"}}  value={mcq} onChange={e => Setmcq(e.target.value)}>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
            <option value="d">D</option>
          </select>
        </p> 
        
    </div>
  )
}

export default ChooseCorrect