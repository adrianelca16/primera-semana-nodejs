const express = require('express')
const tasksRouter = require('./tasks/tasks.router').router
require('dotenv').config()


const app = express()
const port = process.env.PORT

app.use(express.json())

app.use('/api/v1', tasksRouter)

//puerto del sevidor
app.listen(port, () => {
    console.log(`server started at port ${port}`)
})