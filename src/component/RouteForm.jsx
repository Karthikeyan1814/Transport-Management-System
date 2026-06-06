import { useState } from "react"
import "../styles/Route.css"
export default function RouteForm(){

    const [routeData,setRouteData]=useState({
        routeno:0,
        busno:0,
        routename:"",
        pickup:"",
        drop:"",
        time:"",
        status:"",
        stops:[]
    })

    const [stops,setStops]=useState([]);

    
    const handleRouteData=(e)=>{
        const [name,value]=e.target;
        setRouteData({...routeData,[name]:value});
    }

        // create stops based on number input
    const generateStops = (e) => {
        const arr = [];
        for (let i = 0; i < e; i++) {
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

  

    return(
        //  routeno:0,
        // busno:0,
        // routename:"",
        // pickup:"",
        // drop:"",
        // time:"",
        <div className="route-form-cont">
            <h1 style={{color:"var(--accent)",marginBottom:"50px"}}>Add Routes</h1>
            <form action="">
               <section className="route-top">
                 <label htmlFor="">Route No</label>
                <input type="number" name="routeno" value={routeData.routeno} onChange={handleRouteData}/>

                <label htmlFor="">Bus Number</label>
                <input type="number" name="busno" value={routeData.busno} onChange={handleRouteData} id="" />

                <label htmlFor="">Route Name</label>
                <input type="text" name="routename" value={routeData.routename} onChange={handleRouteData} id="" />

                <label>Pick Up Point</label>
                <input type="text" name="pickup" value={routeData.pickup} onChange={handleRouteData} id="" />

                <label htmlFor="">Drop Point</label>
                <input type="text" name="drop" value={routeData.drop} onChange={handleRouteData} />

                <label htmlFor="">Approx Start Time</label>
                <input type="time" name="time" value={routeData.time} onChange={handleRouteData} id="" />

                <label htmlFor="">Route Status</label>
                <input type="text" name="status" value={routeData.status}  id="" />
                <label htmlFor="">Number of Stops in This Routes</label>                            
                <input type="number" onChange={(e) => generateStops(e.target.value)}/>

               </section>
                {/* <button type="button" style={{ backgroundColor: "skyblue", color: "white" }} id="rbtn" onClick={addStop}>
                                    + Add Route
                                </button>

             */}
            {stops.length !== 0 && <section style={{padding:"30px 0px"}} >
                            {/* STOPS LIST */}
                            <h2>Details of Stops </h2>
                            {stops.map((stop, index) => (
                                <div  key={index} className="route-bottom" >

                                    <label style={{color:"var(--primary)"}}>Stop {index + 1}</label>
                                    <input
                                        type="text"
                                        placeholder="Stop name"
                                        value={stop.name}
                                        onChange={(e) => handleStopChange(index, "name", e.target.value)}
                                    />

                                    <label style={{color:"red"}}>Time</label>
                                    <input
                                        type="time"
                                        value={stop.time}
                                        onChange={(e) => handleStopChange(index, "time", e.target.value)}
                                    />

                                    <button className="red-btn" style={{ backgroundColor: "red", color: "white" }} type="button" onClick={() => removeStop(index)}>
                                        Remove
                                    </button>

                                </div>
                            ))}
                            
                                <button className="home-btn-layout" style={{marginRight:"10px",marginLeft:"85%"}} type="submit">Save Route</button>
                         
                            {/* ADD EXTRA ROUTE */}
                    </section>}
                      

            </form>
        </div>
    )
}