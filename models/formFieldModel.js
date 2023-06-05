const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formFieldSchema = new Schema({
    fieldName: {
        type: String,
    },
    placeholder: {
        type: String,
        default: ""
    },
    isRequired: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        required: true
    },      // input || radio || selectbox || textarea || submit || phoneinput
    value: {
        type: String,
        default: ""
    },
    isHidden: {
        type: Boolean,
        default: false
    },
    isAction: {
        type: Boolean,
        default: false
    },
    callbackUrl: {
        type: String
    },
    options: [{
        title: {
            type: String
        },
        value: {
            type: String
        }
    }]
});

module.exports = mongoose.model('FormField', formFieldSchema);