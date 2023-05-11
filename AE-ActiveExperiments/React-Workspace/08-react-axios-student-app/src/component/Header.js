import { Link } from "react-router-dom";

function Header(props) {
    return (
        <div className="jumbotron">
            <h1 className="display-4">{props.title}</h1>
            <hr />
            <p className="my-4">
                {props.description}
            </p>
            <Link className="btn btn-outline-primary" to={`/students/add`}>Add Student</Link>
        </div>
    );
}
export default Header;