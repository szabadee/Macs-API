const express = require('express');
const macs = express();
const models = require('../models');

// index
macs.get('/', (req, res ) => {
	models.User.findAll().then(macs => {
		res.locals.macs = macs;
		res.render('macs/index.handlebars');
	});
});

// new
macs.get('/new', (res, req) => {
	res.render(`macs/new.handlebars`);
});

// show by ID
macs.get('/:id', (req, res) => {
	models.User.findById().then(user => {
		res.locals.macs = user;
		res.render('macs/show.handlebars');
	});
});

// edit
macs.get('/:id/edit', (req, res) => {
	models.User.findById(req.params.id).then(user => {
		res.locals.macs = user;
		res.render(`macs/edit.handlebars`);
	});
});

// create
macs.post('/', (req, res) => {
	models.User.create({
	firstname: req.body.firstname,
	lastname: req.body.lastname })
	.then(res.redirect(`macs/${req.body.id}`));
});

//  update
macs.put('/:id', (req, res) => {
	models.User.update(req.body,
	{ where: { id: req.params.id } })
	.then(res.redirect(`macs/${req.params.id}`));
});
			 
// delete
macs.delete('/:id', (req, res) => {
	models.User.destroy(
	{ where: { id: req.params.id } })
	.then(res.redirect(`macs`));
});

module.exports = macs;