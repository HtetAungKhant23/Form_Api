const FormField = require("../models/formFieldModel");
const Form = require("../models/newFormModel");
const { validationResult } = require('express-validator');

exports.newForm = async (req, res, next) => {
    try {
        const formName = req.body.formName;
        const service = req.body.service;
        const newForm = new Form({
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

        if(title.length > 5 && value2.length > 2) {
            field.options.push({
                title: title,
                value: value2
            });
        }        

        await field.save();
        const form = await Form.findById(req.params.id);
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
    try {
        const form = await Form.findById(req.params.id);
        const fields = await FormField.find();
        if(fields.length < 2){
            const err = new Error('form-field still need to add!');
            err.statusCode = 422;
            throw err;
        }
        const existSubmit = fields.filter(submit => submit.fieldName === 'submit');

        if(existSubmit.length === 0){
            const err = new Error('submit form-field is needed to active form!');
            err.statusCode = 422;
            throw err;
        }

        form.isActive = true;
        await form.save();

        res.status(200).json({
            message: 'form activation success!'
        })
        

    } catch (err) {
        next(err);
    }
}