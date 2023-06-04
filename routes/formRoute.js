const express = require('express');
const controller = require('../controllers/formCtrl');
const router = express.Router();
const { body } = require('express-validator');
const valid = require('../middlewares/fieldValidate');

router.post('/create-new-form', controller.newForm);

router.post('/adding-form-fields/:id', valid, controller.addingFormField);

router.post('/update-active/:id', controller.updateActive);

module.exports = router;