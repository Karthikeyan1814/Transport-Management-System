import { useState } from "react"
import "../styles/Route.css"
export default function RoutesData(){
     const [obj,setRouteData]=useState([
            {
                routeno:2310,
                busno:"B234",
                routename:"Salem -> College",
                pickup:"Salem Junction",
                drop:"COllege",
                time:"8.00",
                status:"active",
                stops:[]
            },
            {
                routeno:2310,
                busno:"B234",
                routename:"Salem -> College",
                pickup:"Salem Junction",
                drop:"COllege",
                time:"8.00",
                status:"active",
                stops:[]
            },
            {
                routeno:2310,
                busno:"B234",
                routename:"Salem -> College",
                pickup:"Salem Junction",
                drop:"COllege",
                time:"8.00",
                status:"active",
                stops:[]
            }
         ]);
    return(
        <div >
               <h2 style={{padding:"30px"}}>Avaliable Routes</h2>
            <table className="routes-table-data">
              
                <thead>
                    <tr>
                        <th>Routes No</th>
                        <th>Bus Number</th>
                        <th>Route Name</th>
                        <th>Pickup Point</th>
                        <th>Drop Point</th>
                        <th>Timing </th>
                        <th>Status</th>
                    </tr>
                </thead>
                 {/* routeno:0,
            busno:0,
            routename:"",
            pickup:"",
            drop:"",
            time:"",
            stops:[] */}
                <tbody>
                 {obj.map((data,index)=>(
                    <tr className="routes-rows" key={index}>
                        <td>{data.routeno}</td>
                        <td>{data.busno}</td>
                        <td>{data.routename}</td>
                        <td>{data.pickup}</td>
                        <td>{data.drop}</td>
                        <td>{data.time}</td>
                        <td>{data.status}</td>
                    </tr>
                 ))}
                </tbody>
                <span style={{color:"var(--accent)",marginTop:"30px"}}>View All -&gt;</span>
            </table>
            
        </div>
    )
}