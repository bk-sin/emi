const {Schema} = require('firefose');
const {SchemaTypes} = require('firefose');
const {String} = SchemaTypes;

const contactSchema = new Schema({
    nombre:{type:String, required: true}, 
    asunto:{type:String, required: true},
    email:{type:String, required: true},
    mensaje:{type:String, required: true}
}, {timestamp: true});

const {Model} = require('firefose');

const Contact = new Model("contacts", contactSchema);
module.exports = Contact;
