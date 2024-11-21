/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

import File from "../components/Files";

function User() {
    const [files, setFiles] = useState([]);
    console.log("files: ", files);
    const { username } = useParams();
    const [update, setUpdate] = useState(0);
    const [showFileUpload, setShowFileUpload] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);
    const location = useLocation();

    useEffect(() => {
        postInfoToServer(username);
    }, [location, update]);

    useEffect(() => {
        console.log(uploadedFile);
    }, [uploadedFile]);

    async function postInfoToServer() {
        console.log(`AHHH: http://localhost:3000${location.pathname}`);
        const res = await fetch(`http://localhost:3000${location.pathname}`);
        const data = await res.json();
        setFiles(data);
    }

    function handleFormUpload(){
      console.log("handleFormUpload")
    }

    return (
        <>
            <button onClick={() => setShowFileUpload((prev) => !prev)}>+ New</button>
            {showFileUpload && (
                <form onSubmit={}>
                    <input type="file" onChange={({ target }) => setUploadedFile(target.files[0])} />
                    <button>Upload</button>
                </form>
            )}
            <ul>{files && files.map((file) => <File setUpdate={setUpdate} location={location.pathname} filename={file.name} key={file.name} />)}</ul>
        </>
    );
}
export default User;
