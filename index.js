import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

const app = express()
app.use(cors())


app.get('/', (req, res) =>{
    res.send('234ee3')
})

app.get('/signup', (req, res) => {

})

app.get('/signin', (req, res) => {
    
})

app.listen(2400, () => {
    console.log(process.env.CLIENT_ID)
})