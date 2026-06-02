import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Loginpage.css"

export default function LoginPage() {
    const navigate = useNavigate();

    const [logdetail, setlogdetail] = useState({
        domain: "",
        email: "",
        password: ""
    })

    const handledata = (e) => {
        const { name, value } = e.target;
        setlogdetail({ ...logdetail, [name]: value });
    }

    const logactive = (e) => {
        e.preventDefault();
        console.log(logdetail)
        fetch(`https://transport-management-system-backend-production.up.railway.app/logdetails?domain=${logdetail.domain}&email=${logdetail.email}&password=${logdetail.password}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(setlogdetail)
            }
        )
            .then(res => res.text())
            .then(data => {
                console.log(data);
                if (data == "student login") {
                    navigate("/Studentpanel")
                } else if (data == "admin login") {
                    navigate("/Admin")
                } else if (data == "staff login") {
                    navigate("/Staffpanel")
                } else {
                    alert(data)
                }
                    
            })
            .catch(err => console.log(err))
    }

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
            <div className="logdiv">
                <input type="radio" name="domain" value="admin" onChange={handledata} />Admin Login
                <input type="radio" name="domain" value="staff" onChange={handledata} />Staff Login
                <input type="radio" name="domain" value="user" onChange={handledata} />User Login
            </div>

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