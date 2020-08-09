import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()


const app = express()
const port = 3000

app.use(cors())


app.get('/', (req, res) =>{
    res.json({info: "huh"})
})

app.get('/signup', (req, res) => {

})

app.get('/signin', (req, res) => {
    
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})