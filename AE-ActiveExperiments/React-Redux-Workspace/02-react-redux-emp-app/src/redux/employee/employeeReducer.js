import {
  FETCH_EMPLOYEES_REQUEST,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILURE,
  DELETE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_REQUEST
} from "./employeeTypes";

const initialState = {
  loading: false,
  employees: [],
  error: "",
};

const reducer = (state = initialState, action) => {//state transition n home component is updated
  //alert("reducer called");
  switch (action.type) {
    case FETCH_EMPLOYEES_REQUEST:
      return {
        ...state,
        employees:[...state.employees,action.payload],
        loading: true,
      };
    case FETCH_EMPLOYEES_SUCCESS:
     // alert("inside fetch employee success of reducer")
      return {
        loading: false,
        employees: action.payload,//emp data
        error: "",
      };
    case FETCH_EMPLOYEES_FAILURE:
      return {
        loading: false,
        employees: [],
        error: action.payload,
      };
    case DELETE_EMPLOYEE_REQUEST:
      return{
        loading: false,
        empId: action.payload,
        error: "",
      };
      case UPDATE_EMPLOYEE_REQUEST:
        return{
          loading: false,
          emp: action.payload,
          error: "",
        };
    default:
      return state;
  }
};

export default reducer;
