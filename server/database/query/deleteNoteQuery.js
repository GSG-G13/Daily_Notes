const connection = require('../config/connection');

const deleteNotesQuery = (id) => {
  console.log(id);
  let sql = {
      text: `DELETE FROM notes WHERE id = ${id};`
  }

  return connection.query(sql)
};

module.exports = deleteNotesQuery;