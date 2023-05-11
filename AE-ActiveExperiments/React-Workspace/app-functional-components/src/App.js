import './App.css';
// import {HelloFun} from './components/HelloFun'
// import HelloClass from './components/HelloClass'
import Welcome from './components/Welcome'


function App() {
  return (
    <div className="App">
      {/* <HelloFun/>
      <HelloClass/> */}
      {/* Components are reusable */}
      <Welcome name = "Makarand Sir" roleName = "Mentor"/>
      <Welcome name = "Sunita" roleName = "DeliveryManager"/>
      <Welcome name = "Ajay" roleName = "Java Trainer"/>
          </div>
  );
}

export default App;
