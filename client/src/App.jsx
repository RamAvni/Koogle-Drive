import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
    // const [data, setData] = useState("");
    // async function server() {
    //     const res = await fetch("http://localhost:3000/users", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             userId: 1,
    //             title: "Demo Todo Data",
    //             completed: false,
    //         }),
    //         headers: {
    //             "Content-type": "application/json",
    //         },
    //     });
    //     console.log("res: ", res);

    //     const data = await res.json();
    //     console.log("data:", data);
    //     setData(JSON.stringify(data));
    // }

    // useEffect(() => {
    //     server();
    // }, []);
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
