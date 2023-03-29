import {React,useState} from 'react'
import DashboardNav from '../../dashboardNavbar/DashboardNav'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



function Dashspeaking() {
  const [value, onChange] = useState(new Date());
  return (
    <div>
    <DashboardNav />
      <div className="calendar" style={{margin:"2rem"}}>
        <Calendar onClickDay={(event)=>{console.log(event)}} onChange={onChange} value={value} />
      </div>
    </div>
  )
}

export default Dashspeaking