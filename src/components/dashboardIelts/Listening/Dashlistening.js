import {React,useState,useEffect} from 'react'
import DashboardNav from '../../dashboardNavbar/DashboardNav'
import Axios from "axios"
import Ieltscard from '../../ielts/Ieltscard';
import "../../spinner/spinner.css"


function Dashlistening() {
  const [modules,Setmodules] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:1337/api/listenings").then((response)=>{
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
          return <Ieltscard title="Listening" url={`/dashlistening/${module.id}`} img="https://cdn-icons-png.flaticon.com/512/5295/5295318.png" />
        })}
      </div>
    </div>
  )
}

export default Dashlistening