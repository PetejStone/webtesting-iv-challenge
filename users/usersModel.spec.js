module.exports = {
    get,
    insert,
    remove,
    update

}

function get() {
    return db('users')
}

function insert(id) {
    //await and dynamically set the newly created id to === the newly created user
    const [id] = await db('users').insert(user, 'id');
    //return (insert) the user from the database where the id === the newly inserted user
    return db('hobbits').where({id: id}).first()
}