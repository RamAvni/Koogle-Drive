import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Files(props) {
    console.log(props);
    const navigate = useNavigate();
    const [rename, setRename] = useState();

    async function deleteSelf() {
        const res = await fetch(`http://localhost:3000${props.location}/${props.filename}`, {
            method: "DELETE",
        });
        props.setUpdate((prev) => prev + 1);
        console.log("res: ", res);
    }

    async function renameSelf() {
        const res = await fetch(`http://localhost:3000${props.location}/${props.filename}`, {
            method: "PATCH",
            body: JSON.stringify({ newName: rename }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });

        props.setUpdate((prev) => prev + 1);
    }
    function handleClick(type) {
        if (type === "folder") {
            console.log("i think im a folder");
            navigate(`${props.location}/${props.filename}`);
        }
        if (type === "file") {
            props.setPageType("file");
            navigate(`${props.location}/${props.filename}`);
        }
    }
    return (
        <div>
            <button style={{ backgroundColor: props.filetype === "file" ? "blue" : "yellow" }} onClick={() => handleClick(props.filetype)}>
                {props.filename}
            </button>{" "}
            <button onClick={deleteSelf}>Delete</button>
            <input type="text" value={rename} onChange={({ target }) => setRename(target.value)} />
            <button onClick={renameSelf}>Rename</button>
            <button>Copy</button>
        </div>
    );
}
export default Files;

// { color: props.foldertype === "file" ? "blue" : "yellow" }
