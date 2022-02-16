import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './style.css'

const url = 'https://note--book.herokuapp.com/';
const api = axios.create({baseURL:url})

const Note = () => {
    
 const navigate = useNavigate()   
 const [note, setNote] = useState({title:'', body:''})   
 const {id} = useParams();

    useEffect(async()=>{
        const {data} = await api.get(`/notes/${id}`);
        setNote(data);
        
       },[])

     const handleDelete = (e)=>{ 

        console.log(e.target.id)
        api.delete(`/notes/${e.target.id}`)
        navigate('/')
    }

    const handleEdit = (e)=>{ 
      console.log(note)
      window.localStorage.setItem('note', JSON.stringify(note))
      navigate('/form')
    }

    
    return (
        <div className='note-header'>

            <div className='title'>
               <h1>{note.title ? `${note.title}` : 'Wait a while' }</h1>
            </div>

            <div className='body'>
              <h3>{note.body ? `${note.body}` : 'Please' }</h3>
            </div>
            
            <div style={{display: 'flex', justifyContent:'center'}}>
                <button disabled className='del btn1' id={id} onClick={handleDelete}>Delete</button>
                <button  disabled className='edit btn1'id={id} onClick={handleEdit}> Edit </button>
           </div>

            <div style={{backgroundColor: 'rgb(241 206 105 / 75%)', borderLeft: '8px solid rgb(243 205 64 / 56%)', padding:" 8px", margin: '15px 0px'}}>
              <h5> The buttons are disabled at the moment</h5>
            </div>

        </div>
    );
};

export default Note;


