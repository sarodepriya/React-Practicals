import React from 'react';

import { Link } from "react-router-dom";
import Student from '../model/Student';
import StudService from '../Service/StudService';

class StudentList extends React.Component {
    constructor() {
        super();
        this.state = {
            student: new Student(),
            students: []
        }
        this.service=new StudService();
    }
    componentDidMount() {
       this.service.getAllStudents()
            .then((result) => {
               //alert(JSON.stringify(result));
                this.setState({ students: result.data });
            })
            .catch((error) => {
                alert(error);
            });
        // alert("hi") //executed asyn
    }
    render() {
        ('render called');
        return (
            <div>
                <div>
                    {
                        this.state.students.length > 0 ? (
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Student Id</th>
                                        <th>Student Name</th>
                                        <th>Student Score</th>
                                        <th>City</th>
                                        <th>Pincode</th>
                                        <th>Delete</th>
                                        <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.students.map((s) =>
                                        (
                                            <tr>
                                                <td>{s.studentId}</td>
                                                <td>{s.studentName}</td>
                                                <td>{s.studentScore}</td>
                                                <td>{s.homeAddress.city}</td>
                                                <td>{s.homeAddress.pincode}</td>
                                                <td><button className="btn btn-danger"onClick={(s1) => {
                                                        s1.preventDefault();
                                                        this.service.deletestudentById(s.studentId)
                                                        .then((result) => {
                                                        alert("Deleted data = "+result.data)
                                                        this.service.getAllStudents()
                                                        .then((result2) => {
                                                            this.setState({ students: result2.data });
                                                        })
                                                        .catch((error) => {
                                                            alert(error);
                                                        });
                                                    })
                                                    
                                              
                                            }}>Delete</button></td>
                                            <td><Link className="btn btn-primary" to={{ pathname: `/students/update/${s.studentId}`}}>Update</Link></td>
                                            
                                            </tr>
                                        )
                                        )
                                    }
                                </tbody>
                            </table>
                        ) : <div>No student Present</div>
                    }
                </div>
            </div>
        );
    }
}
export default StudentList;