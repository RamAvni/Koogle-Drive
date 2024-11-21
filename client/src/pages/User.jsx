/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useParams } from "react-router-dom";

import File from "../components/File";

function User() {
  const [files, setFiles] = useState([]);
  console.log("files: ", files);
  const { username } = useParams();

  useEffect(() => {
    postInfoToServer(username);
  }, []);

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
  async function postInfoToServer(username) {
    const res = await fetch(`http://localhost:3000/users/${username}`);
    const data = await res.json();
    setFiles(data);
  }
  return <>{files && files.map((file) => <p>{file.name}</p>)}</>;
}

export default User;
