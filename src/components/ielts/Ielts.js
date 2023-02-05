import React from 'react'
import "./Ielts.css"
import Ieltscard from './Ieltscard'

function Ielts() {
  return (
    <div>
        <div className="container div" style={{justifyConent:"center"}}>
            <h1>IELTS MODULES</h1>
        </div>
        <div className="row">
            <Ieltscard title="Reading" img="https://cdn-icons-png.flaticon.com/512/2436/2436636.png" />
            <Ieltscard title="Listening" img="https://cdn-icons-png.flaticon.com/128/1945/1945984.png" />
            <Ieltscard title="Speaking" img="https://cdn-icons-png.flaticon.com/512/4849/4849692.png" />
            <Ieltscard title="Writing" img="https://cdn-icons-png.flaticon.com/512/1973/1973807.png" />
        </div>
        
    </div>
  )
}

export default Ielts