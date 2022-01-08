const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/build'));

app.get('/', () => {

})

const port = process.env.PORT || 80;

app.listen(port, () => console.log(`Server running on port ${port}`));