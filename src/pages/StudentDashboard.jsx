import { FaLocationPin, FaLocationPinLock } from "react-icons/fa6"
import"..//styles/StudentDash.css"
import ImportantMessage from "../component/ImportantMessage"
import Nav from "../component/Nav"

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
import { useLocation } from "react-router-dom"
import { useState,useEffect } from "react"
export default function StudentDashboard(){
     const location =useLocation();
    
        console.log("student dashboard");
        console.log(location.state.user);
        const [userdata,setUserData]=useState({});
    
        useEffect(()=>{
            setUserData(u);
        },[])

        
    return(
        <div className="studentdash-container">
            <Nav  userdata={userdata}/>
            <Sidebar showType={userdata.role} />
            <div className="pageloading-container">
                <Outlet context={userdata}/>
                   <Footer />
            </div>
         
        </div>
    )
}