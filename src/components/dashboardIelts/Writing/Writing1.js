import {React,useEffect,useState} from 'react'
import Axios from 'axios'
import "./Writing1.css"

function Writing1() {

    var link = document.location.href.split('/')[4];
    const [writing,Setwriting] = useState("");
    const [wordcount,Setwordcount] = useState(0)



    useEffect(()=>{
        
        Axios.get(`http://localhost:1337/api/writings/${link}/?populate=*`)
        .then(response => {
            Setwriting(response.data.data.attributes);
            console.log(response.data.data.attributes);
        })
        .catch(error => {
            console.log('An error occurred:', error.response);
        })

    },[])

  return (
    <>
    <div className='row'>
        <div className="col" style={{padding:"5rem"}}>
            <h2 style={{fontSize: "32px",fontWeight:"bold",color: "#faaa5a"}}>Writing Task 1</h2>
            <p class="parawriting">You should spend about <strong>20 minutes</strong> on this task.</p>
            <p class="parawriting">{writing.questionText1}</p>
            <p class="parawriting">You should write <strong>at least 150 words.</strong></p>
            <img src={writing && `http://localhost:1337${writing.diagramImage.data[0].attributes.formats.medium.url}`} alt="" />
        </div>


        <div className="col" style={{backgroundColor:"#feeede",padding:"5rem"}}>
            <h3 className='parawriting1' >Type your essay below and click Submit for evaluation</h3>
            <div className="textArea">
                <textarea onChange={(e)=>{Setwordcount(e.target.value.split(" ").filter((temp)=>{return temp!=""}).length)}} className='textAreaAnswer'></textarea>
            </div>
            <p className='parawriting'>Words: <span className='parawriting1'>{wordcount}</span></p>
        </div>
    </div>


    <hr />


    <div className='row'>
        <div className="col" style={{padding:"5rem"}}>
            <h2 style={{fontSize: "32px",fontWeight:"bold",color: "#faaa5a"}}>Writing Task 2</h2>
            <p class="parawriting">You should spend about <strong>40 minutes</strong> on this task.</p>
            <p class="parawriting">{writing.questionText2}</p>
            <p class="parawriting">You should write <strong>at least 254 words.</strong></p>
        </div>


        <div className="col" style={{backgroundColor:"#feeede",padding:"5rem"}}>
            <h3 className='parawriting1' >Type your essay below and click Submit for evaluation</h3>
            <div className="textArea">
                <textarea onChange={(e)=>{Setwordcount(e.target.value.split(" ").filter((temp)=>{return temp!=""}).length)}} className='textAreaAnswer'></textarea>
            </div>
            <p className='parawriting'>Words: <span className='parawriting1'>{wordcount}</span></p>
        </div>
    </div>
    </>
  )
}

export default Writing1
