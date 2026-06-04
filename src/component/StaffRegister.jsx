import { useState, useEffect } from "react"
import "./StaffRegister.css"
import { setStaffs } from "../api/staffsApi"
export default function StaffRegister() {


    const [staffdetail, setStaff] = useState({
        firstname: "",
        lastname: "",
        email: "",
        mobile: 0,
        dept: "",
        role: "",
        empid: "",
        password: "",
        confirmpassword: "",
        transportrole: "",
        status: "pending"

    })
 
    const stafftriggred = async(e) => {
        e.preventDefault();

        try{
            const result = await setStaffs(staffdetail);
            console.log(result);
            alert("Staff Registration Successfull");
            setStaff(staffdetail);
        }catch(error){
            console.log(error)
            alert("Somthing Went Wrong !")
        }
        // fetch("https://transport-management-system-backend-production.up.railway.app/SaveStaffDetail",
        //     {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(staffdetail)
        //     }
        // )
        //     .then(res => res.text())
        //     .then(data => {
        //         console.log(data);
        //         alert("Saved Successfully ✅");
        //         window.location.reload();
        //     })
        //     .catch(err => console.log(err))

    }

    const detailhandle = (e) => {
        const { name, value } = e.target;
        setStaff({ ...staffdetail, [name]: value })

    }


    return (
        <div className="staff-container">
             <header>
                    <h1>Welcome To XXX College of Engineering </h1>
                    <h2>Transport Management System</h2>
                    <p>Path to Success , Stay Connect With Us</p>
                </header>
                <h1 style={{textAlign:"center"}} id="staff-reg"> Staff Register</h1>
            <form action="" onSubmit={stafftriggred} className="staff-register-layout">
                <label htmlFor="">Enter Your First Name</label>
                <input type="text" required name="firstname" value={staffdetail.firstname} onChange={detailhandle} />
                <label htmlFor="">Enter Your Last Name</label>
                <input type="text" required name="lastname" value={staffdetail.lastname} onChange={detailhandle} />
                <label htmlFor="">Enter the Email</label>
                <input type="email" required name="email" value={staffdetail.email} onChange={detailhandle} />
                <label htmlFor="">Enter the Mobile number</label>
                <input type="number" required name="mobile" value={staffdetail.mobile} onChange={detailhandle} />
                <label htmlFor="">Enter the Depatment</label>
                <input type="text" required name="dept" value={staffdetail.dept} onChange={detailhandle} />
                <label htmlFor="">Enter the Role</label>
                <input type="text" required name="role" value={staffdetail.role} onChange={detailhandle} />
                <label htmlFor="">Enter Your Employee Id</label>
                <input type="text" required name="empid" value={staffdetail.empid} onChange={detailhandle} />
                <label htmlFor="">Enter the Password</label>
                <input type="password" required name="password" value={staffdetail.password} onChange={detailhandle} />
                <label htmlFor="">Enter the Confirm Password</label>
                <input type="text" required name="confirmpassword" value={staffdetail.confirmpassword} onChange={detailhandle} />
                <label htmlFor="">Enter the Transport Position</label>
                <input type="text" required name="transportrole" value={staffdetail.transportrole} onChange={detailhandle} />

                <p style={{color:"red",gridColumn:"1/-1"}}>Note : Once your Are Submitting , Your Activation is Aprroved Based upon Admin validation
                    , Once you Register Try to login After 24hrm .
                </p>
                <button>Register As Staff</button>

            </form>
            
        </div>

    )
}