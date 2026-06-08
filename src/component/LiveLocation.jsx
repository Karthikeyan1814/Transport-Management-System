import { FaLocationArrow } from "react-icons/fa6"
import { useState } from "react"
import "..//styles//Location.css"
export default function LiveLocation(){
    const [previous,setPrevious]=useState([{
        link:"www.iuhhjiwhedjihjiwhd.com",
        time:"10.00 PM"
    },
{
        link:"www.iuhhjiwhedjihjiwhd.com",
        time:"10.00 PM"
    },
{
        link:"www.iuhhjiwhedjihjiwhd.com",
        time:"10.00 PM"
    }])
    return(
        <div className="location-container">
            <section className="location-sec1">
                <FaLocationArrow color="var(--accent)" size={33} ></FaLocationArrow>
                <h2>Live Location Sharing</h2>
            </section>
            <form action="" className="location-form">
                <input type="text" placeholder="Paste Live Location Link Here" />
                <button className="location-btn">Share Location</button>
            </form>
            <hr style={{ width:"100%", alignItems:"center", border:"1px solid var(--accent)"}} />
            <section className="previous-links">
                <h3>Recently Shared Links</h3>
                {previous.map((data,index)=>(
                    <div key={index}>
                    <a style={{color:"blue",fontFamily:"var(--font3)",textDecorationLine:"underline"}}>{data.link}</a>
                    <p>{data.time}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}