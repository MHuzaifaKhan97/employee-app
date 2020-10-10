import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const EditEmployee = () => {

    let history = useHistory();
    const { id } = useParams();
    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        dept: '',
        contact: '',
        salary: ''
    })
    const { name, email, dept, contact, salary } = employee;

    const loadEmployee = async () => {
        const result = await axios.get(`http://localhost:3003/employees/${id}`)
        console.log(result.data)
        setEmployee(result.data);
    }
    useEffect(() => {
        loadEmployee();
    },[])
    const onChangeHandler = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value })
        console.log(e.target.value)
    }
    const updateEmployee = async () => {
        await axios.put(`http://localhost:3003/employees/${id}`, employee);
        setEmployee({
            username: '',
            email: '',
            dept: '',
            contact: '',
            salary: ''
        })
        history.push('/');
    }
    return (
        <div className="container">
            <div className="py-4">
                <div className="row mt-5">
                    <div className="col-md-8 offset-md-2">
                        <div className="login_box p-3">
                            <h1 className="text-center font-weight-bold py-2 text-uppercase">Employee System - Update Employee</h1>

                            <div className="form-group py-2">
                                <input type="text" onChange={(e) => onChangeHandler(e)} className="form-control" name="name" value={name} placeholder="Enter Employee Name..." />
                            </div>
                            <div className="form-group py-2">
                                <input type="email" onChange={(e) => onChangeHandler(e)} className="form-control" name="email" value={email} placeholder="Enter Employee Email..." />
                            </div>
                            <div className="form-group py-2">
                                <input type="text" onChange={(e) => onChangeHandler(e)} className="form-control" name="dept" value={dept} placeholder="Enter Employee Department..." />
                            </div>
                            <div className="form-group py-2">
                                <input type="text" onChange={(e) => onChangeHandler(e)} className="form-control" name="contact" value={contact} placeholder="Enter Employee Contact No..." />
                            </div>
                            <div className="form-group py-2">
                                <input type="text" onChange={(e) => onChangeHandler(e)} className="form-control" name="salary" value={salary} placeholder="Enter Employee Salary..." />
                            </div>

                            <div className="form-group py-2">
                                <button className="btn btn-primary btn-block btn-lg" onClick={updateEmployee} >
                                    <span className="fa fa-update mx-2"></span>
                                    <span className="text-uppercase font-weight-bold">Update Employee</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditEmployee;