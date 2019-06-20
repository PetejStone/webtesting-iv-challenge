const db = require('../data/dbConfig.js');
const {insert, remove} = require('./usersModel.js')
const Users = require('./usersModel.js')
describe('users model', () => {
    //before each new test, delete content and create a new db for each test
    //this helps so new tests won't fail as users would exist in database from precious tests 
    beforeEach(async ()=> {
        await db('users').truncate()
    })

    describe('insert', () => {
        it('should add users', async () => {
            await insert({name: 'Peter'})
            await insert({name: 'George'})
            const users = await db('users')
            expect(users).toHaveLength(2)
        })

        it('should add provided user name', async () => {
            let user = {name: "Peter"}
            let inserted = await insert(user)
            expect(inserted.name).toEqual(user.name)

            user = {name: "Fred"}
            inserted = await insert(user)
            expect(inserted.name).toEqual(user.name)
        })
    })

    describe('delete', () => {
        it('should delete user', async () => {
            //inserts two users to test for deletion of one
            await insert({name: 'Peter'})
            await insert({name: 'George'})
            let users = await db('users')
            expect(users).toHaveLength(2)
            //testing deleting first user
            await remove(1)
            users = await db('users')
            expect(users).toHaveLength(1)
          
        })
    })
})