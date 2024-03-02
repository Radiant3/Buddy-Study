//example
/**
 * Reference to Category Schema model
 * @const
 * @require Category Schema model
 */
const User= require("../model/user");
//const bcrypt = require('bcrypt');
var crypto = require('crypto'); 
const alphanumericRegex = /^[a-zA-Z0-9]+$/;
const { existsSync } = require("fs");

function hash(p){
    s = crypto.randomBytes(16).toString('hex'); 
    h =  crypto.pbkdf2Sync(p, s,  
        1000, 64, `sha512`).toString(`hex`); 
    return [h,s]
}

module.exports = {
    newUser: async function(req,res){
        const firstName =req.body.firstName;
        const email = req.body.email;
        const password = req.body.password;
        const units = req.body.units.map((unit)=>unit.toUpperCase())
        if (!alphanumericRegex.test(firstName) || !alphanumericRegex.test(lastName) ) {
            return res.status(400).json({ message: 'Name should only contain letters and numbers' });
        } 
        const hash = hash(password)
        let aUser = new User ({
            firstName: firstName,
            lastName: lastName,
            degree: req.body.degree.toUpperCase(),
            units: units,
            bio: req.body.bio,
            hash:hash[0],
            salt:hash[1],
            contact: req.body.contact,
            email: email

        })

        await aUser.save();
        res.status(200).json(aUser.id);

    },

    getUser: async function (req, res){
        let id = req.params.id;
        let profile = await User.findOne({id})
        res.status(200).json(profile)
    }

    
}