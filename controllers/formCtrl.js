const FormField = require("../models/formFieldModel");
const NewForm = require("../models/newFormModel");
const { validationResult } = require('express-validator');

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
    try {
        const {
            fieldName,
            placeholder,
            isRequired,
            type,     // input || radio || selectbox || textarea || submit || phoneinput
            value,
            isHidden,
            isAction,
            callbackUrl,
            title,
            value2 } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const err = new Error(errors.errors[0].msg);
            err.statusCode = 422;
            throw err;
        }

        const field = new FormField({
            fieldName,
            placeholder,
            isRequired,
            type,     // input || radio || selectbox || textarea || submit || phoneinput
            value,
            isHidden,
            isAction,
            callbackUrl
        });

        field.options.push({
            title: title,
            value: value2
        })

        await field.save();
        const form = await NewForm.findById(req.params.id);
        form.fields.push(field._id);
        await form.save();

        res.status(200).json({
            message: 'OK NA SA',
            form: form
        });

    } catch (err) {
        next(err);
    }

}


exports.updateActive = async (req, res, next) => {
    console.log('hi');
}