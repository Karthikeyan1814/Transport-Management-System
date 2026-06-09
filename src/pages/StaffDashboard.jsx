import Nav from "../component/Nav"
import Sidebar from "../component/Sidebar"
import Footer from "../component/Footer"
import { Outlet } from "react-router-dom"
import "../styles/StaffDashboard.css"
export default function StaffDashboard(){
    return(
        <div className="staff-container">
            <Nav></Nav>
            <Sidebar showType="staff"/>
            <div className="pageloading-container">
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}