function Header(props){
    return (
        <div classname="jumbotron">
            <h1 classname="display-4">{props.title}</h1>
            <hr/>
            <p classname="my-4">
                {props.description}
            </p>
        </div>
    );
}

export default Header;