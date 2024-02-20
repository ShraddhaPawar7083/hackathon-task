import React from 'react';
import './ProductDis.css'; 
// import Navbar from './Navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function ProductDis(){
    

    return(

        <div className="description">
        {/* <Navbar/> */}
        <div className="content_con">
            <img class="page-icon" src="/images/arrow.jpg" alt="Home Icon"/>
                <h4>Add Product</h4>
            </div>
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="fields">
        <TextField
          id="outlined-required"
          label="Category Name"
          defaultValue=""
          size="small"
        />
        <TextField
          id="outlined-required"
          label="Description"
          defaultValue=""
          size="small"
        />
        <TextField
          id="outlined-password-input"
          label="Status"
          defaultValue=""
          size="small"   
        />
        <TextField
          id="outlined-password-input"
          label="Status"
          defaultValue=""
          size="small"   
        />
        <TextField
          id="outlined-password-input"
          label="Status"
          defaultValue=""
          size="small"   
        />
        <TextField
          id="outlined-password-input"
          label="Status"
          defaultValue=""
          size="small"   
        />
      </div>
      </Box>
      <button className='cancel-btn'>Cancel</button>
      <button className='save-btn'>Save</button>
 
            </div>
    )
}

export default ProductDis;