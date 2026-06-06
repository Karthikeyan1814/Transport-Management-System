import "../styles/Important.css"
import{FaBell} from "react-icons/fa"
export default function ImportantMessage(){
    return(
        <div className="important-box">
            <section className="importantmsg1">
                 <FaBell id="bell" color="var(--primary)" size={30} />
                <div>
                    <h5 style={{color:"var(--primary)"}}>Important Message</h5>
                <h1>--- Main Tile Of The Message -----</h1>
                <p>--- Main Context ----</p>
                <p>Please plan your travel According</p>
                <button className="home-btn-layout">
                    View Details
                </button>
                </div>
            </section>
            <section className="importantmsg2">
                <img id="important-bus" src="main-bus.png" alt="" />
            </section>
        </div>
    )
}