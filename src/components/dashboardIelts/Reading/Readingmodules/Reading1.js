import {React,useState} from 'react'
import Axios from "axios"
import { Document, Page } from 'react-pdf';

function Reading1() {
    
    // const [pdf,Setpdf] = useState("");

    // Axios.get('http://localhost:1337/api/readings?populate=*')
    //     .then(response => {
    //         console.log(response.data.data[0].attributes.pdf.data[0].attributes.url);
    //         Setpdf(response.data.data[0].attributes.pdf.data[0].attributes.url);
    //     })
    //     .catch(error => {
    //         // Handle error.
    //         console.log('An error occurred:', error.response);
    //     });

  return (  
    <div>
        <div className="reading" style={{display:"flex",justifyContent:"center"}}>
            <h1>Reading1</h1>
        </div>
        <div className="container" >
            <iframe src="http://localhost:1337/uploads/Reading1_cf2faeff8a.pdf#toolbar=0&navpanes=0&scrollbar=0&zoom=150" type="application/pdf" style={{height:"600px"}} />
            {/* <embed src="http://localhost:1337/uploads/Reading1_cf2faeff8a.pdf" style={{height:"600px",width:"100%"}} type="application/pdf"></embed>  */}
            {/* <object data="http://localhost:1337/uploads/Reading1_cf2faeff8a.pdf" style={{height:"600px"}} type="application/pdf"></object> */}
        </div>

    </div>
  )
}

export default Reading1