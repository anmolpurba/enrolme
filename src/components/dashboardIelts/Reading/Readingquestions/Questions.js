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

        {/* TrueFalseNG */}
        <h3>{obj.length && obj[4].attributes.heading}</h3>
        {obj.length>0 && obj.map((trueFalseNG)=>{
            return trueFalseNG.attributes.questionType==="TrueFalseNG" && <TrueFalseNG questionText={trueFalseNG.attributes.questionText} />
        })}

        {/* ChooseCorrect */}
        <h3>{obj.length && obj[9].attributes.heading}</h3>
        {obj.length>0 && obj.map((chooseCorrect)=>{
            return chooseCorrect.attributes.questionType==="ChooseCorrect" && <ChooseCorrect questionText={chooseCorrect.attributes.questionText} />
        })}

        {/* ChooseCorrectMultiple */}
        <h3>{obj.length && obj[10].attributes.heading}</h3>
        {obj.length>0 && obj.map((chooseCorrectMultiple)=>{
            return chooseCorrectMultiple.attributes.questionType==="ChooseCorrectMultiple" && <ChooseCorrectMultiple questionText={chooseCorrectMultiple.attributes.questionText} />
        })}

        {/* CorrectParagraph */}
        <h3>{obj.length && obj[16].attributes.heading}</h3>
        {obj.length>0 && obj.map((correctParagraph)=>{
            return correctParagraph.attributes.questionType==="CorrectParagraph" && <CorrectParagraph questionText={correctParagraph.attributes.questionText} />
        })}

        {/* ChooseCorrectMultiple2 */}
        <h3>{obj.length && obj[20].attributes.heading}</h3>
        {obj.length>0 && obj.map((chooseCorrectMultiple2)=>{
            return chooseCorrectMultiple2.attributes.questionType==="ChooseCorrectMultiple2" && <ChooseCorrectMultiple questionText={chooseCorrectMultiple2.attributes.questionText} />
        })}

        {/* ChooseCorrectMultiple3 */}
        <h3>{obj.length && obj[23].attributes.heading}</h3>
        {obj.length>0 && obj.map((chooseCorrectMultiple3)=>{
            return chooseCorrectMultiple3.attributes.questionType==="ChooseCorrectMultiple3" && <ChooseCorrectMultiple questionText={chooseCorrectMultiple3.attributes.questionText} />
        })}

        {/* Summary */}
        <h3>{obj.length && obj[29].attributes.heading}</h3>
        {obj.length>0 && obj.map((summary)=>{
            return summary.attributes.questionType==="summary" && <Summary questionText={summary.attributes.questionText} />
        })}

        {/* ChooseCorrectMultiple4 */}
        <h3>{obj.length && obj[32].attributes.heading}</h3>
        {obj.length>0 && obj.map((chooseCorrectMultiple4)=>{
            return chooseCorrectMultiple4.attributes.questionType==="ChooseCorrectMultiple4" && <ChooseCorrectMultiple questionText={chooseCorrectMultiple4.attributes.questionText} />
        })}




    </div>
  )
}

export default Questions