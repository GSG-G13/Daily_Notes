const deleteNotesQuery = require("../database/query/deleteNoteQuery")

const deleteNote = (req, res) => {
  deleteNotesQuery(req.params.id)
    .then(() => res.end("success"))
    .catch(err => console.log("err:", err));
}

module.exports = deleteNote