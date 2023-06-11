const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routeURL = require('./Routes/routes');
const cors = require('cors');

dotenv.config();
mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDb connected successfully')).catch((error)=> console.log(error));

app.use(express.json()); // Body-parser as a middleware
app.use(cors());
app.use('/auth', routeURL); //Base path

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server is up and running on port ${PORT}`));

