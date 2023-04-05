const connection = require('../config/connection');

const addNotesQuery = (userData) => {
    const { title, content } = userData;

    const sql = {
        text: 'INSERT INTO notes (title, content) VALUES ($1 , $2) RETURNING title, content',
        values: [title, content]
    }

    return connection.query(sql)
};

module.exports = addNotesQuery;