import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const ViewEmployee = () => {

    let history = useHistory();
    let { id } = useParams();
    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        dept: '',
        contact: '',
        salary: ''
    })
    const { name, email, dept, contact, salary } = employee;

    const getEmployee = async () => {
        const result = await axios.get(`http://localhost:3003/employees/${id}`)
        setEmployee(result.data)
    }
    useEffect(() => {
        getEmployee();
    }, [])

    const goBack = () => {
        history.push('/')
    }
    return (
        <div className="container">
            <div className="py-4">
                <div className="row mt-5">
                    <div className="col-md-8 offset-md-2">
                        <h1 className="font-weight-bold text-uppercase my-4">Employee Detail:</h1>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td><h3 className="font-weight-bold">Name :</h3></td>
                                    <td><h3 className="font-weight-bold">{employee.name}</h3></td>
                                </tr>
                                <tr>
                                    <td><h3 className="font-weight-bold">Email :</h3></td>
                                    <td><h3 className="font-weight-bold">{employee.email}</h3></td>
                                </tr>
                                <tr>
                                    <td><h3 className="font-weight-bold">Department :</h3></td>
                                    <td><h3 className="font-weight-bold">{employee.dept}</h3></td>
                                </tr>
                                <tr>
                                    <td><h3 className="font-weight-bold">Contact No :</h3></td>
                                    <td><h3 className="font-weight-bold">{employee.contact}</h3></td>
                                </tr>
                                <tr>
                                    <td><h3 className="font-weight-bold">Salary :</h3></td>
                                    <td><h3 className="font-weight-bold">{employee.salary}</h3></td>
                                </tr>
                            </tbody>
                        </table>
                        <button onClick={goBack} className="btn btn-outline-dark btn-lg my-4">
                            <span className="fa fa-backspace mx-2"></span>
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewEmployee;