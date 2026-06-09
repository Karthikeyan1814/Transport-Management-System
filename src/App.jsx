// import Admin from "./component/Admin"
// import StudentRegister from "./component/StudentRegister"
// import LoginPage from "./component/LoginPage"
// import StaffRegister from "./component/StaffRegister"
// import StaffPanel from "./component/StaffPanel"
// import Studentpanel from "./component/Studentpanel"
// import { Route ,Routes } from "react-router-dom"
import Home from "./pages/Home"
import "./App.css"
import StudentDashboard from "./pages/StudentDashboard"
import Sidebar from "./component/Sidebar"
import SignIn from "./pages/SignIn"
import RouteForm from "./component/RouteForm"
import { Route, Routes } from "react-router-dom"
import StudentDashComponent from "./component/StudentDashComponent"
import LiveLocation from "./component/LiveLocation"
import RoutesData from "./component/RoutesData"
import Report from "./component/Report"
import AttedanceFillUp from "./component/AttendanceFillUp"
import Notification from "./component/Notification"
import Message from "./component/Message"
import { useState } from "react"
import Profile from "./component/Profile"
import StaffDashboard from "./pages/StaffDashboard"
import ShareAttendance from "./component/ShareAttendance"
function App() {
  const [user] = useState({

domain:"student",

firstname:"Karthikeyan",
lastname:"M",

email:"karthi23@gmail.com",
phone:"9876543210",

dob:"2004-09-14",
date:"2023-06-01",

dept:"Information Technology",
currentyear:"3",

parentname:"Murugan",
parentmobile:"9876543222",

address:"Salem, Tamil Nadu",
pincode:"636001",

bordingpoint:"New Bus Stand",
organization:"ABC Engineering College"

})
  return (
    <>
    {/* <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/Admin" element={<Admin />}></Route>
      <Route path="/StudentRegister" element={<StudentRegister />}></Route>
      <Route path="/StaffRegister" element={<StaffRegister />}></Route>
      <Route path="/Staffpanel" element={<StaffPanel />}></Route>
      <Route path="/Studentpanel" element={<Studentpanel />}></Route>
      
    </Routes> */}
    <Routes >
      <Route path="/studentDashboard" element={<StudentDashboard />}>
          <Route index element={<StudentDashComponent />}></Route>
          <Route path="sharelocation" element={<LiveLocation />}></Route>
          <Route path="routesData" element={<RoutesData />}></Route>
          <Route path="shareReport" element={<Report />}></Route>
          <Route path="shareAttendence" element={<AttedanceFillUp />}></Route>
          <Route path="notification" element={<Notification />}></Route>
          <Route path="messages" element={<Message />}></Route>
          <Route path="profile" element={<Profile user={user} />}></Route>
      </Route>

      <Route path="/" element={<SignIn />}/>


      <Route path="/staffDashboard" element={<StaffDashboard />}>
          <Route index element={<StudentDashComponent />}></Route>
          <Route path="sharelocation" element={<LiveLocation />}></Route>
          <Route path="shareAttendance" element={<ShareAttendance />}></Route>
          <Route path="routeData" element={<RoutesData />}></Route>
          <Route path="shareReport" element={<Report />}></Route>
          <Route path="Attendence" element={<AttedanceFillUp />}></Route>
          <Route path="notification" element={<Notification />}></Route>
          <Route path="messages" element={<Message />}></Route>
          <Route path="importantMessage" element={<Message />}></Route>
          <Route path="profile" element={<Profile user={user} />}></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App
