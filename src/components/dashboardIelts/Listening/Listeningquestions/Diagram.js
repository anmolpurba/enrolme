import {React,useState} from 'react'

function Diagram(props) {
    // arr to store number of inputs required for diagram question
    // const diagramInput = [];
    // function inp(sr){
    //     for(var i=0;i<num;i++){
    //         diagramInput.push( <div> <span style={{backgroundColor:"#327846",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{sr++}</span> <input type="text" style={{display:"block",margin:"0.6rem",display:"inline"}} /> </div>);
    //     }
    // }
    const [mcq, Setmcq] = useState("")
  return (
    <div>
        { props.image &&  <img src={props.image} alt="" />}
        <p> <span style={{backgroundColor:"#32b3c7",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{props.sr}</span> 
        <select style={{marginLeft:"1rem"}}  value={mcq} onChange={e => Setmcq(e.target.value)}>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
            <option value="d">D</option>
        </select>
        </p>
        {/* <input  style={{margin:"0.2rem"}} type="text" /> */}
        {/* {diagramInput.map((ele)=>{return ele})} */}
    </div>
  )
}

export default Diagram