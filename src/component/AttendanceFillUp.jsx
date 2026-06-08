import {
    BsCalendarCheck
} from "react-icons/bs"
import "../styles/Attendance.css"
export default function AttedanceFillUp(){
    return(
        <div className="attedence-container">
            <h2 style={{display:"flex",gap:"20px",marginBottom:"30px"}}><BsCalendarCheck color="var(--accent)"  size={33}></BsCalendarCheck>Fill Up Today Attedence </h2>
            <form action="" className="attedence-form">
              <label htmlFor="">Enter 6 Attedence Code , Shared by Mentors</label>
              <input type="text" placeholder="Enter Code here ..."  />
               <select name="attedence" placeholder=""  id="">
                
                <option value="present">Present</option>
                <option value="absent">Absent</option>
               </select>
               <textarea placeholder="Discribe the perpose of Absent Here...."/>
               <button className="report-btn">Send Attendence -&gt;</button>
            </form>
        </div>
    )
}