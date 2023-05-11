import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";
import Employee from "../model/Employee";

function UpdateEmployee() {
    const [state, setState] = useState({ employee: new Employee() });
    const [departments, setDepartments] = useState([]);
    const [error, setError] = useState({
        idError: "",
        nameError: "",
    })

    let service = new EmployeeService();
    const { empId } = useParams();
    console.log(empId);
    const navigate = useNavigate();
    useEffect(() => {
        service.findEmployeeById(empId).then((result) => {
            setState({ employee: result.data })
        }).catch((error) => {
            alert(error);
        });

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

    }, []);
    return (
        <div>
          
            <form>
                <div>
                    <input className="form-control" type="text" id="employeeId" placeholder="Enter Employee Id"
                        value={state.employee.employeeId}
                        readOnly={true}
                    />
                </div>
                <div>
                    <div className="alert-danger">{error.nameError}</div>
                    <input className="form-control my-2" type="text" id="employeeName" placeholder="Enter Employee Name"
                        value={state.employee.employeeName}
                        onChange={(e) => setState({ employee: { ...state.employee, employeeName: e.target.value } })}
                    />
                </div>
                <div>
                    <div className="alert-danger">{error.scoreError}</div>
                    <input className="form-control" type="text" id="employeeSalary" placeholder="Enter Employee Salary"
                        value={state.employee.employeeSalary}
                        onChange={(e) => setState({ employee: { ...state.employee, employeeSalary: e.target.value } })}
                    />
                </div>
                <div>
                    <div className="alert-danger">{error.deptError}</div>
                   
                    <select
                        className="form-control my-2"
                        value={state.employee.department.departmentId}
                        onChange={(event) =>
                            setState({ employee: { ...state.employee, department: { departmentId: event.target.value } } })
                        }
                    >
                        {departments.map((dept) => (
                            <option key={dept.value} value={dept.value}>
                                {dept.display}
                            </option>
                        ))}
                    </select>
                </div>
                <button className="btn btn-outline-primary mt-3" onClick={
                    (e) => {
                        e.preventDefault();
                        service.updateEmployee(state.employee).then(() => {
                            alert('Employee record is updated.');
                            setState({ employee: new Employee() })
                            navigate('/employees');
                        }).catch((er) => {
                            alert(er);
                        })
                    }
                }>Update Employee</button>
                <Link className="btn btn-outline-primary mt-3 ml-3" to='/employees'>Cancel</Link>
            </form>
        </div>
    );
}
export default UpdateEmployee;