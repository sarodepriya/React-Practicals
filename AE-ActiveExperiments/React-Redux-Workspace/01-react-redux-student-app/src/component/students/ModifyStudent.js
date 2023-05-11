import React, { Component } from "react";
import { Student } from "../../model/Student";
import { StudentService } from "../../service/StudentService";
class ModifyStudent extends Component {
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
    this.service.findStudentById(this.props.match.params.id)
      .then((result) => {
        this.setState({ student: result.data });
      });
    this.service.getAllDepartment()
      .then((data) => {
        let depts = data.data.map((dept) => {
          return { value: dept.departmentId, display: dept.departmentName };
        });
        this.setState({
          departments: [{ value: "", display: "Select Department" }].concat(
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

    this.service.modifyStudent(this.state.student).then(() => { }).catch(() => { })
    // redirect you to Home component after adding user
    this.props.history.push("/");
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>
          <span className="badge badge-dark">Modify Student</span>
        </h1>
        <div className="form-group mr2">
          <input
            type="text"
            className="form-control"
            id="studentId"
            placeholder="Enter Student Id"
            value={this.state.student.studentId}
            readOnly
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
              this.setState({ student: { ...this.state.student, department: { departmentId: event.target.value } } })
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
          Modify Student
        </button>
      </form>
    );
  }
}

export default ModifyStudent;
