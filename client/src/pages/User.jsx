import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function User() {
  const [files, setFiles] = useState();
  let { username } = useParams();

  useEffect(() => {
    postInfoToServer(username);
  }, []);

  async function postInfoToServer(username) {
    const res = await fetch(`http://localhost:3000/users/${username}`);
    const data = await res.json();
    setFiles(data);
  }
  return <h1>{`${files}`}</h1>;
}

export default User;
