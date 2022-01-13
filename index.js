const process = require('dotenv').config(); //Ii seem to need to assign process here!
const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.json({ message: 'hey there'});
});

const port = process.env.PORT || 9000; //FOR DEPLOYMENT, use the port env variable !! else, fallback to 9000 (for DEVELOPMENT!)
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});