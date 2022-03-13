const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const downloadRouter = require('./routes/download');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/download', downloadRouter);

const Port = process.env.PORT;

app.listen(Port, (err) => {
  console.log(`server has started`);
});
