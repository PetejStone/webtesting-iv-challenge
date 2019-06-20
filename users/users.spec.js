const db = require('../data/dbConfig.js');
const {insert, remove} = require('./usersModel.js')
require('jest-dom/extend-expect')

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

        it('should check for user not to exist', async () => {
            //inserts two users to test for deletion of one
            await insert({name: 'Peter'})
            await insert({name: 'George'})
            let users = await db('users')
            expect(users).toHaveLength(2)
            
            //testing deleting specific user
            await remove(1)
            users = await db('users')
            expect(users[0].name).toBe('George') //It should be George because Peter was deleted, and now George is at 0 position

        })

        it('should check for user not to exist', async () => {
            //inserts two users to test for deletion of one
            await insert({name: 'Peter'})
            await insert({name: 'George'})
            let users = await db('users')
            expect(users).toHaveLength(2)
            
            //testing deleting specific user by id
            await remove(1)
            users = await db('users')
            //expects user with id of 1 to NOT equal the array of users containing the newly created array.
            expect([1]).not.toEqual(expect.arrayContaining(users.map(user => user.id)))

        })
    })
})