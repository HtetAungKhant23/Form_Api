const express = require('express');
const controller = require('../controllers/formCtrl');
const router = express.Router();

router.post('/create-new-form', controller.newForm);

router.post('/adding-form-fields/:id', controller.addingFormField);

router.post('/update-active/:id', controller.updateActive);

module.exports = router;