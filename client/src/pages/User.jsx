/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function User() {
    const [files, setFiles] = useState([]);
    console.log("files: ", files);
    let { username } = useParams();

    useEffect(() => {
        postInfoToServer(username);
    }, []);

    async function postInfoToServer(username) {
        const res = await fetch(`http://localhost:3000/users/${username}`);
        const data = await res.json();
        setFiles(data);
    }
    return <>{files && files.map((file) => <p key={file}>{file}</p>)}</>;
}

export default User;
