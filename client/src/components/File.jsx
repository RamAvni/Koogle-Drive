import { useState } from "react";
import { useNavigate } from "react-router-dom";

function File(props) {
<<<<<<< HEAD
  const navigate = useNavigate();

  async function deleteSelf() {
    const res = await fetch(`http://localhost:3000${props.location}/${props.filename}`, {
      method: "DELETE",
    });
    console.log("res: ", res);
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
      </button>
      <button onClick={deleteSelf}>Delete</button>
      <button>Rename</button>
      <button>Copy</button>
    </div>
  );
=======
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

    return (
        <div>
            <button onClick={() => navigate(`${props.location}/${props.filename}`)}>{props.filename}</button>
            <button onClick={deleteSelf}>Delete</button>
            <input type="text" value={rename} onChange={({ target }) => setRename(target.value)} />
            <button onClick={renameSelf}>Rename</button>
            <button>Copy</button>
        </div>
    );
>>>>>>> d9de61f8f374bf07e3e88d0a0d3d433f09a0362f
}
export default File;

// { color: props.foldertype === "file" ? "blue" : "yellow" }
