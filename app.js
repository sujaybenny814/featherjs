const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const bodyParser = require('body-parser');


const app = express(feathers());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/echo', async (req, res) => {
 return res.json(req.body);
});


const port = 4000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
