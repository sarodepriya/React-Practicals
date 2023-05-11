import React from 'react';
import axios from 'axios';
import Employee from '../model/Employee';
import { Link } from "react-router-dom";
import EmployeeService from '../service/EmployeeService';

class ShowEmployee extends React.Component {
    constructor() {
        super();
        this.state = {
            employee: new Employee(),
            employees: []
        }
        this.empService=new EmployeeService();
    }//jest test unit(test the service layer)
    componentDidMount() {
       this.empService.getAllEmployees()
            .then((result) => {
             
                this.setState({ employees: result.data });
            })
            .catch((error) => {
                alert(error);
            });
        // alert("hi") //executed asyn
    }
    render() {
        console.log('render');
        return (
            <div>
                <div>
                    {
                        this.state.employees.length > 0 ? (
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Employee Id</th>
                                        <th>Employee Name</th>
                                        <th>Employee Salary</th>
                                        <th>Department ID</th>
                                        <th>Department Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.employees.map((emp) =>
                                        (
                                            <tr>
                                                <td>{emp.employeeId}</td>
                                                <td>{emp.employeeName}</td>
                                                <td>{emp.employeeSalary}</td>
                                                <td>{emp.department.departmentId}</td>
                                                <td>{emp.department.departmentName}</td>
                                                <td><Link className="btn btn-warning" to={{ pathname: `/employees/update/${emp.employeeId}`}}>Update</Link></td>
                                                <td><button className="btn btn-danger"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        alert("inside delete");
                                                         this.empService.deleteEmployeeById(emp.employeeId)
                                                            .then((result) => {
                                                                //alert("data called "+result.data)
                                                                this.empService.getAllEmployees()
                                                                .then((result2) => {
                                                                    this.setState({ employees: result2.data });
                                                                })
                                                                .catch((error) => {
                                                                    alert("error");
                                                                });
                                                            })
                                                            .catch((error) => {
                                                                alert("error");
                                                            });
                                                      
                                                      
                                                    }}>Delete</button></td>
                                            </tr>
                                        )
                                        )
                                    }
                                </tbody>
                            </table>
                        ) : <div>No Employee Present</div>
                    }
                </div>
            </div>
        );
    }
}
export default ShowEmployee;