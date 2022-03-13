const cors = require('cors');
const express = require('express');

const downloadRouter = require('./routes/download');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/download', downloadRouter);

app.listen(4000, (err) => {
  console.log(`server has started`);
});
