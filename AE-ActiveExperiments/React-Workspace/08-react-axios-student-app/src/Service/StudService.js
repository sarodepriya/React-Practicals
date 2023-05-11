import axios from "axios";
class StudService {
    
    baseUrl = `http://localhost:8088/student_app/students/`;
    getAllStudents() {
        // alert("inside get all student");
        return axios.get(this.baseUrl);
    }
    addstudent(student) {
      //  console.log("inside service"+JSON.stringify(student))
        return axios.post(this.baseUrl, student);
    }
    deletestudentById(studentId) {
        return axios.delete(this.baseUrl + studentId);
    }
    updatestudent(student) {
        return axios.put(this.baseUrl+student.studentId, student);
    
    }
    getAllDepartment() {

        return axios.get(this.baseUrl + '/getAllDepartments');
    }
    findstudentById(studentId) {
        return axios.get(this.baseUrl + studentId);
    }
}
export default StudService;