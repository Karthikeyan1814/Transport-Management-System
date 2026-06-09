import "../styles/Sidebar.css"
import {
    FaUser,
    FaBus,
    FaBell,
    FaRoute,
    FaCog,
    FaSignOutAlt
} from "react-icons/fa"
import {
    MdDashboard,
    MdLocationOn,
    MdReportProblem
} from "react-icons/md"
import {
    IoChatboxOutline
} from "react-icons/io5"
import {
    HiDocumentText
} from "react-icons/hi";
import {
    BsCalendarCheck
} from "react-icons/bs"
import { NavLink } from "react-router-dom";
import {useState,useEffect}from "react"
export default function Sidebar({showType}) {


    return (
        <div className="sidebar-container">
            {showType === "student" && <ul className="sidebar">

                <li>
                  <NavLink to={"/studentDashboard"} >
                      <MdDashboard size={22} />
                    Dashboard
                  </NavLink>
                </li>
                    
                <li>
                   <NavLink to={"profile"}>
                         <FaUser size={22} />
                          My Profile
                    </NavLink>
                </li>

                <li>
                    <NavLink to={"routesData"}>
                        <FaBus size={22} />
                        Bus Routes
                    </NavLink>
                </li>

                <li>
                    <NavLink to={"sharelocation"} >
                        <MdLocationOn size={22} />
                    Live Location
                    </NavLink>
                </li>

                <li>
                    <NavLink to={"shareReport"}>
                        <MdReportProblem size={22} />
                    Report Issue
                    </NavLink>
                </li>

                <li>
                    <NavLink to={"messages"}>
                        <IoChatboxOutline size={22} />
                    Messages
                    </NavLink>
                </li>

                <li>
                    <NavLink to={"notification"}>
                        <FaBell size={22} />
                    Notifications
                    </NavLink>
                </li>

                <li>
                    <NavLink to={"shareAttendence"}>
                        <BsCalendarCheck size={22} />
                    Attendance
                    </NavLink>
                </li>

                {/* <li>
                    <HiDocumentText size={22} />
                    Documents
                </li> */}

        

                <li>
                  <NavLink to={"/"}>
                          <FaSignOutAlt size={22} />
                    Logout
                  </NavLink>
                </li>

            </ul>}

            {showType === "staff" && <ul className="sidebar">

                <li>
                  <NavLink to={"/staffDashboard"} >
                      <MdDashboard size={22} />
                    Dashboard
                  </NavLink>
                </li>
                    
                <li>
                   <NavLink to={"profile"}>
                         <FaUser size={22} />
                          My Profile
                    </NavLink>
                </li>

                   <li>
                   <NavLink>
                         <FaUser size={22} />
                          Grand Access
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to={"shareAttendance"}>
                        <BsCalendarCheck size={22} />
                     Attendance 
                    </NavLink>
                </li>

                <li>
                    <NavLink to={"routesData"}>
                        <FaBus size={22} />
                        Bus Routes
                    </NavLink>
                </li>

                <li>
                    <NavLink to={"sharelocation"} >
                        <MdLocationOn size={22} />
                    Live Location
                    </NavLink>
                </li>

                <li>
                    <NavLink to={"shareReport"}>
                        <MdReportProblem size={22} />
                    Report Issue
                    </NavLink>
                </li>

              

                 <li>
                    <NavLink to={"messages"}>
                        <IoChatboxOutline size={22} />
                     Messages
                    </NavLink>
                </li>

                <li>
                    <NavLink to={"notification"}>
                        <FaBell size={22} />
                    Notifications
                    </NavLink>
                </li>


                {/* <li>
                    <HiDocumentText size={22} />
                    Documents
                </li> */}

        

                <li>
                  <NavLink to={"/"}>
                          <FaSignOutAlt size={22} />
                    Logout
                  </NavLink>
                </li>

            </ul>}
            
        </div>
    )
}