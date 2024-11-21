/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

import File from "../components/File";

function User() {
<<<<<<< HEAD
  const [files, setFiles] = useState([]);
  console.log("files: ", files);

  const { username } = useParams();
=======
    const [files, setFiles] = useState([]);
    console.log("files: ", files);
    const { username } = useParams();
>>>>>>> 93198df62b016229088453e4796b3b8ecbb07960

    const location = useLocation();

    useEffect(() => {
        postInfoToServer(username);
    }, [location]);

<<<<<<< HEAD
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
=======
    async function postInfoToServer() {
        console.log(`AHHH: http://localhost:3000${location.pathname}`);
        const res = await fetch(`http://localhost:3000${location.pathname}`);
        const data = await res.json();
        setFiles(data);
    }
    return (
        <>
            <ul>{files && files.map((file) => <File location={location.pathname} filename={file.name} key={file.name} />)}</ul>
        </>
    );
>>>>>>> 93198df62b016229088453e4796b3b8ecbb07960
}
export default User;
