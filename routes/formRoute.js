const express = require('express');
const controller = require('../controllers/formCtrl');
const router = express.Router();
const valid = require('../middlewares/fieldValidate');

// localhost:5000/api/v1/create-new-form
router.post('/create-new-form', controller.newForm);

// localhost:5000/api/v1/adding-form-fields/:id
router.post('/adding-form-fields/:id', valid, controller.addingFormField);

// localhost:5000/api/v1/update-active/:id
router.post('/update-active/:id', controller.updateActive);

module.exports = router;