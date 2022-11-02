const connectToMongo = require("./db");
const express = require('express');
const { mongoose } = require("mongoose");
const cors=require('cors')

const app = express()
connectToMongo();
const port = 5000
// for importing moongose

app.use(cors())
app.use(express.json())//we are using this for using middleware

//Available Routes

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`iNotebook Backend starts at ${port}`)
})