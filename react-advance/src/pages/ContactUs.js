import React from 'react'

// react dom and hook stuff
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
    const navigate = useNavigate();

    function submitForm() {
        navigate('/form-submitted',{
            'state': {
                'formData':formState
            }
        })
    }

    const [formState, setFormState] = useState({
        'fullname': '',
        'email':''
    })

    const updateFormField = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
            // 'email': charliebrown@gmail.com
            // { email: xiaoming@gmail.com, email: charliebrown@gmail.com}
            // will take the most latest change of charliebrown@gmail.com
        })
    }
    return (
        <React.Fragment>
            <h1>Contact Us</h1>
            <div>
                <div>
                    <label>Full Name:</label>
                    <input type='text' name='fullname' value={formState.fullname} onChange={updateFormField} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type='text' name='email' value={formState.email} onChange={updateFormField} />
                </div>
                <input type="button" onClick={submitForm} value="Submit" />
            </div>
        </React.Fragment>

    )
}
