import "../styles/Attendance.css"
export default function ShareAttendance(){
    return(
        <div className="share-att-container">
            <h2>Create New Attendence</h2>
            <form action="" className="share-att-form">
                <input type="text"placeholder="Attendance Title ...." />
                <input type="time" placeholder="Select the Time Of Expire this Attedence"></input>
                <p>Note : After Click Submit , You Will Receive 6 Digit Attendence Code in Popup And Dashboard It Self</p>
                <button className="submit-btn">Submit -&gt;</button>
            </form>
            <div className="veiw-attendance-Data">
                
            </div>
        </div>
    )
}