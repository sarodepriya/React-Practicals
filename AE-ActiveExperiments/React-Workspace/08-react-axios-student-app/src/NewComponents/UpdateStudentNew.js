import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import Student from "../model/Student";
import StudService from '../Service/StudService';



function UpdateStudentNew() {
    const [state, setState] = useState({ student: new Student() });
    //const [homeAddresses, setAddress] = useState([]);
    const [error, setError] = useState({
        idError: "",
        nameError: ""
    })
    let service = new StudService();
    const { studentId } = useParams(); //extract the studentId from the path
    const navigate = useNavigate();
    useEffect(
        () => {
        alert("useEffect called")
        
       
        service.findstudentById(studentId).then((result) => {
            alert("Update component called"+JSON.stringify(result.data));
            setState({ student: result.data })
        }).catch((error) => {
            alert(error);
        });
    }, []);
    return (
        <div>
          
            <form>
                <div>
                    <input className="form-control" type="text" id="studentId" placeholder="Enter student Id"
                        value={state.student.studentId}
                        readOnly={true}
                    />
                </div>
                <div>
                    <div className="alert-danger">{error.nameError}</div>
                    <input className="form-control my-2" type="text" id="studentName" placeholder="Enter student Name"
                        value={state.student.studentName}
                        onChange={(e) => setState({ student: { ...state.student, studentName: e.target.value } })}
                    />
                </div>
                <div className="form-group">
                        <input className="form-control" type="text" id="studentScore" placeholder="Enter Student Score"
                            value={state.student.studentScore}
                            onChange={(e) => setState({ student: { ...state.student, studentScore: e.target.value } })} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" id="addressId" placeholder="Enter Address Id"
                            value={state.student.homeAddress.addressId} readOnly="true" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" id="city" placeholder="Enter City"
                            value={state.student.homeAddress.city}
                            onChange={(e) => setState({ student: { ...state.student, homeAddress: { ...state.student.homeAddress, city: e.target.value } } })} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" id="pincode" placeholder="Enter Pincode"
                            value={state.student.homeAddress.pincode}
                            onChange={(e) => setState({ student: { ...state.student, homeAddress: { ...state.student.homeAddress, pincode: e.target.value } } })} />
                    </div>

                <button className="btn btn-outline-primary mt-3" onClick={
                    (e) => {
                        e.preventDefault();
                        service.updatestudent(state.student).then(() => {
                            alert('student record is updated.');
                            setState({ student: new Student() })
                            navigate('/students');
                        }).catch((er) => {
                            alert(er);
                        })
                    }
                }>Update Student</button>
                <Link className="btn btn-outline-primary mt-3 ml-3" to='/students'>Cancel</Link>
            </form>
        </div>
    );
}
export default UpdateStudentNew;