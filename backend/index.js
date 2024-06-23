const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(cors());
app.use('/api',routes)
mongoose.connect('mongodb://127.0.0.1:27017/data-analysis')
.then(()=> app.listen(PORT,() => console.log(`SERVER IS RUNNNING ON PORT NO:- ${PORT}`))).catch((error) => console.error(error));



