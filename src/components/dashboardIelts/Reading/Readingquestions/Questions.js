import {React,useState,useEffect} from 'react'
import Blanks from './Blanks'
import Diagram from "./Diagram.js"
import TrueFalseNG from './TrueFalseNG'
import ChooseCorrect from './ChooseCorrect'
import ChooseCorrectMultiple from './ChooseCorrectMultiple'
import CorrectParagraph from './CorrectParagraph'
import Summary from './Summary'
import Axios from "axios"
import ReactMarkdown from "react-markdown"

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

  return (
    <div>
        {/* blanks */}
        <h3>{obj.length && obj.find((x)=>x.attributes.questionType==="blanks").attributes.heading}</h3>
        {obj.length>0 && obj.map((blank)=>{ 
            return  (blank.attributes.questionType==="blanks" && <Blanks questionText={blank.attributes.questionText} />) 
        })}

        {/* diagram */}
        <h3>{obj.length && obj.find((x)=>x.attributes.questionType==="diagram").attributes.heading}</h3>
        {obj.length>0 && obj.map((diagram)=>{ 
            return  diagram.attributes.questionType==="diagram" && <Diagram image={`http://localhost:1337${diagram.attributes.diagramImage.data[0].attributes.formats.small.url}`} diagramInput={diagram.attributes.diagramInput} /> 
        })}

        {/* TrueFalseNG */}
        <h3>{obj.length && obj.find((x)=>x.attributes.questionType==="TrueFalseNG").attributes.heading}</h3>
        {obj.length>0 && obj.map((trueFalseNG)=>{
            return trueFalseNG.attributes.questionType==="TrueFalseNG" && <TrueFalseNG questionText={trueFalseNG.attributes.questionText} />
        })}

        {/* ChooseCorrect */}
        <h3>{obj.length && obj.find((x)=>x.attributes.questionType==="ChooseCorrect").attributes.heading}</h3>
        {obj.length>0 && obj.map((chooseCorrect)=>{
            return chooseCorrect.attributes.questionType==="ChooseCorrect" && <ChooseCorrect questionText={chooseCorrect.attributes.questionText} />
        })}

        {/* ChooseCorrectMultiple */}
        <h3>{obj.length && obj.find((x)=>x.attributes.questionType==="ChooseCorrectMultiple").attributes.heading}</h3>
        {obj.length>0 && obj.map((chooseCorrectMultiple)=>{
            return chooseCorrectMultiple.attributes.questionType==="ChooseCorrectMultiple" && <ChooseCorrectMultiple questionText={chooseCorrectMultiple.attributes.questionText} />
        })}

        {/* CorrectParagraph */}
        <h3>{obj.length && obj.find((x)=>x.attributes.questionType==="CorrectParagraph").attributes.heading}</h3>
        {obj.length>0 && obj.map((correctParagraph)=>{
            return correctParagraph.attributes.questionType==="CorrectParagraph" && <CorrectParagraph questionText={correctParagraph.attributes.questionText} />
        })}

        {/* ChooseCorrectMultiple2 */}
        <h3>{obj.length && obj.find((x)=>x.attributes.questionType==="ChooseCorrectMultiple2").attributes.heading}</h3>
        {obj.length>0 && obj.map((chooseCorrectMultiple2)=>{
            return chooseCorrectMultiple2.attributes.questionType==="ChooseCorrectMultiple2" && <ChooseCorrectMultiple questionText={chooseCorrectMultiple2.attributes.questionText} />
        })}

        {/* CorrectParagraph2 */}
        <h3>{obj.length && obj.find((x)=>x.attributes.questionType==="CorrectParagraph2").attributes.heading}</h3>
        {obj.length>0 && obj.map((correctParagraph2)=>{
            return correctParagraph2.attributes.questionType==="CorrectParagraph2" && <ChooseCorrectMultiple questionText={correctParagraph2.attributes.questionText} />
        })}

        {/* Summary */}
        <h3>{obj.length && obj.find((x)=>x.attributes.questionType==="summary").attributes.heading}</h3>
        {obj.length>0 && obj.map((summary)=>{
            return summary.attributes.questionType==="summary" && <Summary questionText={summary.attributes.questionText} summaryInput={summary.attributes.summaryInput} />
        })}

        {/* ChooseCorrectMultiple4 */}
        <h3>{obj.length && obj.find((x)=>x.attributes.questionType==="ChooseCorrectMultiple4").attributes.heading}</h3>
        {obj.length>0 && obj.map((chooseCorrectMultiple4)=>{
            return chooseCorrectMultiple4.attributes.questionType==="ChooseCorrectMultiple4" && <ChooseCorrectMultiple questionText={chooseCorrectMultiple4.attributes.questionText} />
        })}




    </div>
  )
}

export default Questions