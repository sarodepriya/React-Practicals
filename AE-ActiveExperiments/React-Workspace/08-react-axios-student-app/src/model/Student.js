import Address from "./Address";
import Department from "./Department";

class Student {
    studentId = '';
    studentName = '';
    studentScore = '';
    homeAddress = new Address();
    department = new Department();
}

export default Student;