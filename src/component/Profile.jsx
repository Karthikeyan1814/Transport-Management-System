import { useState } from "react"
import "../styles/Profile.css"

export default function Profile() {

    const [editMode, setEditMode] = useState(false)

    const [user, setUser] = useState({

        domain: "student",
        firstname: "Karthikeyan",
        lastname: "M",
        email: "karthi23@gmail.com",
        phone: "9876543210",
        dob: "2004-09-14",
        dept: "Information Technology",
        currentyear: "3",
        parentname: "Murugan",
        parentmobile: "9876543000",
        address: "Salem,Tamil Nadu",
        pincode: "636001",
        bordingpoint: "New Bus Stand",
        organization: "ABC Engineering College"

    })

    const handleChange = (e) => {

        const { name, value } = e.target

        setUser(prev => ({
            ...prev,
            [name]: value
        }))

    }

    return (

        <div className="profile-container">

            <div className="profile-header">

                <div className="profile-info">

                    <h1>
                        {user.firstname} {user.lastname}
                    </h1>

                    <p>{user.domain}</p>

                    <span>{user.email}</span>

                </div>

                <img
                    src="https://i.pravatar.cc/150"
                    alt=""
                    className="profile-image"
                />

            </div>


            <div className="edit-section">

                <button
                    onClick={() => setEditMode(!editMode)}
                >

                    {
                        editMode
                            ?
                            "Save Changes"
                            :
                            "Edit Profile"
                    }

                </button>

            </div>


            <div className="profile-form">

                <div className="input-group">

                    <label>First Name</label>

                    <input
                        name="firstname"
                        value={user.firstname}
                        onChange={handleChange}
                        disabled={!editMode}
                    />

                </div>


                <div className="input-group">

                    <label>Last Name</label>

                    <input
                        name="lastname"
                        value={user.lastname}
                        onChange={handleChange}
                        disabled={!editMode}
                    />

                </div>


                <div className="input-group">

                    <label>Phone</label>

                    <input
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        disabled={!editMode}
                    />

                </div>


                <div className="input-group">

                    <label>Department</label>

                    <input
                        name="dept"
                        value={user.dept}
                        onChange={handleChange}
                        disabled={!editMode}
                    />

                </div>


                <div className="input-group">

                    <label>Current Year</label>

                    <input
                        name="currentyear"
                        value={user.currentyear}
                        onChange={handleChange}
                        disabled={!editMode}
                    />

                </div>


                <div className="input-group">

                    <label>Parent Name</label>

                    <input
                        name="parentname"
                        value={user.parentname}
                        onChange={handleChange}
                        disabled={!editMode}
                    />

                </div>


                <div className="input-group">

                    <label>Address</label>

                    <textarea
                        name="address"
                        value={user.address}
                        onChange={handleChange}
                        disabled={!editMode}
                    />

                </div>

            </div>

        </div>

    )

}