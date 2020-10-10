import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase/firebase';

const Home = () => {

    const [employees, setEmployees] = useState([]);
    const [user, setUser] = useState("");
    let history = useHistory();

    const loadEmployee = async () => {
        const result = await axios.get('http://localhost:3003/employees')
        setEmployees(result.data)
    }
    useEffect(() => {
        loadEmployee();
    }, [])

    const deleteEmployee = async (id) => {
        await axios.delete(`http://localhost:3003/employees/${id}`)
        loadEmployee();
    }
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user)
        })
    })
    return(
        user ? (
            <div className="container">
                <div className="employee-header">
                    <h1 className="font-weight-bold text-uppercase my-4">Employees Detail:</h1>
                    <Link to='/addemp' className="my-4">
                        <button className="btn btn-outline-dark">Add Employee</button>
                    </Link>
                </div>
                <table className="table my-3">
                    <thead className="thead-dark">
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Contact No</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((employee, index) => {
                                return <tr key={employee.id}>
                                    <td>{index + 1}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.dept}</td>
                                    <td>{employee.contact}</td>
                                    <td>{employee.salary}</td>
                                    <td>
                                        <Link to={`/viewemp/${employee.id}`} className="btn btn-outline-primary mx-1"> <span className="fa fa-eye"></span> </Link>
                                        <Link to={`editemp/${employee.id}`} className="btn btn-outline-warning mx-1"> <span className="fa fa-edit"></span> </Link>
                                        <Link onClick={() => deleteEmployee(employee.id)} to="" className="btn btn-outline-danger mx-1"> <span className="fa fa-times"></span> </Link>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        ) : (
                <>
                   <div className="container">
                       <div className="row">
                           <div className="col-md-8 offset-md-2 text-center">
                           <h1 className="text-uppercase font-weight-bold mt-5">
                               You are not Logged In
                            </h1>
                            <Link to='/login'>
                                <button className="mt-4 btn btn-primary btn-lg">
                                    <span className="fa fa-sign-in-alt m-2"></span>
                                    go to login page
                                </button>
                            </Link>
                           </div>
                       </div>
                   </div>
                </>
            )
    )
     
}
export default Home;