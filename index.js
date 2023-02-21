const cors = require('cors');
const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  const date = new Date();
  if (date.getMonth() == 1 && date.getDate() == 21) {
    res.sendFile(path.join(__dirname + '/birthday.html'));
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
