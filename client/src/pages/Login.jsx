import "./stylesheets/utilities/form.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();
        postInfoToServer();
    }

    async function postInfoToServer() {
        const res = await fetch("https://localhost:3000/login", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password,
            }),
            headers: {
                "Content-type": "application/json",
            },
        });
        console.log(res.status);
    }

    return (
        <div className="login">
            <form onSubmit={handleLogin}>
                <label>Username</label>
                <input type="text" required value={username} onChange={({ target }) => setUsername(target.value)} />
                <label>Password</label>
                <input type="password" required value={password} onChange={({ target }) => setPassword(target.value)} />
                <button>Submit</button>
            </form>

            <button onClick={() => navigate("/register")}>{`Haven't Registered yet?`}</button>
        </div>
    );
}

export default Login;
