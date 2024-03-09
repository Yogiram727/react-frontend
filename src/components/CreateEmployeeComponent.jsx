import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import EmployeeService from '../services/EmployeeService';

function CreateEmployeeComponent() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const navigate = useNavigate(); 
  // Use useNavigate hook

  const saveEmployee = (e) => {
    e.preventDefault();
    let employee = { firstName, lastName, emailId };
    console.log('employee=>', JSON.stringify(employee));
    // Redirect to employees list page
    navigate('/employees');

    EmployeeService.createEmployee(employee).then(res=>{
      navigate('/employees');
    });

  }

  const cancel = () => {
    // Redirect to employees list page
    navigate('/employees');
  }

  return (
    <div>
      <div className="container">
        <div className='row'>
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Add Employee</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>First Name: </label>
                  <input placeholder="First Name" name="firstName" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Last Name: </label>
                  <input placeholder="Last Name" name="lastName" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Email Address: </label>
                  <input placeholder="Email Address" name="emailId" className="form-control" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
                </div>
                <button type="button" className="btn btn-success" onClick={saveEmployee}>Save</button>
                <button type="button" className="btn btn-danger" onClick={cancel} style={{ marginLeft: 10 }}>Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEmployeeComponent;