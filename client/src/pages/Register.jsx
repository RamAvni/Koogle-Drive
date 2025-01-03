import { useNavigate } from "react-router-dom";
import "./stylesheets/utilities/form.css";
import { useState } from "react";
function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleRegistration(e) {
    e.preventDefault();
    postInfoToServer();
  }

  async function postInfoToServer() {
    const res = await fetch("http://localhost:3000/register", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (res.status === 401) throw new Error("User already exists.");
    console.log(res.status);
    console.log("made it passed the check");

    if (res.status === 200) {
      let user = await res.json();
      navigate(`/users/${user.username}`);
    }
  }

  return (
    <div className="register">
      <form onSubmit={handleRegistration}>
        <label>Username</label>
        <input type="text" required value={username} onChange={({ target }) => setUsername(target.value)} />
        <label>Password</label>
        <input type="password" required value={password} onChange={({ target }) => setPassword(target.value)} />
        <button>Submit</button>
      </form>

      <button onClick={() => navigate("/login")}>{`Got an account?`}</button>
    </div>
  );
}

export default Register;
