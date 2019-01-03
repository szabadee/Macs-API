const express = require('express');
const macs = express();
const models = require('../models');

// index
macs.get('/', (req, res ) => {
	models.Mac.findAll().then(macs => {
		res.locals.macs = macs;
		res.render('macs/index.handlebars');
	});
});

// new
macs.get('/new', (req, res) => {
	res.render('macs/new.handlebars');
});

// show by ID
macs.get('/:id', (req, res) => {
	models.Mac.findById(req.params.id).then(mac => {
		res.locals.mac = mac;
		res.render('macs/show.handlebars');
	});
});

// edit
macs.get('/:id/edit', (req, res) => {
	models.Mac.findById(req.params.id).then(mac => {
		res.locals.mac = mac;
		res.render('macs/edit.handlebars');
	});
});

// create
macs.post('/', (req, res) => {
	models.Mac.create({
	name: req.body.name,
	type: req.body.type,
	inch: req.body.inch,
	year: req.body.year})
	.then(res.redirect(`/macs/${req.body.id}`));
});

//  update
macs.put('/:id', (req, res) => {
	models.Mac.update(req.body,
	{ where: { id: req.params.id } })
	.then(res.redirect(`/macs/${req.params.id}`));
});
			 
// delete
macs.delete('/:id', (req, res) => {
	models.Mac.destroy(
	{ where: { id: req.params.id } })
	.then(res.redirect(`/macs`));
});

module.exports = macs;