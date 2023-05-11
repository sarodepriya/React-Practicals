import React from 'react';
import Student from '../model/Student';

import StudService from '../Service/StudService';

class UpdateStudent extends React.Component {
    service = new StudService();
    constructor() {
        super();
        this.state = {
            student: new Student(),
            sid : this.props.match.params.studentId
            
        }
   }
    componentDidMount() {
        alert("ComponentDidMount called")
        let studentId = this.state.sid;
        alert("Id = "+studentId)
        this.service.findstudentById(studentId).then((result) => {
            this.setState({ student: result.data });
        }).catch((error) => {
            alert(error);
        })
    }
    render() {
        return (
            <div>
                <h2><span className="badge badge-primary">Student Form</span></h2>
                <form>
                    <div className="form-group">
                        <input className="form-control" type="text" id="studentId" placeholder="Enter Student Id"
                            value={this.state.student.studentId} readOnly="true" />
                    </div>
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
                        <input className="form-control" type="text" id="addressId" placeholder="Enter Address Id"
                            value={this.state.student.homeAddress.addressId} readOnly="true" />
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

                    <button className="btn btn-outline-primary mr-2" onClick={(e) => {
                        e.preventDefault();
                        this.service.updatestudent(this.state.student).then((result) => {
                            alert(result.data);
                            this.props.history.push(`/students`);
                        }).catch((error) => {
                            alert(error);
                        })
                    }}>Update Student</button>
                    <button className="btn btn-outline-primary" onClick={(e) => {
                        e.preventDefault();
                        this.props.history.push(`/students`);
                    }}>Cancel</button>

                </form>
            </div>
        )
    }
}
export default UpdateStudent;