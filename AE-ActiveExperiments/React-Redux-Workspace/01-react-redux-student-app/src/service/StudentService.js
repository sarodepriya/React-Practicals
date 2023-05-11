import axios from "axios";

export class StudentService {
    baseUrl = `http://localhost:8088/student_app/students/`;

    addStudent(student) {
        return axios.post(this.baseUrl + '/', student);
    }
    findStudentById(studentId) {
        return axios.get(`${this.baseUrl}/searchById/${studentId}`);
    }
    findAllStudents() {
        return axios.get(this.baseUrl + '/');
    }
    deleteStudentById(studentId) {
        return axios.delete(`${this.baseUrl}/deleteById/${studentId}`);
    }
    modifyStudent(student) {
        return axios.put(this.baseUrl + '/', student);
    }

    getAllDepartment() {
        return axios.get(`${this.baseUrl}/findAllDepartments/`);
    }
}