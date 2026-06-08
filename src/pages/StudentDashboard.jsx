import { FaLocationPin, FaLocationPinLock } from "react-icons/fa6"
import"..//styles/StudentDash.css"
import ImportantMessage from "../component/ImportantMessage"
import Nav from "../component/Nav"
import{useState}from "react"
import Sidebar from "../component/Sidebar"
import Footer from "../component/Footer"
import {
    FaUser,
    FaBus, 
    FaBell,
    FaRoute,
    FaCog,
    FaSignOutAlt,
    FaSearchLocation
} from "react-icons/fa"
import RouteForm from "../component/RouteForm"
import RoutesData from "../component/RoutesData"
import Report from "../component/Report"
import LiveLocation from "../component/LiveLocation"
import { Outlet } from "react-router-dom"
export default function StudentDashboard(){
    
    return(
        <div className="studentdash-container">
            <Nav  />
            <Sidebar />
            <div className="pageloading-container">
                <Outlet />
                   <Footer />
            </div>
         
        </div>
    )
}