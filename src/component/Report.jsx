import { MdReportProblem } from "react-icons/md";
import "../styles/Report.css"
export default function Report(){
    return(
        <div className="report-container">
            <section style={{display:"flex",marginBottom:"30px",justifyContent:"left",gap:"20px",alignItems:"center"}}>
                <MdReportProblem color="red" size={33} />
                <h2>Report an Issue</h2>
            </section>
            <form action="" className="report-form">
               <label htmlFor=""> Facing any Problem during travel ? Let Us Know</label>
               <label htmlFor="" style={{color:"red"}}>Select issue Type</label>
               <select name="issue" placeholder="Slect"  id="">
                
                <option value="driving">Driving</option>
                <option value="bus">Bus</option>
                <option value="staffs">Bus Incharges</option>
                <option value="student">Student</option>
                <option value="application">RouteX Application</option>
               </select>
               <textarea placeholder="Discribe Your Problem Issue ...."/>
               <button className="report-btn">Send Report -&gt;</button>
            </form>
        </div>
    )
}