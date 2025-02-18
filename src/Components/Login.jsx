import axios from "axios";
import React, { useState } from "react";
import "./Login.css"; // Import the CSS file

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = () => {
        const payload = { email, password };

        axios
            .post("https://api.escuelajs.co/api/v1/auth/login", payload)
            .then((res) => {
                console.log(res);
                localStorage.setItem("token", JSON.stringify(res.data.access_token));
                alert("Login Success");
                console.log("Login Successful", res);
            })
            .catch((err) => {
                alert("Login Failed");
                console.log("Login Failed", err);
            });
    };

    return (
        <div className="login-container">
            <p className="login-title">Login Page</p>

            <div className="login-input-container">
                <p>Email</p>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="login-input"
                />
            </div>

            <div className="login-input-container">
                <p>Password</p>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="login-input"
                />
            </div>

            <button onClick={handleSubmit} className="login-button">Login</button>
        </div>
    );
};

export default Login;
