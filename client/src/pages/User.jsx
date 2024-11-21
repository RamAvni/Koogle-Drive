/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";

import Files from "../components/Files";
import SingleFiles from "../components/singleFiles";

function User() {
  const [files, setFiles] = useState([]);
  const [resFile, setResFile] = useState();
  const [pageType, setPageType] = useState("folder");
  console.log("pageType: ", pageType);
  console.log("files: ", files);

  const { username } = useParams();

  const location = useLocation();

  useEffect(() => {
    postInfoToServer(username);
  }, [location, pageType]);

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

  return (
    <>
      {pageType === "folder" ? (
        <ul>
          {files &&
            files.map((file) => (
              <Files setPageType={setPageType} location={location.pathname} filename={file.name} filetype={file.type} key={file.name} />
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
