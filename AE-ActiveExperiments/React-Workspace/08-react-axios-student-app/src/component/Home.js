import React from 'react';
import StudService from '../Service/StudService';

class Home extends React.Component {
    service = new StudService();
    constructor() {
        super();
        this.state = {
            students: []
        }
    }
    componentDidMount() {
        this.service.getAllStudents().then((result) => {
            this.setState({ students: result.data });
        }).catch((error) => {
            alert(error);
        });
    }
    render() {
        return (
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
                                            <td><button className="btn btn-danger" onClick={() => this.props.history.push(`/students/delete/${s.studentId}`)}>Delete</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.props.history.push(`/students/update/${s.studentId}`)}>Update</button></td>
                                        </tr>
                                    )
                                    )
                                }
                            </tbody>
                        </table>
                    ) : <div>No Student Present</div>
                }
            </div>
        )
    }
}
export default Home;