import React, { Component } from "react";
import { Student } from "../../model/Student";
import { StudentService } from "../../service/StudentService";
class AddStudent extends Component {
  service = new StudentService();
  state = {
    student: new Student(),
    departments: [],
    error: {
      idError: "",
      nameError: "",
      scoreError: "",
      deptError: "",
    }
  };

  componentDidMount() {
    this.service.getAllDepartment()
      .then((result) => {
        let depts = result.data.map((dept) => {
          return { value: dept.departmentId, display: dept.departmentName };
        });
        this.setState({
          departments: [{ value: "-1", display: "Select Department" }].concat(
            depts
          ),
        });
      })
      .catch((error) => {
        alert(JSON.stringify("error: " + error));
      });
  }
  validate = () => {
    let flag = true;
    let error = {};
    if (!this.state.student.studentId) {
      error.idError = "Student Id Is Required";
      flag = false
    }
    if (!this.state.student.studentName) {
      flag = false;
      error.nameError = "Student Name Is Required";
    }
    if (!this.state.student.studentScore) {
      flag = false;
      error.scoreError = "Student Id Score Required";
    }

    if (!this.state.student.department.departmentId) {
      flag = false;
      error.deptError = "Student Department Required";
    }
    this.setState({ error: error })
    return flag;
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    let isValid = this.validate();
    if (!isValid) {
      return false;
    }

    // alert(JSON.stringify(this.state.student));
    this.service.addStudent(this.state.student)
      .then((data) => {
        // redirect you to Home component after adding user
        this.props.history.push("/");
      })
      .catch((error) => {
        alert(JSON.stringify(error))
        // alert(error.response.data.message);
        // redirect you to Home component after adding user
        this.props.history.push("/");
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>
          <span className="badge badge-dark">Add Student</span>
        </h1>
        <div className="form-group mr2">
          <div className="alert-danger">{this.state.error.idError}</div>
          <input
            type="text"
            className="form-control"
            id="studentId"
            placeholder="Enter Student Id"
            value={this.state.student.studentId}
            onChange={(event) =>
              this.setState({ student: { ...this.state.student, studentId: event.target.value } })
            }
          />
        </div>
        <div className="form-group">
          <div className="alert-danger">{this.state.error.nameError}</div>
          <input
            type="text"
            className="form-control"
            id="studentName"
            placeholder="Enter Student Name"
            value={this.state.student.studentName}
            onChange={(event) =>
              this.setState({ student: { ...this.state.student, studentName: event.target.value } })
            }
          />
        </div>
        <div className="form-group">
          <div className="alert-danger">{this.state.error.scoreError}</div>
          <input
            type="text"
            className="form-control"
            id="studentId"
            placeholder="Enter Student Score"
            value={this.state.student.studentScore}
            onChange={(event) =>
              this.setState({ student: { ...this.state.student, studentScore: event.target.value } })
            }
          />
        </div>
        <div className="form-group">
          <div className="alert-danger">{this.state.error.deptError}</div>
          <select
            className="form-control"
            value={this.state.student.department.departmentId}
            onChange={(event) =>
              this.setState({ student: { ...this.state.student, department: { ...this.state.student.department, departmentId: event.target.value } } })
            }
          >
            {this.state.departments.map((dept) => (
              <option key={dept.value} value={dept.value}>
                {dept.display}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>
    );
  }
}
export default AddStudent;
