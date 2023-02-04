import React from 'react'
import Card from '../card/Card'
import data from "../data/data.json"

function Institution() {
  return (
    <div className='container'>
        <h1 style={{display:"flex",color:"#07074d",justifyContent:"center",marginBottom:"3rem"}}>Institutions</h1>
        <div className="flexBox row mx-auto gy-4 column-gap-4 container-fluid">
            {data.college.map((ele) => {
              return <Card image={ele.logo} title={ele.name} text={ele.address} url={ele.link} />
            })}        
        </div>
    </div>
  )
}

export default Institution