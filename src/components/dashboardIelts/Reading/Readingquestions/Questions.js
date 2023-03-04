import {React,useState,useEffect} from 'react'
import "./Questions.css"
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
            // console.log(response.data.data.attributes.questions.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    obj.length>0 && obj.sort(function(x, y) {
        if (x.id < y.id) {
          return -1;
        }
        return 1;
    });
    

    function blan(param){
        if(param.attributes.questionType==="blanks"){
            return <Blanks questionText={param.attributes.questionText} />
        }
        if(param.attributes.questionType==="diagram"){
            return <Diagram image={`http://localhost:1337${param.attributes.diagramImage.data[0].attributes.formats.small.url}`} diagramInput={param.attributes.diagramInput} />
        }
        if(param.attributes.questionType==="TrueFalseNG"){
            return <TrueFalseNG questionText={param.attributes.questionText} />
        }
        if(param.attributes.questionType==="ChooseCorrect"){
            return <ChooseCorrect questionText={param.attributes.questionText} />
        }
        if(param.attributes.questionType==="ChooseCorrect2"){
            return <ChooseCorrect questionText={param.attributes.questionText} />
        }
        if(param.attributes.questionType==="CorrectParagraph"){
            return <CorrectParagraph questionText={param.attributes.questionText} />
        }
        if(param.attributes.questionType==="ChooseCorrect3"){
            return <ChooseCorrect questionText={param.attributes.questionText} />
        }
        if(param.attributes.questionType==="CorrectParagraph2"){
            return <ChooseCorrect questionText={param.attributes.questionText} />
        }
        if(param.attributes.questionType==="summary"){
            return <Summary questionText={param.attributes.questionText} summaryInput={param.attributes.summaryInput} />
        }
        if(param.attributes.questionType==="ChooseCorrect4"){
            return <ChooseCorrect questionText={param.attributes.questionText} />
        }
    }
    

  return (
    <div>
        {/* <h3>{obj.length && obj.find((x)=>x.attributes.questionType==="blanks") && obj.find((x)=>x.attributes.questionType==="blanks").attributes.heading}</h3> */}
        {obj.length>0 && obj.map((param)=>{ 
            {/* return (blank.attributes.questionType==="blanks" && <Blanks questionText={blank.attributes.questionText} />)  */}
            return blan(param);
        })}

        {/* diagram */}
        {/* <h3>{obj.length && obj.find((x)=>x.attributes.questionType==="diagram") && obj.find((x)=>x.attributes.questionType==="diagram").attributes.heading}</h3>
        {obj.length>0 && obj.map((diagram)=>{ 
            return  diagram.attributes.questionType==="diagram" && <Diagram image={`http://localhost:1337${diagram.attributes.diagramImage.data[0].attributes.formats.small.url}`} diagramInput={diagram.attributes.diagramInput} /> 
        })} */}

        {/* TrueFalseNG */}
        {/* <h3>{obj.length && obj.find((x)=>x.attributes.questionType==="TrueFalseNG")  && obj.find((x)=>x.attributes.questionType==="TrueFalseNG").attributes.heading}</h3>
        {obj.length>0 && obj.map((trueFalseNG)=>{
            return trueFalseNG.attributes.questionType==="TrueFalseNG" && <TrueFalseNG questionText={trueFalseNG.attributes.questionText} />
        })} */}

        {/* ChooseCorrect */}
        {/* <h3>{obj.length && obj.find((x)=>x.attributes.questionType==="ChooseCorrect") && obj.find((x)=>x.attributes.questionType==="ChooseCorrect").attributes.heading}</h3>
        {obj.length>0 && obj.map((chooseCorrect)=>{
            return chooseCorrect.attributes.questionType==="ChooseCorrect" && <ChooseCorrect questionText={chooseCorrect.attributes.questionText} />
        })} */}

        {/* ChooseCorrect2 */}
        {/* <h3>{obj.length && obj.find((x)=>x.attributes.questionType==="ChooseCorrect2") && obj.find((x)=>x.attributes.questionType==="ChooseCorrect2").attributes.heading}</h3>
        {obj.length>0 && obj.map((chooseCorrect2)=>{
            return chooseCorrect2.attributes.questionType==="ChooseCorrect2" && <ChooseCorrect questionText={chooseCorrect2.attributes.questionText} />
        })} */}

        {/* CorrectParagraph */}
        {/* <h3>{obj.length && obj.find((x)=>x.attributes.questionType==="CorrectParagraph") && obj.find((x)=>x.attributes.questionType==="CorrectParagraph").attributes.heading}</h3>
        {obj.length>0 && obj.map((correctParagraph)=>{
            return correctParagraph.attributes.questionType==="CorrectParagraph" && <CorrectParagraph questionText={correctParagraph.attributes.questionText} />
        })} */}

        {/*  ChooseCorrect3 */}
        {/* <h3>{obj.length && obj.find((x)=>x.attributes.questionType==="ChooseCorrect3") && obj.find((x)=>x.attributes.questionType==="ChooseCorrect3").attributes.heading}</h3>
        {obj.length>0 && obj.map((chooseCorrect3)=>{
            return chooseCorrect3.attributes.questionType==="ChooseCorrect3" && <ChooseCorrect questionText={chooseCorrect3.attributes.questionText} />
        })} */}

        {/* CorrectParagraph2 */}
        {/* <h3>{obj.length && obj.find((x)=>x.attributes.questionType==="CorrectParagraph2") && obj.find((x)=>x.attributes.questionType==="CorrectParagraph2").attributes.heading}</h3>
        {obj.length>0 && obj.map((correctParagraph2)=>{
            return correctParagraph2.attributes.questionType==="CorrectParagraph2" && <ChooseCorrect questionText={correctParagraph2.attributes.questionText} />
        })} */}

        {/* Summary */}
        {/* <h3>{obj.length && obj.find((x)=>x.attributes.questionType==="summary") && obj.find((x)=>x.attributes.questionType==="summary").attributes.heading}</h3>
        {obj.length>0 && obj.map((summary)=>{
            return summary.attributes.questionType==="summary" && <Summary questionText={summary.attributes.questionText} summaryInput={summary.attributes.summaryInput} />
        })} */}

        {/* ChooseCorrect4 */}
        {/* <h3>{obj.length && obj.find((x)=>x.attributes.questionType==="ChooseCorrect4") && obj.find((x)=>x.attributes.questionType==="ChooseCorrect4").attributes.heading}</h3>
        {obj.length>0 && obj.map((chooseCorrect4)=>{
            return chooseCorrect4.attributes.questionType==="ChooseCorrect4" && <ChooseCorrect questionText={chooseCorrect4.attributes.questionText} />
        })} */}




    </div>
  )
}

export default Questions