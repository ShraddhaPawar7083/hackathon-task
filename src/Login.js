import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
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
        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
            <img src="https://s3-alpha-sig.figma.com/img/4f8b/6e9d/609c7731d037f1b65d00906a7bc1e241?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lb~DCvDWLcFkDtiNVfcZqGTXnoC7RSzqCMYJZQ~4GU-MdWV0roKSRgV3WlvM7Ovg1xwGhb9PNOzuerlNAKmkvMirm7jRGk0d4RNkOCEoJnsSCOTgXJsJW-ToggzcXjMHABCewk9rAfXUkNlkHjvP9o-dOHQHN5ZXFNkyJdfJ5VCpQ7Z1vuu6lOt0y-jHcIFP5GidiRZ0aP2L3gSc5ymrXeNLIQ8uhctZMvECoz2wHU4Nj22bwASU0aOCGesuJkk46rwUxTbd82LAkXjFAhZ7ruPMyOWN3gGkpv4Mfj37quE7ywEuesibtp6DEC7tNA4zOKPbek89cTLAcDycrvJszQ__" alt="Logo" className="logo" />
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
