/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";

import File from "../components/File";

function User() {
  const [files, setFiles] = useState([]);
  console.log("files: ", files);

  const { username } = useParams();

  const location = useLocation();

  useEffect(() => {
    postInfoToServer(username);
  }, [location]);

  async function postInfoToServer(username) {
    const res = await fetch(`http://localhost:3000${location.pathname}`);
    const data = await res.json();
    setFiles(data);
  }
  return (
    <>
      <ul>{files && files.map((file) => <File location={location.pathname} filename={file.name} filetype={file.type} key={file.name} />)}</ul>
    </>
  );
}
export default User;
