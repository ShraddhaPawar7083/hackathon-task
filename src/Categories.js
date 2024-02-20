import React from "react";
import './Categories.css';
// import Navbar from "./Navbar";
import LeftNavbar from "./LeftNav";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'Name', width: 130 },
    { field: 'lastName', headerName: 'Description', width: 400 },
    {field: 'statusText', headerName: 'Status',width: 90,
    },
];
  
const rows = [
    { id: 123, lastName: 'Lorem Ipsum is simply dummy text', firstName: 'Milk', status: 'active', statusText: 'Active' },
    { id: 124, lastName: 'Lorem Ipsum is simply dummy text', firstName: 'Fruits', status: 'inactive', statusText: 'Inactive' },
    { id: 125, lastName: 'Lorem Ipsum is simply dummy text', firstName: 'Vegitables', status: 'active', statusText: 'Active' },
    { id: 126, lastName: 'Lorem Ipsum is simply dummy text', firstName: 'Grosary', status: 'inactive', statusText: 'Inactive' },
    { id: 127, lastName: 'Lorem Ipsum is simply dummy text', firstName: 'Juice', status: 'active', statusText: 'Active' },
];


function Categories(){
    
    return(
      <div className="category-main">
        <LeftNavbar/>
        <div className="category-content">
           <div className="content_con">
            <img class="page-icon" src="/images/home.png" alt="Home Icon"/>
                    <h4>Category</h4>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                </div>
              <button className='add-btn'>Add New</button>
           </div>
           <div className="table-data">
           <div style={{ height: 350, width: '90%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        columnBuffer={50}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
      />
    </div>
        </div>
        </div>
    </div>
    )
}

export default Categories;