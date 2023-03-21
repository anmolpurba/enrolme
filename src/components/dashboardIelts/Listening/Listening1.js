import {React,useState,useEffect} from 'react'
import Axios from "axios"
import QuestionsListening from './Listeningquestions/QuestionsListening';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "./Listening1.css"



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
        <div style={{display:"flex",justifyContent:"center"}}>
            <AudioPlayer
                style={{backgroundColor:"#d6f0f4",border:"1px solid #32b3c7",width:"60%"}}
                src={`http://localhost:1337${listen}`}
            />
        </div>

        {/* questionsListening */}
        <div className='container'>
            <QuestionsListening />
        </div>
        
    </div>
  )
}

export default Listening1