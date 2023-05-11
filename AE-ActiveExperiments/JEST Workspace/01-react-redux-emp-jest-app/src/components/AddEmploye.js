import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import EmployeeService from "../service/EmployeeService";
import Employee from "../model/Employee";
import { Link } from "react-router-dom";


function AddEmployee() {
    const navigate = useNavigate();
    let service = new EmployeeService();
    const [state, setState] = useState({ employee: new Employee() });
    const [departments, setDepartments] = useState([]);
    //const [employee,setEmployee]=useState();
    const [empIdErr, setEmployeeIdErr]=useState("");
    const [empNameErr, setEmployeeNameErr]=useState("");
    const [empSalaryErr, setEmployeeSalaryErr]=useState("");
    const [empDeptErr, setEmployeeDeptErr]=useState("");

    const formValidation=()=>{
        alert("Validations Checked");
        let isValid=true;
        const empIdErr={};
        const empNameErr={};
        const empSalaryErr={};
        const empDeptErr={};
        //alert(state.employee.department.departmentId)
        // if(state.employee.employeeId.trim().length<=0){
        //     empIdErr.empIdRequired="Employee ID is required";
        //     isValid=false;
        // }
        if(state.employee.employeeName.trim().length<=0){
            empNameErr.empNameRequired="Employee Name is required";
            isValid=false;
        }
        if(state.employee.employeeSalary.trim().length<=0){
            empSalaryErr.empNameRequired="Employee Salary is required";
            isValid=false;
        }
        if(state.employee.department.departmentId.length === 0){
            
            empDeptErr.empDeptRequired="Employee Department is required";
            isValid=false;
        }
        setEmployeeIdErr(empIdErr);
        setEmployeeNameErr(empNameErr);
        setEmployeeSalaryErr(empSalaryErr);
        setEmployeeDeptErr(empDeptErr);
        return isValid;
    }

     useEffect(() => {
            service.getAllDepartment()
                .then((result) => {
                    let depts = result.data.map((dept) => {
                        return { value: dept.departmentId, display: dept.departmentName };
                    });
                    setDepartments(
                        [{ value: "-1", display: "Select Department" }].concat(
                            depts
                        ),
                    );
                }).catch((error2) => {
                    alert(JSON.stringify("error: " + error2));
                });
                // service.findEmployeeById(employee.employeeId).then((result) => {
                //     let emp = result.data.map((e) => {
                //         return { value: emp.employeeId, display:emp.employeeId};
                //     });
                //     setEmployee(emp);}).catch((error2)=> {
                //         alert(JSON.stringify("error: " + error2));
                //     });
                // })
        })
    return (
        <div>
           
                <div>
                    <form>
                        <div>
                          
                            {/* <input className="form-control" type="text"  placeholder="Enter Employee Id"
                                value={state.employee.employeeId}
                                onChange={(e) => {
                                    setState({
                                        employee: {
                                            ...state.employee,
                                            ...state.employee.department,
                                            employeeId: e.target.value
                                        }
                                    })
                                }}
                            />      */}
                            {/* {employee.map((emp) => (
                                <option key={emp.value} value={emp.value}>
                                    {emp.display}
                                </option>
                            ))} */}
                            <br>
                            </br>
                            {Object.keys(empIdErr).map((key)=>{
                                return <div style={{color:"red"}}>{empIdErr[key]}</div>
                            })}
                        </div>
                        <div>
                            
                            <input className="form-control my-2" type="text"  placeholder="Enter Employee Name"
                                value={state.employee.employeeName}
                                onChange={(e) => setState({
                                    employee: {
                                        ...state.employee,
                                        ...state.employee.department,
                                        employeeName: e.target.value
                                    }
                                })}
                            />
                             {Object.keys(empNameErr).map((key)=>{
                                return <div style={{color:"red"}}>{empNameErr[key]}</div>
                            })}
                        </div>
                        <div>
             
                            <input className="form-control" type="text"  placeholder="Enter Employee Salary"
                                value={state.employee.employeeSalary}
                                onChange={(e) => setState({
                                    employee:
                                    {
                                        ...state.employee,
                                        ...state.employee.department,
                                        employeeSalary: e.target.value
                                    }                            
                                })}
                            /><br></br>
                             {Object.keys(empSalaryErr).map((key)=>{
                                return <div style={{color:"red"}}>{empSalaryErr[key]}</div>
                            })}
                        </div>
                        
                        <div>

                            <select
                                className="form-control my-2"
                                value={state.employee.department.departmentId}
                                onChange={(event) =>
                                    setState({ employee: { ...state.employee, department: { ...state.employee.department, departmentId: event.target.value } } })
                                }
                            >
                                {departments.map((dept) => (
                                    <option key={dept.value} value={dept.value}>
                                        {dept.display}
                                    </option>
                                ))}
                            </select>
                            <br></br>
                             {Object.keys(empDeptErr).map((key)=>{
                                return <div style={{color:"red"}}>{empDeptErr[key]}</div>
                            })}
                        </div>
                        <button className="btn btn-outline-primary mt-3" onClick={
                            (e) => {
                                e.preventDefault();
                                let isValid=formValidation()
                                if(!isValid){
                                return false;
                                }
                                else{
                              
                                service.addEmployee(state.employee)
                                    .then((result) => {
                                        alert('Employee is added in database.');
                                        navigate('/employees');
                                    })
                                    .catch((error2) => {
                                        alert(error2)
                                    });
                            }
                        }
                        }>Add Employee</button>
                        <Link className="btn btn-outline-primary mt-3 ml-3" to='/employees'>Cancel</Link>
                    </form>
                </div>
            
        </div>
    )
}
export default AddEmployee;