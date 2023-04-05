import {React,useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import DashboardNav from '../../dashboardNavbar/DashboardNav'
import Axios from "axios"
import Ieltscard from '../../ielts/Ieltscard';
import "../../spinner/spinner.css"


function Dashreading() {

  const [modules,Setmodules] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:1337/api/readings").then((response)=>{
      Setmodules(response.data.data)
      console.log(response.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])


  return (
    <div>
      <div className="container row">
        {modules.length==0?<span class="loader"></span>:modules.map((module)=>{
          return <Ieltscard title="Reading" url={`/dashreading/${module.id}`} img="https://cdn-icons-png.flaticon.com/512/2436/2436636.png" />
        })}
      </div>
    </div>
  )
}

export default Dashreading