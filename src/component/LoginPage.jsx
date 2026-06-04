import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Loginpage.css"

export default function LoginPage() {
   

    return (
       <div className="log-box">
       <header className="login-header">
           <h1>Login Page</h1>
           <div>
                <button onClick={()=>navigate("/StudentRegister")}>Student Register</button>
                <button onClick={()=>navigate("/StaffRegister")}>Staff Register</button>
           </div>
       </header>
        <div className="logcontainer">
           

            <form action="" onSubmit={logactive} className="login-form-layout">
                
                <label htmlFor="">Enter the Email</label>
                <input type="email" required name="email" value={logdetail.email} onChange={handledata} />

                <label htmlFor="">Enter the Password</label>
                <input type="password"  required name="password" value={logdetail.password} onChange={handledata} />

                <button style={{width:"150px"}}>Log in</button>
            </form>
        </div>
       </div>
    )
}