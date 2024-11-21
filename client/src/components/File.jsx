import { useNavigate } from "react-router-dom";

function File(props) {
  const navigate = useNavigate();

  async function deleteSelf() {
    const res = await fetch(`http://localhost:3000${props.location}/${props.filename}`, {
      method: "DELETE",
    });
    console.log("res: ", res);
  }

  function handleClick(type) {
    if (type === "folder") {
      navigate(`${props.location}/${props.filename}`);
    } else {
    }
  }
  return (
    <div>
      <button style={{ backgroundColor: props.filetype === "file" ? "blue" : "yellow" }} onClick={() => handleClick(props.filetype)}>
        {props.filename}
        &nbsp
        {props.filetype}
      </button>
      <button onClick={deleteSelf}>Delete</button>
      <button>Rename</button>
      <button>Copy</button>
    </div>
  );
}
export default File;

// { color: props.foldertype === "file" ? "blue" : "yellow" }
