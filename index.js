const express = require('express');
const app = express();
const models = require('./models');
const macs = require('./controllers/macs');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');

app.use(methodOverride('_method'));

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
	models.User.findAll().then(macs => {
		res.locals.macs = macs;
		res.render(`macs/index.handlebars`);
	});
});

app.use(bodyParser.urlencoded( { extended: false } ));
app.use('/macs', macs);

app.listen(3000);