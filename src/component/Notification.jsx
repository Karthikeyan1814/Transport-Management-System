import "../styles/Notification.css"
import { useState } from "react"
import { FaBell } from "react-icons/fa6"

export default function Notification() {

    const [notifyData, setNotifyData] = useState({
        0: { id: 0, title: "College Fest", isread: false ,context:"ihzsqiuewhiuehiuxqhwiuehiuxqhew"},
        1: { id: 1, title: "Culturals", isread: false  ,context:"ihzsqiuewhiuehiuxqhwiuehiuxqhew"},
        2: { id: 2, title: "Science Expo", isread: false  ,context:"ihzsqiuewhiuehiuxqhwiuehiuxqhew"}
    })

    const [activeId, setActiveId] = useState(null)

    const activearea = (id) => {
        setActiveId(
            activeId === id ? null : id
        )
        setNotifyData(prev => ({

            ...prev,

            [id]: {
                ...prev[id],
                isread: true
            }

        }))
    }

    return (
        <div className="notification-container">

            <h2 style={{
                display: "flex",
                gap: "30px",
                marginBottom: "20px"
            }}>
                <FaBell color="var(--accent)" size={33} />
                Notifications
            </h2>

            <div className="notification-list">

                {Object.values(notifyData).map((data) => (

                    <div
                        className="notifycard"
                        key={data.id}
                        onClick={() => activearea(data.id)}
                    >

                        <div className="notify-header">

                            <h2>{data.title}</h2>

                            <section className="row-align">
                                <h4>{data.time}</h4>
                                {!data.isread && <div className="yellowdot">
                                </div>}
                            </section>

                        </div>

                        {activeId === data.id && (
                            <div className="notify-content">
                                {data.context}
                            </div>
                        )}

                    </div>

                ))}

            </div>

        </div>
    )
}