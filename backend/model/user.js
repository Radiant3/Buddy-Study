
/**
 * mongoose module 
 * @const 
 * @require mongoose
 */
const mongoose = require("mongoose");


/**
 * Defines the schema for the User model.
 */
const userSchema = mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type :String,
		required: true
	},
	degree: {
		type: String,
		required: true
	},
	units: [{
		type: String,
		required: true
	}],
	bio: {
		type: String
	},
	hash: {
		type: String,
		required: true
	}, 
    salt : String,
	email: {
		type: String
	},
	contact:[{
		type: String
	}]


});



