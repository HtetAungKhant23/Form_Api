const express = require('express');
const app = express();
const dbConnect = require('./configs/dbConnect');
const errHandler = require('./middlewares/errHandler');
const formRoute = require('./routes/formRoute');
const cors = require('./middlewares/cors');
require('dotenv').config();

app.use(express.json());
app.use(cors);

app.use('/api/v1', formRoute);

app.use(errHandler);

const start = async () => {
    try {
        const connected = await dbConnect();
        if(!connected){
            throw new Error('DB connection failed!');
        }
        console.log('connected DB!');
        app.listen(process.env.PORT, () => {
            console.log(`server is running at ${process.env.PORT}.....`);
        });
    } catch (err) {
        console.log('hay this is end', err);
    }
}

start();