const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose')
const articles = require('./models/article.js')
const users = require('./models/user.js')
const app = express();

const port = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology:true})
.then(() => console.log('connecting to database.'))
.catch((err) => console.log(err))

morgan.token('host',(req,res) =>{
	return req.hostname;
})

app.use(morgan(':method :host :status :res[content-type] - :response-time ms'))
app.use(cors())
app.use(express.json())


app.get('/articles', async(req, res) => {

})

app.post('/login', async(req, res) =>{

})

app.post('/write', async(req, res) =>{
	
})

app.listen(port, () =>{
	console.log(`app is listening on port ${port}`)
})
