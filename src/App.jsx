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
function App() {
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

    <StudentDashboard />
    </>
  )
}

export default App
