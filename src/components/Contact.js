import React, { useState } from 'react'
import axios from 'axios';

const Contact = () => {

    const [contact, setContact] = useState({
        name: '',
        email: '',
        query: ''
    })

    const { name, email, query } = contact;
    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }
    const submitData = async () => {
        await axios.post('http://localhost:3003/contact', contact)
            .then((result) => {
                alert("Your query is successfully added")
            })
        console.log(contact)

    }

    return (
        <div className="container">
            <div className="py-4">
                <div className="row mt-5">
                    <div className="col-md-8 offset-md-2">
                        <div className="contact_box p-5">
                            <h1 className="text-center font-weight-bold py-2 text-uppercase">Contact Us</h1>
                            <div className="form-group">
                                <input onChange={(e) => handleChange(e)} type="text" name="name" value={name} className="form-control" placeholder="Enter Name..." />
                            </div>
                            <div className="form-group">
                                <input onChange={(e) => handleChange(e)} type="email" name="email" value={email} className="form-control" placeholder="Enter Email..." />
                            </div>
                            <div className="form-group">
                                <textarea onChange={(e) => handleChange(e)} type="message" name="query" value={query} className="form-control" placeholder="Enter Query..." />
                            </div>
                            <div className="form-group">
                                <button onClick={submitData} className="btn btn-dark btn-block">
                                    Submit Query
                        </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;