import { FaLocationPin, FaLocationPinLock } from "react-icons/fa6"
import"..//styles/StudentDash.css"
import ImportantMessage from "../component/ImportantMessage"
import{useState}from "react"
import {
    FaUser,
    FaBus, 
    FaBell,
    FaRoute,
    FaCog,
    FaSignOutAlt,
    FaSearchLocation
} from "react-icons/fa"
import RoutesData from "../component/RoutesData"
import Report from "../component/Report"
import LiveLocation from "./LiveLocation"
export default function StudentDashComponent(){
    return(
        <>
            <ImportantMessage />
            <section className="student-shortcut1">
                <div className="student-shot1">
                    <FaUser color="var(--primary)" id="bell" size={33}/>
                    <section>
                        <p>Welcome Back</p>
                        <h2>Karthi Keyan</h2>
                        <p>Roll no:98381</p>
                        </section>
                </div>
                <div className="student-shot1">
                     <FaBus color="var(--primary)" id="bell" size={33}/>
    
                    <section>
                        <p>Your Bus Route</p>
                        <h2>Route 5</h2>
                        <p>Salem -&gt; College</p>
                        <p style={{color:"var(--accent)"}}>View -&gt;</p>
                    </section>
                </div>
                <div className="student-shot1">
                     <FaSearchLocation color="var(--primary)" id="bell" size={33}/>
                  
                    <section>
                        <p>Live Location</p>
                        <h2>Not Shared</h2>
                        <p>Share your live location with <br /> Transport Team</p>
                        <p style={{color:"var(--accent)"}}>ShareNow -&gt;</p>
                    </section>
                </div>
                <div className="student-shot1">
                     <FaBell color="var(--primary)" id="bell" size={33}/>
                  
                    <section>
                        <p>Notification</p>
                        <h2>3 new</h2>
                        <p>View all Notification</p>
                        <p style={{color:"var(--accent)"}}> view -&gt;</p>
                    </section>
                </div>
            </section>
            {/* <RouteForm /> */}
            <RoutesData isdash={true}/>
            <section className="split-into-two">
                <Report />
            <LiveLocation />
            </section>
        </>
    )
}