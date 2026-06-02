import { useState } from "react";
import "./StudentRegister.css"
export default function StudentRegister(){
    const [studentdata,Setstudent]=useState({
        firstname:"",
        lastname:"",
        dob:"",
        joindate:"",
        dept:null,
        year:0,
        mobileno:0,
        email:"",
        parentname:"",
        parentno:0,
        bording:"",
        pincode:0,
        password:"",
        confirmpassword:"",
        note:"unchecked",
        domain:"user",
        status:"pending"
    })

    
    const studenttriggred=(e)=>{
        e.preventDefault();
        fetch("https://transport-management-system-backend-production.up.railway.app/SaveStudentDetails",
            {method:"POST",
                headers:{
                      "Content-Type": "application/json"
                },
                body:JSON.stringify(studentdata)
           }
        )
        .then(res=> res.text())
       .then(data=> console.log(data))
        .catch(err=> console.log(err))
        
    }

        const changed=(e)=>{
        const{name ,value}=e.target;
        Setstudent({...studentdata,[name]:value});
    console.log("object updation ",studentdata)
    }
    return(
       
            <div className="stu-container">
                <header>
                    <h1>Welcome To XXX College of Engineering </h1>
                    <h2>Transport Management System</h2>
                    <p>Path to Success , Stay Connect With Us</p>
                </header>
                <div className="std-form">
                    <h1 style={{textAlign:"center"}}>Student Register</h1>
                    <form action="" onSubmit={studenttriggred} className="student-register-layout">
                        <label htmlFor="">Enter the FirstName</label>
                        <input type="text" required name="firstname" value={studentdata.firstname} onChange={changed} />

                        <label htmlFor="">Enter the LastName</label>
                        <input type="text" required name="lastname"  value={studentdata.lastname} onChange={changed} />

                        <label htmlFor="">Enter the Date of Birth</label>
                        <input type="date" name="dob"  value={studentdata.dob} onChange={changed}/>

                        <label htmlFor="">Enter the Date Of Joining</label>
                        <input type="date" name="joindate" id=""  value={studentdata.joindate} onChange={changed} />

                        <label htmlFor="">Select the Deparment</label>
                        <select name="dept" id="" required    onChange={changed}>
                            <option value="">--none--</option>
                            <option value="IT">It</option>
                            <option value="Cse">Cse</option>
                            <option value="Aids">AIDS</option>
                            <option value="EEE">EEE</option>
                            <option value="Mech">Mech</option>
                        </select>

                        <label htmlFor="">Select the Year</label>
                        <select name="year" id="" required  onChange={changed}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>

                        <label htmlFor="">Enter the Mobile Number</label>
                        <input type="number" required name="mobileno"  value={studentdata.mobileno} onChange={changed} />

                        <label htmlFor="">Enter the Email Id</label>
                        <input type="email"  required name="email"  value={studentdata.email} onChange={changed}/>

                        <label htmlFor="">Enter the Parents Name</label>
                        <input type="text" required name="parentname"  value={studentdata.parentname} onChange={changed}/>

                        <label htmlFor="">Enter the Parents Mobile Number</label>
                        <input type="number" required name="parentno"  value={studentdata.parentno} onChange={changed}/>

                        <label htmlFor="">Bording Point Name</label>
                        <input type="text" required name="bording"  value={studentdata.bording} onChange={changed}/>

                        <label htmlFor="">Bording Point Pincode</label>
                        <input type="text" required name="pincode"  value={studentdata.pincode} onChange={changed}/>

                        <label htmlFor="">Enter the Password</label>
                        <input type="text"  required name="password"  value={studentdata.password} onChange={changed}/>

                        <label htmlFor="">Confirm Password</label>
                        <input type="text" required name="confirmpassword"  value={studentdata.confirmpassword} onChange={changed}/>

                        <p style={{gridColumn:"1 /-1",color:"red"}}>Note : Once Your Detailed is Submited the details are
                            validated by Transport Incharge then only your access is 
                            allowed to this portal , Make Sure Your detailed are correct
                            , Once validation Successfull You will get the Mail or Sms as per
                            your entered details contacts , If you Have Any Querry Fell Free to contacts
                            by <a href=""> click me </a>
                        </p>
                        <input id="check" type="checkbox" name="note" style={{boxShadow:"none"}}  value={studentdata.note} onChange={changed} required/>
                        <label htmlFor="check" style={{color:"orange",cursor:"pointer"}}>Once Agree Above Detail Please Select the Check Box for Verification</label>
                        
                        <button>Submit</button>
                    </form>
                </div>
            </div>
            
        
    )
}