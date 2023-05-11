import React from 'react';
import Student from '../model/Student';

import StudService from '../Service/StudService';
class AddStudent extends React.Component {
    service = new StudService();
    constructor() {
        super();
        this.state = {
            student: new Student()
        }
    }
    render() {
        return (
            <div>
                <h2><span className="badge badge-primary">Student Form</span></h2>
                <form>
                    <div className="form-group">
                        <input className="form-control" type="text" id="studentName" placeholder="Enter Student Name"
                            value={this.state.student.studentName}
                            onChange={(e) => {
                                this.setState({ student: { ...this.state.student, studentName: e.target.value } });
                            }} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" id="studentScore" placeholder="Enter Student Score"
                            value={this.state.student.studentScore}
                            onChange={(e) => this.setState({ student: { ...this.state.student, studentScore: e.target.value } })} />
                    </div>

                    <div className="form-group">
                        <input className="form-control" type="text" id="city" placeholder="Enter City"
                            value={this.state.student.homeAddress.city}
                            onChange={(e) => this.setState({ student: { ...this.state.student, homeAddress: { ...this.state.student.homeAddress, city: e.target.value } } })} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" id="pincode" placeholder="Enter Pincode"
                            value={this.state.student.homeAddress.pincode}
                            onChange={(e) => this.setState({ student: { ...this.state.student, homeAddress: { ...this.state.student.homeAddress, pincode: e.target.value } } })} />
                    </div>

                    <button className="btn btn-outline-primary" onClick={(e) => {
                        e.preventDefault();
                        this.service.addstudent(this.state.student).then((result) => {
                            alert(result.data);
                            this.navigate(`/students`);
                        }).catch((error) => {
                            alert(error);
                        });
                    }}>Add Student</button>
                </form>
            </div>
        )
    }
}
export default AddStudent;