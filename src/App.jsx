// import Admin from "./component/Admin"
// import StudentRegister from "./component/StudentRegister"
// import LoginPage from "./component/LoginPage"
// import StaffRegister from "./component/StaffRegister"
// import StaffPanel from "./component/StaffPanel"
// import Studentpanel from "./component/Studentpanel"
// import { Route ,Routes } from "react-router-dom"
import "./App.css"
import SignIn from "./pages/SignIn"
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

    <SignIn />
 
    </>
  )
}

export default App
