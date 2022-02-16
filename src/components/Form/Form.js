import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style1.css';

const url = 'http://localhost:5000';
const api = axios.create({baseURL:url})

const Form = () => {

    const [data, setData] = useState({title:'', body:'', _id:''})
    let storageData = {title: '', body: '', _id: ''}
    useEffect(()=>{

        storageData = JSON.parse(window.localStorage.getItem('note'))
        
        if(storageData){
            setData({title:storageData.title, body:storageData.body, _id:storageData._id})
        }
        
    },[])

    
        storageData = ({...data})
    
    
    console.log(data)

    const handleCreate = (e)=> {
    
            api.post('/notes', {title: data.title, body:data.body})
        
    }
        const handleUpdate = () => {

            api.patch(`/notes/${storageData._id}`, data)
                window.localStorage.removeItem('note')
    
        }

  
            if(storageData._id){
                return (
                    <div className='container2'>
                    <div className='box'>
                         <input className='input' value={storageData.title} type='text' name='title' placeholder='Title' onChange={(e)=> setData({...data, title: e.target.value})}  required/> 
                        <textarea className='text-box' value={storageData.body} name='body' placeholder='Body' onChange={(e)=> setData({...data, body:e.target.value})}  required/>
                        { data.title && data.body ? <Link to={`/note/${storageData._id}`} style={{color: '#238bb4', textDecoration: 'none'}}> <button className='button' onClick={handleUpdate}>   Update </button > </Link>
                      :  <button className='button'> Update </button> }
                        
            
                      {/* <input className='input'  type='text' name='title' placeholder='Title' onChange={(e)=> setData({...data, title: e.target.value})}  required/>
                      <textarea className='text-box'  name='body' placeholder='Body' onChange={(e)=> setData({...data, body:e.target.value})}  required/> */}
                      
                      
                    </div>
                </div>
                );
            } else {
                return (
                    <div className='container2'>
                        <div className='box'>
                        
                             <input className='input'  type='text' name='title' placeholder='Title' onChange={(e)=> setData({...data, title: e.target.value})}  required/>
                            <textarea className='text-box'  name='body' placeholder='Body' onChange={(e)=> setData({...data, body:e.target.value})}  required/>

                            { data.title && data.body ? <Link to='/' style={{color: '#238bb4', textDecoration: 'none'}}> <button className='button' onClick={handleCreate}>   Create </button > </Link>
                      :  <button className='button'> Create </button> }
                        </div>
                    </div>
                    );
            }
    
};

export default Form;