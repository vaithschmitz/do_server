import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()



app.get('/', (req, res) =>{
    res.send('NO BRUH')
})

app.get('/signup', (req, res) => {

})

app.get('/signin', (req, res) => {
    
})

app.listen(2400, () => {
    console.log(process.env.CLIENT_ID)
})