const express = require('express');
const cors = require('cors');

// Constants
const PORT = 8080;

// App
const app = express();
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});