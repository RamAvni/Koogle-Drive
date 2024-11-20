import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState("");
    async function server() {
        const res = await fetch("http://localhost:3000/users", {
            method: "POST",
            body: JSON.stringify({
                userId: 1,
                title: "Demo Todo Data",
                completed: false,
            }),
            headers: {
                "Content-type": "application/json",
            },
        });
        const data = await res.json();
        setData(data);
    }
    server();
    return (
        <>
            <h1>Always Appears</h1>

            <p>{`${data}`}</p>
        </>
    );
}

export default App;
