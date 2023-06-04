const FormField = require("../models/formFieldModel");
const NewForm = require("../models/newFormModel");

exports.newForm = async (req, res, next) => {
    try {
        const formName = req.body.formName;
        const service = req.body.service;
        const newForm = new NewForm({
            formName,
            service
        });
        await newForm.save();
        res.status(200).json({
            newForm
        });
    } catch (err) {
        next(err);
    }
};


exports.addingFormField = async (req, res, next) => {
    console.log('hi');
}


exports.updateActive = async (req, res, next) => {
    console.log('hi');
}