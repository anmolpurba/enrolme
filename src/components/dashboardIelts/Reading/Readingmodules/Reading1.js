import {React,useState,useEffect} from 'react'
import Axios from "axios"
import { Document, Page } from 'react-pdf';
import "./Reading1.css"
import ReactMarkdown from "react-markdown"
import Questions from '../Readingquestions/Questions';


function Reading1() {

    const [read,Setread] = useState("");

    function onSubmit(event){
        let arr = [];
        for(var i=0;i<40;i++){
            arr.push(document.getElementsByTagName("input")[i].value)
        }
        console.log(arr);
        const ans = [["conditions", "craftsmen and artists", "secure livelihood", "grand gallery", "481 feet", "queens chamber", "air channels", "false", "not given", "true", "true", "false", "d", "d", "b", "a", "a", "c", "c", "f", "d", "a", "c", "e", "g", "b", "vii", "v", "ix", "i", "iv", "111", "re offending", "sentencing", "victim", "restorative justice", "a", "c", "d", "b"]]
        if(arr === ans){
            alert("all are correct!")
        }
    }

    useEffect(()=>{
        var link = document.location.href.split('/')[4];
        Axios.get(`http://localhost:1337/api/readings/${link}`)
        .then(response => {
            Setread(response.data.data.attributes.text);
            // console.log(response.data.data.attributes.text);
        })
        .catch(error => {
            console.log('An error occurred:', error.response);
        });
    },[])

  return (  
    <div> 
        <div className="row">
            <div className="col" style={{textAlign:"justify",backgroundColor:"#d7e6dc",marginLeft:"0.7rem"}}>
                <ReactMarkdown>
                    {read}
                </ReactMarkdown>
            </div>
            <div className="col" style={{textAlign:"justify",backgroundColor:"#d7e6dc",marginLeft:"0.7rem"}}>
                <Questions />
            </div>
        </div>




    </div> 
            
    
  )
}

export default Reading1