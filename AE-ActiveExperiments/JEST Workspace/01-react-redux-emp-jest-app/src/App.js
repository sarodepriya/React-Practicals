import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import UpdateEmployee from "./components/UpdateEmployee";
import AddEmployee from "./components/AddEmploye";
import Home from "./components/Home";


function App() {
  return (
    <div className="container">
       <Router>
        <Header title="React Redux Employee Mangement Application"
          description="This project is React Single Page Application (SPA). This app will consume REST endpoints using axios module.
        This project will have several component based on user interaction the appropriate component.Setting is defined in App.js in the form of Router.
        Router will have sevral Route defined, one Route for one component.
        In this app Employee information is stored in Redux-Store and 
        Employee addition/updation and deletetion are the Redux-Actions and accordingly Redux Reducers are called."/>
      <Link to={`/employees/add`}>AddEmployee</Link><br>
      </br>

         <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path='/employees' element={<Home/>} />
          <Route exact path='/employees/add' element={<AddEmployee/>} />
          <Route exact path='/employees/update/:empId' element={<UpdateEmployee/>} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
