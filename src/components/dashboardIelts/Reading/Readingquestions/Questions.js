import {React,useState,useEffect} from 'react'
import Blanks from './Blanks'
import Diagram from "./Diagram.js"
import Axios from "axios"
const reactStringReplace = require('react-string-replace');

function Questions() {

    // String.prototype.replaceJSX = (find, replace) => {
    //     return this.split(find).flatMap((item) => [item, replace]);
    // }

    const [obj,Setobj] = useState([])

    useEffect(()=>{
        var link = document.location.href.split('/')[4];
        Axios.get(`http://localhost:1337/api/readings/${link}?populate[questions][populate]=*`).then((response)=>{
            Setobj(response.data.data.attributes.questions.data);
            console.log(response.data.data.attributes.questions.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    var text = "Security and peace are two $$ that are necessary for a civilisation to be successful.";

  return (
    <div>
        {/* blanks */}
        <h3>{obj.length && obj[0].attributes.heading}</h3>
        {obj.length>0 && obj.map((blank)=>{ 
            return  blank.attributes.questionType==="blanks" && <Blanks questionText={blank.attributes.questionText} /> 
        })}

        {/* diagram */}
        <h3>{obj.length && obj[3].attributes.heading}</h3>
        {obj.length>0 && obj.map((diagram)=>{ 
            return  diagram.attributes.questionType==="diagram" && <Diagram image={`http://localhost:1337${diagram.attributes.diagramImage.data[0].attributes.formats.small.url}`} /> 
        })}


    </div>
  )
}

export default Questions