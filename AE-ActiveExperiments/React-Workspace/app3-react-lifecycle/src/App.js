import React from "react";
import Header from "./Header";
import Main from "./Main";

function App() {
  const[status,setStatus]=React.useState(true);
  return (
    <div className="container">
      <Header title="React LifeCycle Project"
              description="This project will give demo of React 
              lifecycle methods of class component and 
              react lifecycle hooks of functional component."/>

      {status ? (<Main/>) : null}
      {/* <Main/>    */}
      <hr/>
      <button className="btn btn-danger" onClick={() => setStatus(!status)}>Mount/Unmount</button>     
    </div>
  );
}

export default App;
