const addNotesQuery = require('../database/query/addNotesQuery');

const addNote = (req, res) => {
    const userData = req.body;
    addNotesQuery(userData).then(result => {
        res.status(201).json({
            data: result
        })
    }).catch(err => console.log(err))

}

module.exports = addNote;