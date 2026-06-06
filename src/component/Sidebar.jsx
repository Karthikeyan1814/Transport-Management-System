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
export default function Sidebar() {
    return (
        <div className="sidebar-container">
            <ul className="sidebar">

                <li>
                    <MdDashboard size={22} />
                    Dashboard
                </li>

                <li>
                    <FaUser size={22} />
                    My Profile
                </li>

                <li>
                    <FaBus size={22} />
                    Bus Routes
                </li>

                <li>
                    <MdLocationOn size={22} />
                    Live Location
                </li>

                <li>
                    <MdReportProblem size={22} />
                    Report Issue
                </li>

                <li>
                    <IoChatboxOutline size={22} />
                    Messages
                </li>

                <li>
                    <FaBell size={22} />
                    Notifications
                </li>

                <li>
                    <BsCalendarCheck size={22} />
                    Attendance
                </li>

                <li>
                    <HiDocumentText size={22} />
                    Documents
                </li>

                <li>
                    <FaCog size={22} />
                    Settings
                </li>

                <li>
                    <FaSignOutAlt size={22} />
                    Logout
                </li>

            </ul>
            <section className="sidebar-bottom">
                <h3>Track. Ride. Reach</h3>
                <h3>Alwayson time</h3>
                <h3>with <span style={{color:"var(--primary)"}}>RouteX</span></h3>
            </section>
        </div>
    )
}