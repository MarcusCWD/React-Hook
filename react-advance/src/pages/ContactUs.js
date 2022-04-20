import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ContactUs() {
    const navigate = useNavigate()
    function submitForm(){
        navigate('/form-submitted')
    }

    return (
        <React.Fragment>
            <h1>Contact Us</h1>
            <div>
                <div>
                    <label>Full Name:</label>
                    <input type='text' name='fullname' />
                </div>
                <div>
                    <label>Email:</label>
                    <input type='text' name='email' />
                </div>
                <input type="button" onClick={submitForm}>Submit</input>
            </div>
        </React.Fragment>

    )
}
