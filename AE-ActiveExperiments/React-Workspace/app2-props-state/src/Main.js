import React from "react";

function Main(){
    const[count, setCount]=React.useState(0);//useState is using destructuring feature and returning the array which contains only two value.
    const[number, setNumber]=React.useState(1);
    return(
        <div className="alert alert-success">
            <button className="btn btn-primary mr-2" onClick={()=>setCount(count+1)}>+</button>
            <button className="btn btn-primary mr-2">{count}</button>
            <button className="btn btn-primary mr-2" onClick={()=>setCount(count-1)}>-</button>
            {/* <span className="badge badge-dark">{number}</span> */}
        </div>
    )
}
export default Main;