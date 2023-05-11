import React from 'react';
import axios from 'axios';
import Employee from '../model/Employee';
class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            employee: new Employee(),
            employees: []
        }
    }//jest test unit(test the service layer)
    componentDidMount() {
        axios.get(`http://localhost:8089/EmloyeeManagement/rest/employees`)//getmapping 
            .then((result) => {
                alert(JSON.stringify(result));
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
                <h2><span className="badge badge-primary">Employee Form</span></h2>
                <form>
                    <div className="form-group">
                        <input className="form-control" type="text" id="employeeID" 
                            value={this.state.employee.employeeId}
                            onChange={(e) => {
                                this.setState({ employee: { ...this.state.employee, employeeId: e.target.value } });
                            }} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" id="employeeName" 
                            value={this.state.employee.employeeName}
                            onChange={(e) => this.setState({ employee: { ...this.state.employee, employeeName: e.target.value } })} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" id="employeeSalary" 
                            value={this.state.employee.employeeSalary}
                            onChange={(e) => this.setState({ employee: { ...this.state.employee, employeeSalary: e.target.value } })} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" id="departmentID" 
                            value={this.state.employee.department.id}
                            onChange={(e) => this.setState({ employee: { ...this.state.employee, department: { ...this.state.employee.department, id: e.target.value } } })} />
                    </div>





                    <button className="btn btn-outline-primary"
                        onClick={(e) => {
                            e.preventDefault();
                            alert(JSON.stringify(this.state.employee))
                            axios.post(`http://localhost:8089/EmployeeManagement/rest/employees/`, this.state.employee)
                                .then((result) => {
                                    alert(result.data)
                                })
                                .catch((error) => {
                                    alert(error);
                                });
                            axios.get(`http://localhost:8089/EmployeeManagement/rest/employees/`)
                                .then((result) => {
                                    
                                    this.setState({ employees: result.data });
                                })
                                .catch((error) => {
                                    alert(error);
                                });
                          
                        }}>Add Employee</button>
                </form>



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
                                        this.state.employees.map((e) =>
                                        (
                                            <tr>
                                                <td>{e.employeeId}</td>
                                                <td>{e.employeeName}</td>
                                                <td>{e.employeeSalary}</td>
                                                <td>{e.department.id}</td>
                                                <td>{e.department.name}</td>
                                                <td><button className="btn btn-danger"
                                                    onClick={(e2) => {
                                                        e2.preventDefault();
                                                        alert(JSON.stringify(this.state.employee))
                                                        axios.post(`http://localhost:8089/EmployeeManagement/rest/employees/`, this.state.employee)
                                                            .then((result) => {
                                                                alert(result.data)
                                                            })
                                                            .catch((error) => {
                                                                alert(error);
                                                            });
                                                        axios.get(`http://localhost:8089/EmployeeManagement/rest/employees/`)
                                                            .then((result) => {
                                                                //alert(JSON.stringify(result));
                                                                this.setState({ employees: result.data });
                                                            })
                                                            .catch((error) => {
                                                                alert(error);
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
export default Main;