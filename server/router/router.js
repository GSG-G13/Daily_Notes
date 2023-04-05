// DB_URL = postgres://notes:123456@localhost:5432/notes

const getNote = require('../controllers/getnote');

const router = require('express').Router();

router.get('/notes', getNote)


module.exports = router;