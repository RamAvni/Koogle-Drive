import { NavLink, useNavigate, useParams } from "react-router-dom";

function File(props) {
  const navigate = useNavigate();
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
      <button>Delete</button>
      <button>Rename</button>
      <button>Copy</button>
    </div>
  );
}
export default File;

// { color: props.foldertype === "file" ? "blue" : "yellow" }
