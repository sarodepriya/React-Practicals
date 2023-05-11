import { Navigate, useNavigate } from "react-router-dom";
import  EmployeeService from "../../service/EmployeeService"
import {
  FETCH_EMPLOYEES_REQUEST,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILURE,
  DELETE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_REQUEST
} from "./employeeTypes";
//get all Employees
export const fetchEmployees = () => {
  //alert("fetchEmployee Action called : fetching data from database.");
  return (dispatch) => {
   // dispatch(fetchEmployeesRequest());
    let service = new EmployeeService();
    service.getAllEmployees().then((response) => {
      const employees = response.data;
      dispatch(fetchEmployeesSuccess(employees));//take action as parameter,reudcer is triggered
    })
      .catch((error) => {
        dispatch(fetchEmployeesFailure(error.message));
      });
  };
};

export const fetchEmployeesRequest = () => {
  return {
    type: FETCH_EMPLOYEES_REQUEST,
  };
};

export const fetchEmployeesSuccess = (employees) => { 
 //alert("fetchEmployeesSuccess called : taking type and palyload of action");
  return {
    type: FETCH_EMPLOYEES_SUCCESS,
    payload: employees //data from database
  }; 
};

export const fetchEmployeesFailure = (error) => {
  return {
    type: FETCH_EMPLOYEES_FAILURE,
    payload: error,
  };
};

//delete Employee Action
// export const deleteEmployeeRequest = (empId) => { 
//   //alert("DeleteEmployeeRequest called :  taking type and palyload of action");
//    return {
//      type: DELETE_EMPLOYEE_REQUEST,
//      payload: empId
//    }; 
//  };
//  export const deleteEmployee = (empId) => {
//   //alert("Delete Employee action called");
//   return (dispatch) => {
//     let service = new EmployeeService();
//     service.deleteEmployeeById(empId).then((response) => {
//       const e = response.data;
//       dispatch(deleteEmployeeRequest(empId));//take action as parameter,reudcer is triggered
      
//       service.getAllEmployees().then((response) => {
//                const employees = response.data;
//                alert("Get all employees from delete emp");
//                dispatch(fetchEmployeesSuccess(employees));//take action as parameter,reudcer is triggered



//     })
//       .catch((error) => {
//        // dispatch(fetchEmployeesFailure(error.message));
//       });
//     })
//   };
// };

// export const deleteEmployeeRequest = (emp) => { 
//   //alert("UpdateEmployeeRequest called : taking type and palyload of action");
//    return {
//      type: DELETE_EMPLOYEE_REQUEST,
//      payload: emp, //data from database
//    }; 
//  };

export const deleteEmployee = (empId) => {
  //alert("deleting employee from database. "+empId);
  return (dispatch) => {
   
    let service = new EmployeeService();
    service.deleteEmployeeById(empId).then(() => {
      //dispatch(fetchEmployeesRequest());
      alert("deleting employee from database. "+empId);
       service.getAllEmployees().then((response) => {
      const employees = response.data;
      alert("Get all employees from delete action");
     // Navigate('/employees');
      dispatch(fetchEmployeesSuccess(employees));//take action as parameter,reudcer is triggered
    })
      .catch((error) => {
        dispatch(fetchEmployeesFailure(error.message));
      });
      
    })
      .catch((error) => {
        dispatch(fetchEmployeesFailure(error.message));
      });
  };
  
};


//Update Employee Action


export const updateEmployeeRequest = (emp) => { 
  //alert("UpdateEmployeeRequest called : taking type and palyload of action");
   return {
     type: UPDATE_EMPLOYEE_REQUEST,
     payload: emp, //data from database
   }; 
 };

export const updateEmployee = (emp) => {
  //alert("Update Employee action called");
  return (dispatch) => {
    let service = new EmployeeService();
    service.updateEmployee(emp).then((response) => {
      const employees = response.data;
      dispatch(updateEmployeeRequest(emp));//take action as parameter,reudcer is triggered
    })
      .catch((error) => {
       // dispatch(fetchEmployeesFailure(error.message));
      });
  };
};