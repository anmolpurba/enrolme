import {React,useState,useEffect} from 'react'
// import Blanks from './Blanks'
// import TrueFalseNG from './TrueFalseNG'
import ChooseCorrect from './ChooseCorrect'
// import ChooseCorrectMultiple from './ChooseCorrectMultiple'
// import CorrectParagraph from './CorrectParagraph'
// import Summary from './Summary'
import Axios from "axios"
import Table from './Table'
import Summary from './Summary'
import Diagram from './Diagram'

function QuestionsListening() {
                                                                                                                                                   
    const [obj,Setobj] = useState([])

    useEffect(()=>{
        var link = document.location.href.split('/')[4];
        // Axios.get(`http://localhost:1337/api/listenings/${link}?populate=*`).then((response)=>{
        //     Setobj(response.data.data.attributes.listening_questions.data);
        //     // console.log(response.data.data.attributes.questions.data);
        // }).catch((err)=>{
        //     console.log(err);
        // })

        Axios.get(`http://localhost:1337/api/listenings/${link}?populate=listening_questions.diagramImage.media`).then((response)=>{
            Setobj(response.data.data.attributes.listening_questions.data);
            // console.log(response.data.data.attributes.questions.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    // for sorting according to serial number we getting in api call
    obj.length>0 && obj.sort(function(x, y) {
        if (x.attributes.sr < y.attributes.sr) {
          return -1;
        }
        return 1;
    });

    

    function blan(param){
        if(param.attributes.questionType==="Table"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <Table sr={param.attributes.sr} questionText={param.attributes.questionText!=null && param.attributes.questionText} /> </>
        }
        if(param.attributes.questionType==="Table2"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <Table sr={param.attributes.sr} questionText={param.attributes.questionText!=null && param.attributes.questionText} /> </>
        }
        if(param.attributes.questionType==="Table3"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <Table sr={param.attributes.sr} questionText={param.attributes.questionText!=null && param.attributes.questionText} /> </>
        }
        if(param.attributes.questionType==="diagram"){
            // {console.log(param.attributes.diagramImage.data)}
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <Diagram sr={param.attributes.sr} image={param.attributes.diagramImage.data!=null && `http://localhost:1337${param.attributes.diagramImage.data[0].attributes.formats.small.url}`} /> </>
        }
        if(param.attributes.questionType==="diagram2"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <Diagram sr={param.attributes.sr} image={param.attributes.diagramImage.data!=null && `http://localhost:1337${param.attributes.diagramImage.data[0].attributes.formats.small.url}`} /> </>
        }
        if(param.attributes.questionType==="diagram3"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <Diagram sr={param.attributes.sr} image={param.attributes.diagramImage.data!=null && `http://localhost:1337${param.attributes.diagramImage.data[0].attributes.formats.small.url}`} /> </>
        }
        if(param.attributes.questionType==="ChooseCorrect"){
            {console.log(param.attributes.questionText)}
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <ChooseCorrect sr={param.attributes.sr} questionText={param.attributes.questionText} /> </>
        }
        if(param.attributes.questionType==="ChooseCorrect2"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <ChooseCorrect sr={param.attributes.sr}  questionText={param.attributes.questionText} /> </>
        }
        if(param.attributes.questionType==="ChooseCorrect3"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <ChooseCorrect sr={param.attributes.sr} questionText={param.attributes.questionText} /> </>
        }
        if(param.attributes.questionType==="ChooseCorrect4"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <ChooseCorrect sr={param.attributes.sr} questionText={param.attributes.questionText} /> </>
        }
        if(param.attributes.questionType==="ChooseCorrect5"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <ChooseCorrect sr={param.attributes.sr} questionText={param.attributes.questionText} /> </> 
        }
        if(param.attributes.questionType==="ChooseCorrect6"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <ChooseCorrect sr={param.attributes.sr} questionText={param.attributes.questionText} /> </>
        } 
        if(param.attributes.questionType==="ChooseCorrect7"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <ChooseCorrect sr={param.attributes.sr} questionText={param.attributes.questionText} /> </>
        }
        if(param.attributes.questionType==="ChooseCorrect8"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <ChooseCorrect sr={param.attributes.sr} questionText={param.attributes.questionText} /> </>
        }
        if(param.attributes.questionType==="ChooseCorrect9"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <ChooseCorrect sr={param.attributes.sr} questionText={param.attributes.questionText} /> </>
        } 
        if(param.attributes.questionType==="ChooseCorrect10"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <ChooseCorrect sr={param.attributes.sr} questionText={param.attributes.questionText} /> </>
        } 
        if(param.attributes.questionType==="summary"){ 
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <Summary sr={param.attributes.sr} questionText={param.attributes.questionText!=null && param.attributes.questionText} /> </>
        }
        if(param.attributes.questionType==="summary2"){ 
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <Summary sr={param.attributes.sr} questionText={param.attributes.questionText} summaryInput={param.attributes.summaryInput} /> </>
        }
        if(param.attributes.questionType==="summary3"){ 
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <Summary sr={param.attributes.sr} questionText={param.attributes.questionText} summaryInput={param.attributes.summaryInput} /> </>
        }
        
    }
    

  return (
    <div>
        {obj.length>0 && obj.map((param)=>{ 
            return blan(param);
        })}
    </div>
  )
}

export default QuestionsListening