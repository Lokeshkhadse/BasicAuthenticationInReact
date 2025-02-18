import axios from "axios";
import React, { useState } from "react";
import "./Profile.css"; // Import the CSS file

const Profile = () => {
    const [userData, setUserData] = useState();

    const getProfileData = () => {
        const token = JSON.parse(localStorage.getItem("token"));

        const header = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .get("https://api.escuelajs.co/api/v1/auth/profile", header)
            .then((res) => {
                setUserData(res.data);
                console.log("profile data", res);
            })
            .catch((err) => {
                alert("You are not logged in");
                console.log("Error occurred", err);
            });
    };

    const handleLogout = () => {
        setUserData();
        localStorage.removeItem("token");
        alert("Log out success");
    };

    return (
        <div className="profile-container">
            <button className="profile-button get-profile" onClick={getProfileData}>
                Get Profile Data
            </button>
            <button className="profile-button logout" onClick={handleLogout}>
                Log Out
            </button>

            {userData && (
                <div className="profile-details">
                    <p>Name: {userData?.name || "N/A"}</p>
                    <p>Email: {userData?.email || "N/A"}</p>
                    <p>Role: {userData?.role || "N/A"}</p>
                    <img
                        className="profile-avatar"
                        src={userData?.avatar}
                        alt="Avatar"
                    />
                </div>
            )}
        </div>
    );
};

export default Profile;
