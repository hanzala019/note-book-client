import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './style.css'
import Searchbar from './Searchbar';

const url = 'http://localhost:5000';
const api = axios.create({baseURL:url})

const Notes = () => {
const [notes, setNotes] = useState([]);
const [searchTerm, setSearchTerm] = useState('')
    
  useEffect(async()=>{
   const {data} = await api.get('/notes');
   setNotes(data);
   
  },[])
    console.log('props', notes)
 

  const filtered = notes && notes.filter((note)=> {
      if(searchTerm == ''){
          return note;
      }
       else if (note.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
           return note;
       }
       
  })

  
    
    return (
    <div>
        {/* <Searchbar/> */}


        <div className='container1' style={{marginTop: '15px'}}>

<input type='text' placeholder='Search Notes...' onChange={(e) => {setSearchTerm(e.target.value)}  } />
       
<button className='btn'> <Link to='/form' style={{textDecoration: 'none', color:'#238bb4'}}>Leave A Note</Link></button>

        
       </div>
   


        <div className=' container1' style={{marginTop: '60px'}}>
        
            {notes && filtered.map((note)=> { return <div className='notes' key={note._id}>
           
           <Link style={{textDecoration: 'none'}} to={`/note/${note._id}`}><h1>{ note.title}  </h1></Link> 
             
           
        </div>})}
            
        </div>
    </div>
    );
};

export default Notes;