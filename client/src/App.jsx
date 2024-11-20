import { useEffect, useState } from "react";
import "./App.css";

function App() {
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
        console.log("res: ", res);

        const data = await res.json();
        console.log("data:", data);
        setData(JSON.stringify(data));
    }

    useEffect(() => {
        server();
    }, []);
    return (
        <>
            <h1>Always Appears</h1>

            <p>{`${data}`}</p>
        </>
    );
}

export default App;
