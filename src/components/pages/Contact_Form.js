import React from 'react'
import { useState } from 'react';

// set original state to empty strings -- 
const contactMeForm = () => {
    const [formData, setFormData] = useState( {
        name: '',
        email: '',
        message: '',
    });

    // need to add in handleChange logic!! 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Form submitted with ${formData}`)

    return (
            <div>
                <form className = "form" onSubmit={handleSubmit}>
                    <h2>Get in Touch!</h2>
                    <input
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        name="text"
                        onChange = {handleChange}
                    ></input>
                    <input
                    type = "text"
                    placeholder = "Email"
                    value = {formData.email}
                    name = "email"
                    onChange = {handleChange}
                    ></input>
                    <textarea
                    placeholder = "Send a message"
                    value = {formData.message}
                    name = "message"
                    onChange = {handleChange}
                    ></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
}};