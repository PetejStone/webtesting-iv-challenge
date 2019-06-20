const db = require('../data/dbConfig.js');

module.exports = {
    //get,
    insert,
    //remove,
   // update,
    findById

}

function get() {
    return db('users')
}


function findById(id) {
    return db('users').where({id: id})
    .first() //returns first option (only returns one option anyways) -- this pulls it out of array
}

async function insert(user) {
    const [id] = await db('users').insert(user); //inserts user and sets it == to id
  
    return findById(id); //returns the user that was created 
  }