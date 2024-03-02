
/**
 * mongoose module 
 * @const 
 * @require mongoose
 */
const mongoose = require("mongoose");


/**
 * Defines the schema for the Category model.
 */
const userSchema = mongoose.Schema({
	
});

module.exports = mongoose.model("User", userSchema);
