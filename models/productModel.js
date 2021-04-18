exports = module.exports = function(app, mongoose) {

	var product = new mongoose.Schema({
		_id: {type: String},
		id: 			{ type: Number },
		brand: 			{ type: String },
		description: 	{ type: String },
		image:  		{ type: String },
		price: 			{ type: Number }

	}, { collection : 'products' }
);

	mongoose.model('products', product);

};