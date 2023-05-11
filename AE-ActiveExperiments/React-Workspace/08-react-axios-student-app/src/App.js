//import Main from "./component/Main";
import Header from "./component/Header";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
//import UpdateStudent from "./component/UpdateStudent";
//import Home from "./component/Home";
import AddStudent from "./component/AddStudent";
//import DeleteStudent from "./component/DeleteStudent";
import StudentList from "./component/StudentList";
import UpdateStudentNew from "./NewComponents/UpdateStudentNew";

function App() {
  // return (
  //   <div className="container">
  //   {/* <Header title="React Student With Axios"
  //     description="This project help us to create React fronend app which will connect to Java backend
  //         using axios module. Axios is a npm module which allow you to consume REST endpoints e.g. GET, POST, PUT, DELETE
  //   "/> */}
  //   <Router>
  //       <Header title="React Student Mangement Application"
  //         description="This project is React Single Page Application (SPA). This app will consume REST endpoints using axios module.
  //       This project will have several component based on user interaction the appropriate component will call and that setting is defined in App.js in the form of Router.
  //       Router will have sevral Route defined, one Route for one component.
  //       "/>
  //       <Routes>
  //         <Route path='/' element={<Home/>} />
  //         <Route path='/students' element={<Home />} />
  //         <Route path='/students/add' element={<AddStudent/>} />
  //         <Route path='/students/delete/:studentId' element={<DeleteStudent/>} />
  //         <Route path='/students/update/:studentId' element={<UpdateStudent/>} />
  //       </Routes>
  //     </Router>
  return (
    <div className="container">
       <Router>
        <Header title="React Student Mangement Application"
          description="This project is React Single Page Application (SPA). This app will consume REST endpoints using axios module.
        This project will have several component based on user interaction the appropriate component will call and that setting is defined in App.js in the form of Router.
        Router will have sevral Route defined, one Route for one component.
        "/>
      {/* <Link to={`/students/add`}>Addstudent</Link><br></br> */}
      
         <Routes>
          <Route exact path='/' element={<StudentList/>} />
          <Route exact path='/students' element={<StudentList/>} />
          <Route exact path='/students/add' element={<AddStudent/>} />
          <Route exact path='/students/update/:studentId' 
          // render={(props) => <UpdateStudent {...props} match={this.handleMatch}/>}/>
           element={<UpdateStudentNew/>} /> 
         </Routes>
      </Router>
    </div>
  );
  //{/* <Main /> */}
     
  // </div>

  // );
}

export default App;
