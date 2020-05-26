const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/getTime', (req, res) => {
  res.set({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",

    // enabling CORS
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  })

  setInterval(() => {
    res.write(`data: ${JSON.stringify(new Date().toLocaleTimeString())}\n\n`);
  }, 5000)
});


app.listen(3001, () => {
  console.log('server started');
});