import express from 'express'

const app = express()
const Port = process.env.PORT ?? 8080

app.get('/', (req, res) => {
    return res.json({msg: 'Hello World'})
})
    
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`)
})