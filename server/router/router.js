const getNote = require('../controllers/getnote');
const addNote = require('../controllers/addnote');

const router = require('express').Router();

router.get('/notes', getNote);
router.post('/create', addNote);


module.exports = router;