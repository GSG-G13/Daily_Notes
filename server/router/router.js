const getNote = require('../controllers/getnote');
const addNote = require('../controllers/addnote');
const {join} = require('path');
const deleteeNote = require('../controllers/deleteNote');
const router = require('express').Router();

router.get('/notes', getNote);
router.post('/create', addNote);
router.get('/delete/:id', deleteeNote);

router.use((req, res) => {
    res
      .status(404)
      .sendFile(join(__dirname, '..', '..', 'public', 'html', '404.html'));
  });

  router.use((err ,req, res, next) => {
    res
      .status(500)
      .sendFile(join(__dirname, '..', '..', 'public', 'html', '500.html'));
  });

module.exports = router;