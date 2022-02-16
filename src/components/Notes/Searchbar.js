import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Searchbar = () => {
    return (
        
  <div className='container1' style={{marginTop: '15px'}}>

 <input type='text' placeholder='Search Notes...' />
        
 <button className='btn'> <Link to='/form' style={{textDecoration: 'none', color:'#238bb4'}}>Leave A Note</Link></button>
            
        </div>
    );
};

export default Searchbar;