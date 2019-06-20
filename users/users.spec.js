const db = require('../data/dbConfig.js');
const {insert} = require('./usersModel.js')

describe('users model', () => {
    //before each new test, delete content and create a new db for each test
    //this helps so new tests won't fail as users would exist in database from precious tests 
    beforeEach(async ()=> {
        await db('users').truncate()
    })

    describe('insert', () => {
        it('should add users', async () => {
            await insert({name: 'Peter'})
            const users = await db('users')
            expect(users).toHaveLength(1)
        })
    })
})