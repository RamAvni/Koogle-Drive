import { useNavigate } from "react-router-dom";

function Files(props) {
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
}
export default Files;

// { color: props.foldertype === "file" ? "blue" : "yellow" }
