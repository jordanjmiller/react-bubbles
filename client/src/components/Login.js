import React, { useState } from 'react'
import axios from 'axios';

export default function Login(props) {
    const [userCredentials, setUserCredentials] = useState({username: '', password: ''});
    
    const handleChange = (e) => {
        setUserCredentials({...userCredentials, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();

        console.log('userCreds:', userCredentials);
        axios.post('http://localhost:5000/api/login', userCredentials)
        .then(res => {
            console.log(res);
            sessionStorage.setItem('token', res.data.payload);
            props.history.push('/BubblePage');
        })
        .catch(err => {console.log('LOGIN CATCH ERROR: ', err.response.data.error)
        alert(err.response.data.error)});
        setUserCredentials({username: '', password: ''})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input name='username' onChange={handleChange} placeholder='username'/>
            <input name='password' onChange={handleChange} placeholder='password'/>
            <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
