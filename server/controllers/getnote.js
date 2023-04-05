const getNotes = require('../database/query/getNotes');

const getNote = (req, res) => {
    getNotes().then ((result)=>{res.status(200).json({
   data:result.rows
    })})
    .catch((err)=> console.log(err));

}
module.exports = getNote;