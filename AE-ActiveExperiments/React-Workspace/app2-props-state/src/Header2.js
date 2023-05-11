import PropTypes from 'prop-types';

function Header(props){
    return(
        <div className="jumbotron">
  <h1 className="display-4">{props.title}</h1>
  <p className="lead">{props.description}</p>
  <p>This is just concatenation as p1 is of type string in App.js {props.p1 + 20}</p>
  <p>This is just a number so addition is possible. {props.p2 + 20}</p>
  
</div>
    )
}
export default Header;

Header.propTypes={
    title:PropTypes.string,
    description:PropTypes.string,
    p1:PropTypes.number.isRequired,
    p2:PropTypes.number.isRequired
}