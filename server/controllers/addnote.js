const addNotesQuery =  require('../database/query/addNotesQuery'); 

const addNote = (req, res) =>{
    console.log(req.body);
    const userData = req.body;

    addNotesQuery(userData);

}

module.exports = addNote;