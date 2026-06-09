import {
    BsCalendarCheck
} from "react-icons/bs"
import {
    IoChatboxEllipsesSharp
} from "react-icons/io5"
import "../styles/Attendance.css"
export default function SendImportantMessage(){
    return(
        <div className="attedence-container">
            <h2 style={{display:"flex",gap:"20px",marginBottom:"30px"}}><IoChatboxEllipsesSharp color="var(--accent)"  size={33}></IoChatboxEllipsesSharp>Fill Up Today Attedence </h2>
            <form action="" className="attedence-form importantmsg-form">
              <label htmlFor="">Enter the Important Message To Student</label>
              <input type="text" placeholder="Enter the Detail ..."  />
               <select name="sendlist" placeholder=""  id="">
                
                <option value="student">To Students</option>
                <option value="shareall">To Share All</option>
               </select>
               <textarea placeholder="Discribe The Context here...."/>
               <button className="report-btn">Send Message -&gt;</button>
            </form>
        </div>
    )
}