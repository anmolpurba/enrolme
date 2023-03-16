import {React,useState,useEffect} from 'react'
import Axios from "axios"
import QuestionsListening from './Listeningquestions/QuestionsListening';


function Listening1() {
    // to store url of audio file
    const [listen,Setlisten] = useState("");
    var link = document.location.href.split('/')[4];


    useEffect(()=>{
        
        Axios.get(`http://localhost:1337/api/listenings/${link}/?populate=*`)
        .then(response => {
            Setlisten(response.data.data.attributes.audio.data[0].attributes.url);
            console.log(response.data.data.attributes.audio.data[0].attributes.url);
        })
        .catch(error => {
            console.log('An error occurred:', error.response);
        })
    },[])


  return (
    <div>
        
        {console.log(`http://localhost:1337/${listen}`)}
        <h1 style={{display:"flex",justifyContent:"center"}}>{`LISTENING ${link}`}</h1>
        <div className="container" style={{display:"flex",justifyContent:"center"}}>
            <audio style={{width:"70%"}}
                controls
                src={`http://localhost:1337${listen}`}>
            </audio>
        </div>
        {/* questionsListening */}
        <div>
            <QuestionsListening />
        </div>
        
    </div>
  )
}

export default Listening1