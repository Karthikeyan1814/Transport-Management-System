import "./Staffpanel.css"
import { useState, useEffect } from "react";
import { Fragment } from "react";

export default function StaffPanel() {
    const [fetchdata, Setfetchdata] = useState([]);
    const [Approveddata, SetApproveddata] = useState([]);

    const stdrequest = (e) => {
        console.log("request btn triggred");
        const value = e.target.value;
        if (value == "0") {
        fetch("https://transport-management-system-backend-production.up.railway.app/Studentreq")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const pending = data.filter(v => v.status === "pending");
                const Approved = data.filter(v => v.status !== "pending")
                Setfetchdata(pending);
                SetApproveddata(Approved);
                 if(pending.length==0){
                alert("No Records Found")
                }
            })
              e.target.value = 1;
            e.target.innerText = "Hide Request"
           
        } else {
            Setfetchdata([]);
            e.target.value = 0;
            e.target.innerText = "Click Here to View Request "
        }

    }
    useEffect(() => {
        console.log("Pending requests:", fetchdata);
    }, [fetchdata]);

    useEffect(() => {
        console.log("Approved requests:", Approveddata);
    }, [Approveddata]);


    const approve = (id) => {
        fetch(`https://transport-management-system-backend-production.up.railway.app/ChangeStdapprove?id=${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            .then(res => res.text())
            .then(data => {
                alert(data);
            })
            .catch(err => console.log(err));
            document.getElementById("std-load").click();
            
    }
    const reject = (id) => {
        fetch(`https://transport-management-system-backend-production.up.railway.app/ChangeStdreject?id=${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            .then(res => res.text())
            .then(data => {
                alert(data);
            })
            .catch(err => console.log(err));
           document.getElementById("std-load").click();

    }
    return (
        <div className="std-request-container">
            <header className="staff-header">
                <h1>Staff Panel</h1>
            </header>
            <div className="std-req-box">
                <h1>View the Student Request</h1>
                <button onClick={stdrequest} id="std-load"> Click here to load</button>
                <p style={{ color: "red" }}>Note : Approve only all applied details are correct</p>

                <div className="Pending-box">
                    {fetchdata.length > 0 &&
                        <table className="req-cont req-block">
                            <tbody className="std-cont">
                                {fetchdata.map((item, index) => (
                                    <Fragment>
                                        <tr>
                                            <td>{index + 1}.</td>
                                            <td>{item.firstname} {item.lastname}</td>
                                            <td>Email</td>
                                            <td>{item.email}</td>
                                        </tr>

                                        <tr>
                                            <td>Mobile Number</td>
                                            <td>{item.mobileno}</td>
                                            <td>Department</td>
                                            <td>{item.dept}</td>
                                        </tr>

                                        <tr>
                                            <td>Year Of Study</td>
                                            <td>{item.year}</td>
                                            <td> JoinDate</td>
                                            <td> {item.joindate}</td>
                                        </tr>

                                        <tr>
                                            <td>Parent Name</td>
                                            <td> {item.parentname}</td>
                                            <td>Parent Number</td>
                                            <td>{item.parentno}</td>
                                        </tr>
                                        <tr>
                                            <td>Current Status</td>
                                            <td>{item.status}</td>
                                        </tr>
                                        <tr style={{ borderBottom: "2px solid black", backgroundColor:"lightgoldenrodyellow"}}>
                                            <td colSpan={2}>
                                                <button onClick={() => approve(item.sid)} style={{ backgroundColor: "green" ,color:"#ffffff"}}>Approved</button>
                                                <button tton onClick={() => reject(item.sid)} style={{ backgroundColor: "red" ,color:"#ffffff" }} >Reject</button>
    
                                            </td>
                                        </tr>
                                    </Fragment>
                                ))}
                            </tbody>
                        </table>}
                </div>
            </div>
        </div>
    )
}