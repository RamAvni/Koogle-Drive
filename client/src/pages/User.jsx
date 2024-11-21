/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

import File from "../components/File";

function User() {
    const [files, setFiles] = useState([]);
    console.log("files: ", files);
    const { username } = useParams();

    const location = useLocation();

    useEffect(() => {
        postInfoToServer(username);
    }, [location]);

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
}
export default User;
