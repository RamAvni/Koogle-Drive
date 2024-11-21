/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import File from "../components/File";

function User() {
    const [files, setFiles] = useState([]);
    let { username } = useParams();

    useEffect(() => {
        postInfoToServer(username);
    }, []);

    async function postInfoToServer(username) {
        const res = await fetch(`http://localhost:3000/users/${username}`);
        const data = await res.json();
        setFiles(data);
    }

    console.log("files: ", files);
    return <>{files && files.map((file) => <p key={file.name}>{file.name}</p>)}</>;
}

export default User;
