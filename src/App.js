import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import Note from "./components/Notes/Note/Note";

import Notes from "./components/Notes/Notes";





function App() {
  
  return (
    <div>
  <Navbar></Navbar>
    <Router>
      <Routes>
        <Route path='/' exact element={<Notes/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path="/note/:id" element={<Note/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
