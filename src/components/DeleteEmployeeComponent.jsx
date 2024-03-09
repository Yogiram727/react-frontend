// ListEmployeeComponent.js
import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

function ListEmployeeComponent() {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await EmployeeService.getEmployees();
            setEmployees(response.data);
        } catch (error) {
            console.error('Error fetching employees:', error);
            // Handle error appropriately (e.g., show an error message)
        }
    };

    const deleteEmployee = async (id) => {
        try {
            await EmployeeService.deleteEmployee(id);
            fetchEmployees();
        } catch (error) {
            console.error('Error deleting employee:', error);
            // Handle error appropriately (e.g., show an error message)
        }
    };

    const addEmployee = () => {
        navigate('/add-employee');
    };

    const updateEmployee = (id) => {
        navigate(`/update-employee/${id}`);
    };

    return (
        <div>
            <h1 className="text-center">Employees List</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-auto mb-3'>
                        <button className='btn btn-primary' onClick={addEmployee}>Add Employee</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <button className="btn btn-info" onClick={() => updateEmployee(employee.id)}>Update</button>
                                    <button className="btn btn-danger ml-2" onClick={() => deleteEmployee(employee.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListEmployeeComponent;
