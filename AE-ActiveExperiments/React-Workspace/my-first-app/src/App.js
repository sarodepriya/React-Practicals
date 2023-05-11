import logo from './logo.svg';
import './App.css';
// import FuncComponent1 from './components/myfunctionalcomp';
// import Classcomp1 from './components/myclasscomp';
// import UseState from './components/UseState'
import UseEffect from './components/Useeffect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome !! to React Application Demos.
        </p>
        {/* <FuncComponent1></FuncComponent1>
        <Classcomp1></Classcomp1> */}
      {/* <UseState/>         */}
      <UseEffect/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    // <div>
    // <h1>This is my first app.</h1>
    // <h3>This is App.js component</h3>
    // </div>
  );
}

export default App;
