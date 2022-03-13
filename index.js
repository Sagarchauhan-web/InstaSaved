const cors = require('cors');
const express = require('express');

const downloadRouter = require('./routes/download');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/download', downloadRouter);

const Port = process.env.Port;

app.listen(Port, (err) => {
  console.log(`server has started`);
});
