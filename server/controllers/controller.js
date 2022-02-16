const Note = require("../models/notes");
const User = require("../models/user");


const home = (req, res) => {
    res.send('Hi from the backend')
};

const getNotes = async (req,res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getSingleNote = async (req,res) => {
    const id = req.params.id;
    console.log(id)
    try {
        const note = await Note.findById(id);
        res.status(200).json(note)
    } catch (error) {
        res.status(400).json(id);
    }
}

const postNotes = async (req,res) => {
    const data = req.body;
   
    try {
        const note = await Note.create(data);
        res.status(200).json({msg: "success", note});
    } catch (error) {
        res.status(400).json(error);
    }
}

const deletedNotes = async (req,res) => {
    const id = req.params.id;

     try {
        const deletedNote = await Note.findByIdAndDelete(id)
         res.status(200).json({msg: "deleting successful", DeletedNote: deletedNote})
     } catch (error) {
         res.status(400).json(error)
     }
}

const updatedNotes = async (req,res) => {
    const id = req.params.id;
    const note = req.body
     try {
        const updatedNote = await Note.findByIdAndUpdate(id, {title: note.title, body:note.body}, {new:true})
         res.status(200).json({msg: "deleting successful", DeletedNote: deletedNote})
     } catch (error) {
         res.status(400).json(error)
     }
}


const getUser = async (req,res) => {
    try {
        const user = await User.find();
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error)
    }
};

const postUser = async (req,res) => {
    const {email, password, username} = req.body;
     try {
         const user = User.create({email:email, password:password, username:username});
         res.status(200).json({msg:"success"})
     } catch (error) {
         res.status(400).json(error)
     }
};



module.exports = {
    home,
    getNotes,
    postNotes,
    getUser,
    getSingleNote,
    postUser,
    deletedNotes,
    updatedNotes,
}