import {React,useState,useEffect} from 'react'
import Axios from "axios"
import QuestionsListening from './Listeningquestions/QuestionsListening';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "./Listening1.css"
import ReactCountdownClock from "react-countdown-clock"



function Listening1() {
    // to store url of audio file
    const [listen,Setlisten] = useState("");
    var link = document.location.href.split('/')[4];

    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]

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

        <div className="row" style={{position:"fixed"}}>
            {/* audio and questions */}
            <div className='col-8 container' style={{padding:"2rem",overflowY:"scroll",height: "42rem"}}>
                <AudioPlayer
                    className='audio'
                    style={{backgroundColor:"#d6f0f4",border:"1px solid #32b3c7",width:"90%"}}
                    src={`http://localhost:1337${listen}`}
                />
                
                {/* questionsListening */}
                <QuestionsListening />
            </div>

            {/* questionpallete */}
            <div className="col container " style={{width:"5rem",backgroundColor:"#284664",position:"sticky"}}>
                <img style={{display:"flex",justifyContent:"center"}} src="https://ads.intergreat.com/www/images/30c9e2d53a04486eb2be804aba0fc3d9.png" />
                <p style={{color:"white",marginTop:"0.5rem",fontSize:"22px",fontWeight:"600",display:"flex",justifyContent:"center"}}>QUESTION PALETTE</p>

                {/* for displaying numbers of checking */}
                <div className="container">
                    {number.map((num)=>{
                        return <span className='number' style={{margin:"0.4rem",fontWeight:"700",backgroundColor:"#32b3c7",borderRadius:"50%",color:"#fff",textAlign:"center",height:"28px",width:"30px"}}>{num}</span> 
                    })}
                </div>

                {/* for submit button */}
                <div className="container">
                    <div className='convertToInline' style={{float:"left"}}>
                        <ReactCountdownClock 
                        seconds={2400}
                        color="#f3f3f3"
                        alpha={0.9}
                        size={150}
                        />
                    </div>
                    
                    <div style={{float:"right"}}>
                        <button type="button" class="btn" style={{backgroundColor:"#f3f3f3"}}><i class="fa-solid fa-paper-plane"></i> Submit</button>
                        <button type="button" class="btn" style={{backgroundColor:"#f3f3f3",marginLeft:"1rem"}}><i class="fa-solid fa-cubes-stacked"></i> Answers</button>
                    </div>

                </div>

                
                
            </div>
        </div>

        
        
    </div>
  )
}

export default Listening1