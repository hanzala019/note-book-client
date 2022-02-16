import React from 'react';
import './style.css';

const Navbar = () => {

    return (
       
        <div className='container'>
          
            <div className='logo'>
              <a href='http://localhost:3000/' style={{textDecoration: 'none', color: 'rgb(146, 216, 193)'}}> <h1>NOTEBOOK</h1> </a>  
            </div>
        </div>
    );
};

export default Navbar;