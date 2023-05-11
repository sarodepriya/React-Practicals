import PropTypes from 'prop-types';

function Header({title,description}){
   // alert(JSON.stringify(props));
    return(
        <div className="jumbotron">
  <h1 className="display-4">{title}</h1>
  <p className="lead">{description}</p>
  
</div>
    )
}
export default Header;

Header.propTypes={
    title:PropTypes.string,
    description:PropTypes.string,
 
}