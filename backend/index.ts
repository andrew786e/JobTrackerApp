import express from 'express';
import  {FireStoreDatabase} from './model/databaseService'
import addJobRoute from './routes/addJob'

const app : express.Application = express() ;
const port : number = 3000 ;

// app.get('/' , (_req , _res) => {
//     const db = new FireStoreDatabase() ;
//     db.testWriteCollection() ;
//     _res.send("Hello World!")
// })

app.use('/' , addJobRoute) ;

app.listen(port , () => {
    console.log(`Example app listening on port ${port}`) 
})