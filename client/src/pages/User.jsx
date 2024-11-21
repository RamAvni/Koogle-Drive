/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import File from "../components/File";

function User() {
<<<<<<< HEAD
  const [files, setFiles] = useState([]);
  console.log("files: ", files);
  const { username } = useParams();
=======
    const [files, setFiles] = useState([]);
    let { username } = useParams();
>>>>>>> cf6c84d8575d89e7a274ec213118c82928500da8

    useEffect(() => {
        postInfoToServer(username);
    }, []);

<<<<<<< HEAD
  async function postInfoToServer(username) {
    const res = await fetch(`http://localhost:3000/users/${username}`);
    const data = await res.json();
    setFiles(data);
  }
  return (
    <>
      <ul>
        {files &&
          files.map((file) => (
            <li>
              <NavLink to={file.name}>{file.name}</NavLink>
            </li>
          ))}
      </ul>
    </>
  );
=======
    async function postInfoToServer(username) {
        const res = await fetch(`http://localhost:3000/users/${username}`);
        const data = await res.json();
        setFiles(data);
    }
    return <>{files && files.map((file) => <p>{file.name}</p>)}</>;
>>>>>>> cf6c84d8575d89e7a274ec213118c82928500da8
}

export default User;
