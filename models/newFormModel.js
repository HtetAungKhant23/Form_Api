const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newFormSchema = new Schema({
    formName: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    fields: [{
        type: Schema.Types.ObjectId,
        ref: 'FormField'
    }]
});

module.exports = mongoose.model('NewForm', newFormSchema);