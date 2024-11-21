import "./stylesheets/utilities/form.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    postInfoToServer();
  }

  async function postInfoToServer() {
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (res.status === 401) throw new Error("Incorrect username/password");
    //console.log(res.body);

    if (res.status === 200) {
      let user = await res.json();
      console.log("user: ", user);
      navigate(`/users/${user.username}`);
    }
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
