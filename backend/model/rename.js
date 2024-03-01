/**
 * Category Schema model
 * Example
 */

/**
 * mongoose module 
 * @const 
 * @require mongoose
 */
const mongoose = require("mongoose");

/**
 * Represents an category in the system.
 * @typedef {Object} Category
 * @property {string} categoryId - The unique identifier for the category.
 * @property {string} name - The name of the category.
 * @property {string} description - The description of the category.
 * @property {string} imagePath - The path to the category's image.
 * @property {Array} eventsList - Contains all the list belongs to that category.
 * @property {date} createdAt - The create date of the category.
 */

/**
 * Defines the schema for the Category model.
 */
const categorySchema = mongoose.Schema({
	categoryId: {
		type: String, 
		default: function() {
			const randomAlphabet1 = String.fromCharCode(Math.round(Math.random() * (90 - 65) + 65));
			const randomAlphabet2 = String.fromCharCode(Math.round(Math.random() * (90 - 65) + 65));
			const randomInteger = (Math.floor(Math.random() * 9999) + 1).toString().padStart(4, '0');
			return `C${randomAlphabet1}${randomAlphabet2}-${randomInteger}`;
		},
	},
	name: {
		type: String,
		required: true,
	},
    description: {
        type: String,
    },
    imagePath: {
        type: String
    },
    eventsList: [{
		type: mongoose.Schema.Types.ObjectId,
	    ref: "Event",
	}],
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("Category", categorySchema);
