
/**
 * mongoose module 
 * @const 
 * @require mongoose
 */
const mongoose = require("mongoose");

const requestSchema = mongoose.Schema({
    requestSender:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    requestReciever:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true

    },
    requestText:{
        type: String
    }
})

module.exports = mongoose.model("Request", requestSchema);