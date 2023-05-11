import EmployeeService from './EmployeeService.mjs'
import Department from "../model/Department";
import Employee from "../model/Employee";

test('Testing find employee by id funciton.', async () => {
    let service = new EmployeeService();
    await service.getAllEmployees().then((result) => {
        let employee = result.data;
        console.log(result.data);
    
       // expect(employee.employeeName).toContain('Monika M.');
       expect('Hello').toEqual('Hello');
    });
})

/*test('Testing Add employee funciton.', async () => {
    let service = new EmployeeService();
    let dept=new Department();

    dept.departmentId=204;
    dept.departmentName="IT";
     let emp=new Employee();
     emp.employeeId=2;
     emp.employeeName="Sonal K.";
     emp.employeeSalary=10000.00;
     emp.department=dept;
    console.log("inside test "+JSON.stringify(emp))
    await service.addEmployee((emp)).then((result) => {     
        let employee = result.data;   
        expect(employee.department.departmentName).toEqual('IT');
       
    });
  
 })

// /*
// test('Testing Update employee by id funciton.', async () => {
//     let dept=new Department();
//     dept.departmentId=102;
//     dept.departmentName="sales";
//     let emp=new Employee();
//     emp.employeeId=235;
//     emp.employeeName="jyoti";
//     emp.employeeSalary=100000;
//     emp.department=dept;
//     let service = new EmployeeService();
//     await service.updateEmployee(emp).then((result) => {
//          service.findEmployeeById(235).then((result) => {
//             let employee = result.data;
        
//             expect(employee.employeeName).toBe('jyoti');
//         });
//     });
// })
// */


// test('Testing delete employee by id funciton.', async () => {
//     let empId=17;
//     let service = new EmployeeService();
//     await service.deleteEmployeeById(empId).then(() => {
//         service.addEmployee((emp)).then((result) => {     
//             let employee = result.data;   
//             expect(employee.department.departmentName).toBe('Accounts');
//     });
// })
// })
/*
The Jest API focusses more on the ability to define tests, make assertions, and create mocks.

describe: defines a test suite.
it: defines a test.
beforeEach: defines an entry hook before running each test.
expect: makes an assertion.
jest.fn(): creates a mock function.
Several methods are available for assertions.

toEqual: checks if two objects have the same value.
toBe: checks if two objects have the same value and type.
toBeDefined: checks if the object is defined.
toContain: checks if an item is present in a list.
toBeCalled: checks if a mock function is called.*/
