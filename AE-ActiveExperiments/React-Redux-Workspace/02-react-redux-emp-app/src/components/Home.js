import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteEmployee, fetchEmployees, updateEmployee } from "../redux/employee/emloyeeActions";
function Home({ employeesData, fetchEmployees }) {
  useEffect(() => {
     fetchEmployees();
  }, []);
  return employeesData.loading ? (
    <h2>Loading</h2>
  ) : employeesData.error ? (
    <h2>{employeesData.error}</h2>
  ) : (
    <div className="py-4">
      <table className="table border shadow">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Employee Id</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Employee Salary</th>
            <th scope="col">Employee Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        
          {employeesData.employees.map((employee, index) => (
            <tr>
              <td>{employee.employeeId}</td>
              <td>{employee.employeeName}</td>
              <td>{employee.employeeSalary}</td>
              <td>{employee.department.departmentName}</td>
              <td>
                <Link
                  className="btn btn-outline-primary mr-2"
                  to={`/employees/update/${employee.employeeId}`}
                  onClick={updateEmployee(employee)}
                >
                  Modify
                </Link>
                <Link
                  className="btn btn-outline-primary mr-2"
                  to={`/employees`}
                  onClick={deleteEmployee(employee.employeeId)}>
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
const mapStateToProps = (state) => {// redux state //????
 
  return {
    employeesData: state.employees, 
  };
};
const mapDispatchToProps = (dispatch) => { //?????

  return {
    //home property       //triger action
    
    fetchEmployees: () =>{dispatch(fetchEmployees())},
    deleteEmployee:(empId)=>dispatch(deleteEmployee(empId)),
    updateEmployee:(emp)=>dispatch(updateEmployee(emp))
  };
};
/*var hocfun=connect(mapStateToProps, mapDispatchToProps);
var newcomp=hocfun(Home);
export default newcomp;*/
//connect()method just provides a way for the user to connect the component to the redux store. 
//It provides its connected component with the pieces of the data it needs from the store, 
//and the functions it can use to dispatch actions to the store. 
//It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in.
export default connect(mapStateToProps, mapDispatchToProps)(Home);
//redux state to component state
