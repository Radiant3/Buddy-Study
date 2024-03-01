/**
 * Event api route endpoints
 * Example////////
 */
/**
 * express module 
 * @const 
 * @require mongoose
 */
const express = require("express");
/**
 * event-controller module 
 * @const 
 * @require event-controller
 */
const eventCont = require("../controller/event-api-controller");
/**
 * Router of app
 * @const 
 */
const router = express.Router();

/**
 * Express router for creating a new event from given json object.
 * @name post/ create new event
 * @function
 * @param {string} path - Express path
 * @param {function} callback - Express callback
 */
router.post("/create-event", eventCont.createEvent);
