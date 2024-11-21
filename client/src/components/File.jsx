import { NavLink, useNavigate, useParams } from "react-router-dom";

function File(props) {
  console.log(props);
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(`${props.location}/${props.filename}`)}>{props.filename}</button>
      <button>Delete</button>
      <button>Rename</button>
      <button>Copy</button>
    </div>
  );
}
export default File;
