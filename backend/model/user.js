
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
	Id:{},
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
	password: {
		type: String
	},
	contact:[{
		type: String
	}]


});



