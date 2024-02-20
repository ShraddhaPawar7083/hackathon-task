import React from 'react';
import './Product.css'; 
// import Navbar from './Navbar';
import { DataGrid } from '@mui/x-data-grid';
import LeftNavbar from './LeftNav';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'Name', width: 130 },
    { field: 'lastName', headerName: 'Pack Size', width: 100 },
    {field: 'Category', headerName: 'Category',width: 100,},
    {field: 'MRP', headerName: 'MRP',width:100,},
    {field: 'Image', headerName: 'Image',width: 95,},
    {field: 'statusText', headerName: 'Status',width: 95,},
];
  
const rows = [
    { id: 123, lastName: '1ltr', firstName: 'Milk', Category:'Milk', MRP:'Rs20', status: 'active', statusText: 'Active' },
    { id: 124, lastName: '2kg', firstName: 'Fruits',  Category:'Fruits', MRP:'Rs10', status: 'inactive', statusText: 'Inactive' },
    { id: 125, lastName: '1kg', firstName: 'Vegitables', Category:'Vegitables',  MRP:'Rs50', status: 'active', statusText: 'Active' },
    { id: 126, lastName: '2', firstName: 'Grosary',  Category:'Grosary', MRP:'Rs30', status: 'inactive', statusText: 'Inactive' },
    { id: 127, lastName: '500ml', firstName: 'Juice', Category:'Juice',  MRP:'Rs44', status: 'active', statusText: 'Active' },
];

function Product(){

    return(
      <div className="category-main">
        <LeftNavbar/>
        <div className="category-content">
           <div className="content_con">
            <img class="page-icon" src="/images/home.png" alt="Home Icon"/>
                    <h4>Product</h4>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                </div>
              <button className='add-btn'>Add New</button>
           </div>
            
            <div className="table-data">
           <div style={{ height: 400, width: '90%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        columnBuffer={50}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
      />
    </div>
        </div>
        </div>
        </div>
    )
}

export default Product;
