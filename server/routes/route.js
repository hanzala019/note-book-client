const express = require('express');
const router = express.Router();
const {home, getUser, postUser, getNotes, postNotes, deletedNotes, updatedNotes, getSingleNote} = require('../controllers/controller')

router.get('/', home);
router.get('/notes',getNotes)
router.get('/notes/:id', getSingleNote)
router.post('/notes',postNotes)
router.get('/user', getUser);
router.post('/user', postUser);
router.delete('/notes/:id', deletedNotes)
router.patch('/notes/:id', updatedNotes)

module.exports = router;