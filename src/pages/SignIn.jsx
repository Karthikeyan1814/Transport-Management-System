import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setSignIn } from "../api/logApi";
import "../styles/SignIn.css"
import SignInLayout from "../component/SignInLayout";
import SignUpForm from "../component/SignUpForm";

export default function SignIn() {
     const navigate = useNavigate();

     const [activedomain,setActiveDomain]=useState("student")
    const [currentpage,setCurretPage]=useState("signin");

    const [logdetail, setlogdetail] = useState({
        domain: "student",
        email: "",
        password: ""
    })

    const [signup,setSignUp]=useState({
        
    })

    const handledata = (e) => {
        const { name, value } = e.target;
        setlogdetail({ ...logdetail, [name]: value });
    }

    const handleDomain =(e)=>{
        setActiveDomain(e);
        setlogdetail({...logdetail,[domain]:e})
        }

    const logactive = async(e) => {
        e.preventDefault();
        console.log(logdetail)
                try{
                    const  data=await setSignIn(logdetail);
                    if (data == "student login") {
                    navigate("/Studentpanel")
                } else if (data == "admin login") {
                    navigate("/Admin")
                } else if (data == "staff login") {
                    navigate("/Staffpanel")
                } else {
                    alert(data)
                }
                }catch(error){
                    alert("Somthing Went Wrong")
                }
                
                    
            }
    
        const handlePage=(e)=>{
            setCurretPage(e);
        };
    return (
        <div className="signin-container">
            <div className="signin-layout">
               <SignInLayout handlePage={handlePage} currentpage={currentpage}/>
            {currentpage==="signin" && <section className="signin-section2">
                <h1>SignIn</h1>
                <section className="domain-selection">
                    <button name="domain" className={activedomain==="student"?"active-domain":" "} value="Student" onClick={()=>(handleDomain("student"))}>Student</button>
                    <button name="domain" className={activedomain==="staff"?"active-domain":" "} value="Staff" onClick={()=>(handleDomain("staff"))}>Staff</button>
                    <button name="domain" className={activedomain==="organization"?"active-domain":" "} value="Organization" onClick={()=>(handleDomain("organization"))}>Organization</button>
                    <button name="domain" className={activedomain==="admin"?"active-domain active-revet":" "} value="admin" onClick={()=>(handleDomain("admin"))}><img id="repair-logo"src=".//admin-logo.png" alt="" /></button>
                </section>
                <form className="signin-form">
                    <label htmlFor="">Email</label>
                    <input type="email" required name="email" value={logdetail.email} onChange={handledata} />

                    <section style={{display:"flex",justifyContent:"space-between"}}><label htmlFor="">Password</label><p style={{color:"red",cursor:"pointer"}}>Forget Password</p></section>
                    <input type="password" required name="password" value={logdetail.password} onChange={handledata} />

                    <button id="animated1">Log in</button>
                </form>
            </section>}

            {currentpage ==="signup" && <section className="signin-section2">
                <h1>SignUp</h1>
                <SignUpForm />
            </section>}
            </div>
        </div>
    )
}