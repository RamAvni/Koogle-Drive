import { useNavigate } from "react-router-dom";

function File(props) {
    console.log(props);
    const navigate = useNavigate();

    async function deleteSelf() {
        const res = await fetch(`http://localhost:3000${props.location}/${props.filename}`, {
            method: "DELETE",
        });
        console.log("res: ", res);
    }

    return (
        <div>
            <button onClick={() => navigate(`${props.location}/${props.filename}`)}>{props.filename}</button>
            <button onClick={deleteSelf}>Delete</button>
            <button>Rename</button>
            <button>Copy</button>
        </div>
    );
}
export default File;
