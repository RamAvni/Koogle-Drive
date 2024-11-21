/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";

import Files from "../components/Files";
import SingleFiles from "../components/singleFiles";

function User() {
    const [resFile, setResFile] = useState();
    const [pageType, setPageType] = useState("folder");
    const [files, setFiles] = useState([]);
    console.log("files: ", files);
    const { username } = useParams();
    const [update, setUpdate] = useState(0);
    const [showFileUpload, setShowFileUpload] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);
    const location = useLocation();

    useEffect(() => {
        postInfoToServer(username);
    }, [location, pageType, update]);

    useEffect(() => {
        console.log(uploadedFile);
    }, [uploadedFile]);

    async function postInfoToServer(username) {
        const res = await fetch(`http://localhost:3000${location.pathname}`);
        if (pageType === "folder") {
            const data = await res.json();
            //console.log("data: ", data);
            setFiles(data);
        }
        if (pageType === "file") {
            const fileData = await res.text();
            setResFile(fileData);
            console.log("this is file data:", resFile);
        }
    }

    function handleFormUpload() {
        console.log("handleFormUpload");
    }
    return (
        <>
            {pageType === "folder" ? (
                <ul>
                    {files &&
                        files.map((file) => (
                            <Files
                                setPageType={setPageType}
                                setUpdate={setUpdate}
                                location={location.pathname}
                                filename={file.name}
                                filetype={file.type}
                                key={file.name}
                            />
                        ))}
                </ul>
            ) : (
                resFile && (
                    <>
                        {" "}
                        <SingleFiles file={resFile} />{" "}
                    </>
                )
            )}
        </>
    );
}
export default User;
