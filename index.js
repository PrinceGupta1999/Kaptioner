const express = require('express');
const app = express();

// Setting View Engine
app.set('view engine', 'ejs');

// Making public folder static
app.use('/assets', express.static('public'));

// Setting Routes
app.get('/', function (req, res) {
	res.render('index');
	console.log(req.url);
});

// Starting Server
app.listen(3000);
console.log('Kaptionator Server has Started');