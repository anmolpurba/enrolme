import {React,useState,useEffect} from 'react'
import DashboardNav from '../../dashboardNavbar/DashboardNav'
import Axios from "axios"
import Ieltscard from '../../ielts/Ieltscard';
import "../../spinner/spinner.css"



function Dashwriting() {
  const [writing,Setwriting] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:1337/api/writings").then((response)=>{
      Setwriting(response.data.data)
      console.log(response.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div>
      <div className="container row">
        {writing.length==0?<span class="loader"></span>:writing.map((module)=>{
          return <Ieltscard title="Writing" url={`/dashwriting/${module.id}`} img="https://cdn-icons-png.flaticon.com/512/3131/3131607.png" />
        })}
      </div>
        
    </div>
  )
}

export default Dashwriting