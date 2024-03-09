import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function UpdateEmployeeComponent() {
    const { id } = useParams(); // Get the employee id from URL params
    const navigate = useNavigate(); // Get the navigate function for navigation

    const [employee, setEmployee] = useState({
        id: '',
        firstName: '',
        lastName: '',
        emailId: ''
    });

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await EmployeeService.getEmployeeById(id); // Use id from URL params
                setEmployee(response.data);
            } catch (error) {
                console.error('Error fetching employee:', error);
                // Handle error appropriately (e.g., show an error message)
            }
        };
        fetchEmployee();
    }, [id]); // Re-fetch employee data when id changes

    const onChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const saveEmployee = async () => {
        try {
            await EmployeeService.updateEmployee(id, employee); // Use id from URL params
            navigate('/employees'); // Redirect to employees list page after update
        } catch (error) {
            console.error('Error updating employee:', error);
            // Handle error appropriately
        }
    };

    return (
        <div>
            <h3 className="text-center">Update Employee</h3>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        name="firstName"
                                        className="form-control"
                                        value={employee.firstName}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        name="lastName"
                                        className="form-control"
                                        value={employee.lastName}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        name="emailId"
                                        className="form-control"
                                        value={employee.emailId}
                                        onChange={onChange}
                                    />
                                </div>

                                <button type="button" className="btn btn-success" onClick={saveEmployee}>
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateEmployeeComponent;
