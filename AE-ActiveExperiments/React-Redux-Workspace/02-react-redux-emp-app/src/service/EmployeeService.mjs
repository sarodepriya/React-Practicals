import axios from "axios";
class EmployeeService {
    baseUrl = `http://localhost:8085/Employee_app/employees/`;
    
    addEmployee(employee) {
        //console.log("inside service"+JSON.stringify(employee))
        return axios.post(this.baseUrl, employee);
    }
    deleteEmployeeById(empId) {
        //alert("inside delete employee "+empId)
        return axios.delete(this.baseUrl + empId);
    }
    getAllEmployees() {
        
        return axios.get(this.baseUrl);
    }
    updateEmployee(employee) {
        return axios.put(this.baseUrl+employee.employeeId, employee);
    
    }
    getAllDepartment() {
        return axios.get(this.baseUrl + 'getAllDepartments');
    }
    findEmployeeById(empId) {
        return axios.get(this.baseUrl +empId);
    }
}
export default EmployeeService;
// module.exports = {

//     EmployeeService

// }