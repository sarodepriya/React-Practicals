import React from "react";

const Welcome = props => {
console.log (props)
return <h1>Welcome {props.name} a.k.a {props.roleName}</h1>

}

export default Welcome;