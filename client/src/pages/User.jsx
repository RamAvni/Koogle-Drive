/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

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
}

export default User;
