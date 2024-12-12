const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  //Proper JSON handling
  const jsonData = { message: 'Hello, World!' };
  res.json(jsonData); // Use res.json to send JSON
});

//Safe middleware implementation
//Example of a middleware function that does not modify the response object in a way that Express.js does not expect
app.use((req, res, next) => {
  console.log('Request URL:', req.url);
  next();
});

//Safe request property access

app.get('/user/:id', (req, res) => {
  const userId = req.params.id; // Access parameters safely
  if (userId) {
    res.send(`User ID: ${userId}`);
  } else {
    res.status(400).send('Invalid user ID');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});