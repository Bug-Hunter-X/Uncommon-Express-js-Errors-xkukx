const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon Error: Unexpected token } in JSON at position ...
//This error can occur if you are trying to parse JSON response from a server which is not formatted properly.
//Example: Sending an object literal instead of a JSON string

//Another uncommon error is when you are using a middleware which modifies the response object in a way that express.js does not expect.This can cause unexpected behavior and crashes.

//Another uncommon error is when you are trying to access a property of the request object which is not defined.This can occur when you are using middleware that changes the request object or when you are using a third-party library that modifies the request object.