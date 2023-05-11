import React from 'react';
import StudService from '../Service/StudService';

class DeleteStudent extends React.Component {
    service = new StudService();
    componentDidMount() {
        let studentId = this.props.match.params.studentId;
        this.service.deletestudentById(studentId).then((result) => {
            alert(result.data);
            this.props.history.push(`/students`);
        }).catch((error) => {
            alert(error);
        })
    }
    render() {
        return (
            <div>
                <p>Deleting Student...</p>
            </div>
        )
    }
}
export default DeleteStudent;