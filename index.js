const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const downloadRouter = require('./routes/download');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/download', downloadRouter);

app.listen(process.env.PORT || 5000, (err) => {
  console.log(`server has started`);
});
