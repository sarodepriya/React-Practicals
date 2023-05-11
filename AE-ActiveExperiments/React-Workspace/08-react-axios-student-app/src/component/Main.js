import React from 'react';
import Student from '../model/Student';
import axios from 'axios';
import StudService from '../Service/StudService';
class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            student: new Student(),
            students: [],
           // departments:[]
        }
        this.service=new StudService();
    }
    componentDidMount() {
        axios.get(`http://localhost:8088/student_app/students/`)
            .then((result) => {
                //alert(JSON.stringify(result));
                this.setState({ students: result.data });
            })
            .catch((error) => {
                alert(error);
            });
    }
    render() {
        console.log('render');
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
                    {/* Department data
                    <div className='form-group'>
    <select className="form-control" 
        value={this.state.student.department.departmentId}
    onChange={(e) => this.setState({ student: { ...this.state.student, department: { ...this.state.student.department, departmentId: e.target.value } } })}>
    {this.state.student.map((dept) => (
        <option key={dept.value} value={dept.value}>
            {dept.display}
        </option>
    ))}
</select>
<br></br>
 </div> */}


                    <button className="btn btn-outline-primary"
                        onClick={(e) => {
                            e.preventDefault();
                            axios.post(`http://localhost:8088/student_app/students/`, this.state.student)
                                .then((result) => {
                                    alert(result.data)
                                })
                                .catch((error) => {
                                    alert(error);
                                });
                            axios.get(`http://localhost:8088/student_app/students/`)
                                .then((result) => {
                                    //alert(JSON.stringify(result));
                                    this.setState({ students: result.data });
                                })
                                .catch((error) => {
                                    alert(error);
                                });
                            //this.state.students.push(this.state.student);
                            //alert(JSON.stringify(this.state.students));
                            //this.setState({ students: this.state.students });
                        }}>Add Student</button>
                </form>
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
                                                        // alert(JSON.stringify(this.state.s))
                                                        // axios.delete(`http://localhost:8088/student_app/students/deleteById/s.studentId`, this.state.student)
                                                        //     .then((result) => {
                                                        //         alert(result.data)
                                                        //     })
                                                        //     .catch((error) => {
                                                        //         alert(error);
                                                        //     });
                                                    //     
                                                    
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
                                            <td><button className="btn btn-success" onClick={() => this.props.history.push(`/${s.studentId}`)}>Update</button></td>                                                   
                                            {/* <td><Link className="btn btn-warning" to={{ pathname: `/update/${s.studentId}`}}>Update</Link></td> */}
                                            </tr>
                                        )
                                        )
                                    }
                                </tbody>
                            </table>
                        ) : <div>No Student Present</div>
                    }
                </div>
            </div>
        );
    }
}
export default Main;