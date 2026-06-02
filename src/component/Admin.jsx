import "./Admin.css"
import { useState, useEffect, useRef, Fragment } from "react";
// import { Fragment } from "react";
function Admin() {

    const [formdata, Setformdata] = useState({
        busnumber: "",
        modelname: "",
        numberplate: "",
        usage: "Spare",
        status: "active",
        image: null,
        document: null
    });

    const [message, setMessage] = useState({
        content: "",
        important: true
    })

    const[staffpendingcount,setstaffpendingcount]=useState([]);
    const[staffaprrovedcount,setstaffapprovedcount]=useState([]);
    const [getbus, setgetbus] = useState([])
    const [busNo, setBusNo] = useState("");
    const [stops, setStops] = useState([]);
    const [stopCount, setStopCount] = useState("");
    const [busdata, setBusdata] = useState([]);
    const [fetchstaffdata, Setfetchstaffdata] = useState([]);
    const [Approvedstaffdata, SetApprovedstaffdata] = useState([]);
    const [noreq, setNoreq] = useState(false);
    const isfirstrender = useRef(true);

    //? Button Action For Tables 
    const [activeBtn, setActiveBtn] = useState(null);
    const [studentclicked, setstudentclicked] = useState(false);

    //? Teble Activate 
    const [activeSection, setActiveSection] = useState(null);

    //?  Array Containers
    const [stdcontainer, setstdcontainer] = useState([]);
    const [fetchbusdata, Setfetchbusdata] = useState([]);

    //! Get staff details
    const staffrequest = () => {
        console.log("staff request btn triggred")
        setActiveSection("staffreq")
        fetch("https://transport-management-system-backend-production.up.railway.app/Staffreq")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const pending = data.filter(v => v.status === "pending")
                const Approved = data.filter(v => v.status !== "pending")
                setstaffpendingcount(pending);
                setstaffapprovedcount(Approved);
                Setfetchstaffdata(data);
                // SetApprovedstaffdata(Approved);
            })
    }




    const triggred = async (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append("busnumber", formdata.busnumber);
        data.append("modelname", formdata.modelname);
        data.append("numberplate", formdata.numberplate);
        data.append("usage", formdata.usage);
        data.append("status", formdata.status);
        data.append("image", formdata.image);
        data.append("document", formdata.document);

        try {
            const res = await fetch("https://transport-management-system-backend-production.up.railway.app/Savebusdetails", {
                method: "POST",
                body: data   // ⚠️ DO NOT set Content-Type
            });

            const msg = await res.text();
            console.log(msg);

        } catch (err) {
            console.log(err);
        }
    };

    const approve = (id) => {
        fetch(`http://localhost:8080/Changeapprove?id=${id}`,
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
        document.getElementById("staff_req_tri").click();

    }
    const reject = (id) => {
        fetch(`http://localhost:8080/Changereject?id=${id}`,
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
        document.getElementById("staff_req_tri").click();

    }
    const handlechange = (e) => {
        const { name, value, files } = e.target;

        if (files) {
            Setformdata(prev => ({
                ...prev,
                [name]: files[0]   // store actual File object
            }));
        } else {
            Setformdata(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const messagehandle = (e) => {
        const { name, value } = e.target;
        setMessage({ ...message, [name]: value });
        console.log("object updated ", message)
    }

    

    const message_triggred = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/CreateNewMessage",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(message)
            }
        )
            .then(res => res.text())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }



  
    // create stops based on number input
    const generateStops = () => {
        const arr = [];
        for (let i = 0; i < Number(stopCount); i++) {
            arr.push({ name: "", time: "" });
        }
        setStops(arr);
    };

    // update stop value
    const handleStopChange = (index, field, value) => {
        const updated = [...stops];
        updated[index][field] = value;
        setStops(updated);
    };

    // add one stop manually
    const addStop = () => {
        setStops([...stops, { name: "", time: "" }]);
    };

    // remove stop
    const removeStop = (index) => {
        const updated = stops.filter((_, i) => i !== index);
        setStops(updated);
    };

  

    // final submit
    const handleStopSubmit = (e) => {
        e.preventDefault();

        const finalData = {
            busNo,
            stops
        };

        console.log("FINAL ROUTE DATA:", finalData);
        fetch("http://localhost:8080/saveRoute", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(finalData)
        }).then(res => res.text()).then(data => alert(data))
    };

        //! GEt Student Detail
    const stdrequest = () => {
        setActiveSection("student")

        console.log("veiw student triggred")
        fetch("http://localhost:8080/Studentreq")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const Approved = data.filter(v => v.status === "Approved")
                setstdcontainer(Approved);

                if (Approved.length == 0) {
                    alert("No Records Found");

                }


            })

    }

    //! get bus detail
    const getbusdet = async () => {
        console.log("bus get btn triggred")
        const res = await fetch("http://localhost:8080/getroute");
        const data = await res.json();
        console.log(data);
        setgetbus(data);

    }
      //! GET BUS DOCUMENT
    const busdetreq = async () => {

        console.log("bus detail btn triggred")
        const res = await fetch("http://localhost:8080/viewbus");
        const data = await res.json();
        console.log(data);
        setBusdata(data);
    }

    //! getting all counts for display
      useEffect(()=>{
        getbusdet();
        stdrequest();
        staffrequest();

    },[])
    return (
        <div className="admin-container">
            <nav>
                <h1>Admin</h1>
                <ul>
                    <li>Send Message To All</li>
                    <li>Send Message To Staffs</li>
                    <li style={{ color: "red" }}>Logout</li>
                </ul>
            </nav>
            <section className="head">
                <div className="abt-val">
                    <h3>Total No <br />Student</h3>
                    <h1>{stdcontainer.length}</h1>
                </div>
                <div className="abt-val">
                    <h3>Total No <br /> Staffs</h3>
                    <h1>{staffaprrovedcount.length}</h1>
                </div>
                <div className="abt-val">
                    <h3>Total No <br /> buses</h3>
                    <h1>{getbus.length}</h1>
                </div>
                <div className="abt-val">
                    <h3>Total No of <br /> New Request</h3>
                    <h1>{staffpendingcount.length}</h1>
                </div>
            </section>
            <section className="admin-data-box">
                <div className="admin-box-btn">
                    <button id="reg-btns" className={activeBtn === "bus" ? "active" : ""}
                        onClick={() => { setActiveBtn("bus"); setActiveSection("busreg") }}>Register Bus</button>

                    <button id="route-btns" className={activeBtn === "route" ? "active" : ""}
                        onClick={() => { setActiveBtn("route"); setActiveSection("route"); busdetreq() }}>Add Route</button>

                    <button id="stf-btns" className={activeBtn === "staffsbtn" ? "active" : ""}
                        onClick={(e) => { setActiveBtn("staffsbtn"); staffrequest() }}>Veiw Staff Details & Request</button>

                    <button id="std-btns" className={activeBtn === "student" ? "active" : ""}
                        onClick={(e) => { setActiveBtn("student"); stdrequest() }}>Veiw Student Details </button>

                    <button id="bus-btns" className={activeBtn === "busdet" ? "active" : ""}
                        onClick={() => { setActiveBtn("busdet"); setActiveSection("getbus"); getbusdet() }}>Veiw Bus Detail</button>

                    <button id="doc-btns" className={activeBtn === "busdoc" ? "active" : ""}
                        onClick={() => { setActiveBtn("busdoc"); busdetreq(); setActiveSection("bus_details"); }}>View Bus Documnents</button>
                </div>
                <div className="admin-table-container" style={{
                    marginTop: "20px",
                    minHeight: "100px",
                    maxHeight: "500px",
                    overflowY: "auto"
                }}>

                    {activeSection === "student" && <table width="100%" cellPadding="" id="std-tbl">

                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Mobile Number</th>
                                <th>Year Of Study</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stdcontainer.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.firstname}{item.lastname}</td>
                                    <td>{item.dept}</td>
                                    <td>{item.mobileno}</td>
                                    <td>{item.year}</td>
                                </tr>

                            ))}
                        </tbody>
                    </table>}
                    {activeSection === "busreg" &&
                        <section>
                            <h1 id="admin-cont-title" style={{ marginLeft: "35%" }}>Register Bus Details </h1>
                            <form onSubmit={triggred} id="bus_form" className="admin-form-layout">

                                <label>Bus Number : </label>
                                <input type="text" required name="busnumber" value={formdata.busnumber} onChange={handlechange}></input>

                                <label>Bus Model Name :</label>
                                <input type="text" required name="modelname" value={formdata.modelname} onChange={handlechange}></input>

                                <label>Bus Number Plate Details :</label>
                                <input type="text" required name="numberplate" value={formdata.numberplate} onChange={handlechange}></input>

                                <label>Bus Usage For :</label>
                                <select name="usage" value={formdata.usage} onChange={handlechange}>
                                    <option>Spare</option>
                                    <option>Student</option>
                                    <option>Staffs</option>
                                </select>

                                <label>Bus Status :</label>
                                <div className="radio-div"><label>
                                    <input type="radio" name="status" value="active" onChange={handlechange} /> Currently Active
                                </label>
                                    <label>
                                        <input type="radio" name="status" value="notactive" onChange={handlechange} /> Not Active
                                    </label></div>

                                <label>Bus Image :</label>
                                <input type="file" accept="image/*" required name="image" onChange={handlechange}></input>

                                <label>Bus Documents Pdf Only :</label>
                                <input type="file" accept=".pdf" required name="document" onChange={handlechange}></input>
                                <span></span>
                                <button type="submit" style={{ width: "100px", borderRadius: "5px", backgroundColor: "gold", border: "none", height: "25px  " }}>Save Details</button>
                            </form>
                        </section>
                    }

                    {activeSection === "staffreq" && <table width="100%" cellPadding="1" id="stf-tbl">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Role In Acadamic</th>
                                <th>Transportation Role</th>
                                <th>Mobile No</th>
                                <th>Email</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fetchstaffdata.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.firstname}{item.lastname}</td>
                                    <td>{item.dept}</td>
                                    <td>{item.role}</td>
                                    <td>{item.transportrole}</td>
                                    <td>{item.mobileno}</td>
                                    <td>{item.email}</td>
                                    {item.status !== "pending" ? (<td>{item.status}</td>) : (<td><button onClick={() => approve(item.id)}>✅</button>
                                        <button onClick={() => reject(item.id)}>❌</button></td>)}
                                </tr>

                            ))
                            }
                        </tbody>
                    </table>}

                    {activeSection === "bus_details" && <table width="100%" cellPadding="1" id="bus_tbl_det">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Bus Id</th>
                                <th>Bus Number</th>
                                <th>Model Name</th>
                                <th>Reg .No</th>
                                <th>Current Usage</th>
                                <th>Current Status</th>
                                <th>Bus Image</th>
                                <th>Documents</th>

                            </tr>
                        </thead>
                        <tbody>

                            {busdata.map((bus, index) => (
                                <tr key={bus.id} >
                                    <td>{index + 1}</td>
                                    <td>{bus.id}</td>
                                    <td>{bus.busnumber}</td>
                                    <td>{bus.modelname}</td>
                                    <td>{bus.numberplate}</td>
                                    <td>{bus.usage}</td>
                                    <td>{bus.status}</td>
                                    <td >
                                        <img
                                            src={`http://localhost:8080${bus.image}`}
                                            height="100"

                                        />
                                    </td>
                                    <td>
                                        <a href={`http://localhost:8080${bus.document}`} target="_blank">
                                            <button style={{}} id="bus_btn_1">
                                                View PDF
                                            </button>

                                        </a>
                                    </td>

                                </tr>

                            ))}

                        </tbody>
                    </table>}
                    {activeSection === "route" && <form onSubmit={handleStopSubmit} style={{ marginBottom: "100px" }}>
                        <h1 id="admin-cont-title">Add Route</h1>
                        <section id="route_count">
                            <label htmlFor="">Select The Bus No </label>
                            <select value={busNo} onChange={(e) => setBusNo(e.target.value)}>
                                <option value="">--buses--</option>
                                {busdata.map((data, index) => (
                                    <option>{data.busnumber}</option>
                                ))}
                            </select>


                            {/* STOP COUNT */}
                            <label>How many stops?</label>
                            <input
                                type="number"
                                value={stopCount}
                                onChange={(e) => setStopCount(e.target.value)}
                            />

                            <button type="button" onClick={generateStops} id="rbtn">
                                Create Stops
                            </button>
                        </section>

                        <hr style={{ width: "60%", marginTop: "3%", border: "1px dotted gray" }} />

                        <section id="route_dis">
                            {/* STOPS LIST */}
                            {stops.map((stop, index) => (
                                <div id="route_dis_content" key={index} style={{
                                    border: "1px solid #ccc",
                                    padding: "10px",
                                    marginBottom: "20px",
                                    borderRadius: "8px"
                                }}>

                                    <label>Route {index + 1}</label>
                                    <input
                                        type="text"
                                        placeholder="Stop name"
                                        value={stop.name}
                                        onChange={(e) => handleStopChange(index, "name", e.target.value)}
                                    />

                                    <label>Time</label>
                                    <input
                                        type="time"
                                        value={stop.time}
                                        onChange={(e) => handleStopChange(index, "time", e.target.value)}
                                    />

                                    <button id="rbtn" style={{ backgroundColor: "red", color: "white" }} type="button" onClick={() => removeStop(index)}>
                                        Remove
                                    </button>

                                </div>
                            ))}

                            {/* ADD EXTRA ROUTE */}
                            <section style={{ display: "flex", justifyContent: "space-around" }}>
                                <button type="button" style={{ backgroundColor: "skyblue", color: "white" }} id="rbtn" onClick={addStop}>
                                    + Add Route
                                </button>

                                <button id="rbtn" style={{ backgroundColor: "green", color: "white" }} type="submit">Save Route</button>
                            </section>
                        </section>

                    </form>}

                    {activeSection === "getbus" && <table id="getbus_dis"  cellPadding={3}>
                        <tbody>
                            {console.log("section activated")}
                            {getbus.map((list, index) => (
                                <Fragment key={index}>
                                    <tr style={{height:"60px",backgroundColor:"skyblue",fontSize:"25px"}}>
                                        <td  style={{textAlign:"left",paddingLeft:"50px"}} colSpan={3}>{list.busNo}</td>
                                    </tr>


                                    {list.stops.map((data) => (

                                        <tr>
                                            <td>Stop No {data.id}</td>
                                            <td>Stop Location : <b> {data.name?.toUpperCase()}</b></td>

                                            <td>Time of Arival {data.time}</td>
                                        </tr>
                                    ))}
                                </Fragment>

                            ))}
                        </tbody>
                    </table>}



                </div>
            </section>


        </div>
    )
}

export default Admin;