import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes ,Link} from 'react-router-dom';
import AddEmployee from './components/AddEmploye';
import UpdateEmployee from './components/UpdateEmployee';
//import ShowEmployee from './components/ShowEmployee';
import  Home from './components/Home'


function App() {
  return (
    <div className="container">
       <Router>
        <Header title="React Redux Employee Mangement Application"
          description="This project is React Single Page Application (SPA). This app will consume REST endpoints using axios module.
                In this app Employee information is stored in Redux-Store and Employee addition/updation and deletetion are the Redux-Actions and accordingly Redux Reducers are called.
                For testing : Employee Services are tested by JEST"/>
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
//exactPath???  Route does the partial matching. Route's path matches inclusively (matching many).

//exact removes partial matching. It might match more than one routes, in case we are using wild cards in the routes.

//Switch renders only the route that first matches. Switch path matches exclusively (matching only one).
      );
}

export default App;
