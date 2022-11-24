import { connect } from 'mongoose'

const database = process.env.NODE_ENV as string === 'test' ? process.env.TEST_DB : process.env.PROD_DB

// console.log('database', database)

export default connect(database as string)
.then(()=> console.log('🚀  Connected to database... '))