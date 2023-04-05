const connection =  require('../config/connection');

const getNotes = () => {
    
return connection.query('SELECT * FROM notes')
}; 

module.exports = getNotes;