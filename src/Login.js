import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Login.css";


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleSubmit(event){
        event.preventDefault(); 
        
    }
    return (
        <div className='background-image d-flex vh-100 justify-content-center align-items-center'>
        <div className='p-3 bg-white w-35 form-container'>
                <div className='logo-container'>
                        <img src="http://localhost:3000/images/digitalflake_logo.jpg" alt="Logo" className="logo" />
                        <h4>Welcome to Digitalflake Admin</h4>
                </div>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '40ch' },
                            }}
                        noValidate
                        autoComplete="off"
                    >
                    <div className="text-field-container">
                    <TextField
                        label="Email ID"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                    />
                    </div>
                    <div className="text-field-container">
                    <TextField label="Password" 
                        id="outlined-size-small" 
                        defaultValue=""
                        size="small"
                        />
                    </div>
                </Box>
                <div className='pass'><p>Forgot Password?</p></div>
                        <button className='btn'>Log In</button>
                </div>
        </div>
    )
}

export default Login;
