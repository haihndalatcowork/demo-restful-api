const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

let routes = require('./api/routes');
routes(app);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));