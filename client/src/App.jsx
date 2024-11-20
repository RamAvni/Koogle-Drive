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
  async function post() {
    const get = await fetch("http://localhost:3000/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        // Check if the response is okay
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the JSON data
      })
      .then((data) => {
        console.log("Fetched users:", data); // Handle the data
        data.forEach((user) => {
          console.log(`User ID: ${user.id}, Name: ${user.name}`);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle errors
      });
  }

  return (
    <>
      <h1>Always Appears</h1>

      <p>{`${data}`}</p>
    </>
  );
}

export default App;
