
import { useState } from "react"
import "../styles/Message.css"

export default function Message() {

    const [chatData, setChatData] = useState({

        1: {
            id: 1,
            name: "John",
            messages: [
                {
                    id: 1,
                    text: "Hey bro",
                    type: "received"
                },
                {
                    id: 2,
                    text: "Hi!",
                    type: "sent"
                },
                {
                    id: 3,
                    text: "Are you coming today?",
                    type: "received"
                }
            ]
        },

        2: {
            id: 2,
            name: "Alex",
            messages: [
                {
                    id: 1,
                    text: "Bus reached?",
                    type: "received"
                },
                {
                    id: 2,
                    text: "Almost there",
                    type: "sent"
                }
            ]
        },

        3: {
            id: 3,
            name: "David",
            messages: [
                {
                    id: 1,
                    text: "Project submitted?",
                    type: "received"
                }
            ]
        }

    })

    const [text, setText] = useState("")
    const [currentChat, setCurrentChat] = useState(1)

    const sendMessage = (e) => {
        e.preventDefault()

        if (!text.trim()) return

        setChatData(prev => ({

            ...prev,

            [currentChat]: {

                ...prev[currentChat],

                messages: [

                    ...prev[currentChat].messages,

                    {
                        id: Date.now(),
                        text: text,
                        type: "sent"
                    }

                ]

            }

        }))

        setText("")
    }

    return (

        <div className="message-container">

            <div className="message-layout">
                {/* Left side chat list */}

                <div className="chat-list">

                    {
                        Object.values(chatData).map(user => (

                            <div
                                key={user.id}
                                className="chat-card"
                                onClick={() => setCurrentChat(user.id)}
                            >

                                <h3>{user.name}</h3>

                                <p>
                                    {user.messages[
                                        user.messages.length - 1
                                    ]?.text}
                                </p>

                            </div>

                        ))
                    }

                </div>


                {/* Right side messages */}

                <div className="chat-window">

                    <h2>
                        {chatData[currentChat].name}
                    </h2>

                    <div className="message-area">

                        {

                            chatData[currentChat]
                                .messages
                                .map(msg => (

                                    <div
                                        key={msg.id}
                                        className={
                                            msg.type === "sent"
                                                ? "sent"
                                                : "received"
                                        }
                                    >

                                        {msg.text}

                                    </div>

                                ))


                        }
                        <div className="sending-area">

                            <form onSubmit={sendMessage}>

                                <input
                                    type="text"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    placeholder="Type message..."
                                />

                                <button className="report-btn" style={{borderRadius:"10px"}} type="submit">
                                    Send
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}