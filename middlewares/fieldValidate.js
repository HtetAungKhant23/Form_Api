const { body } = require('express-validator');
const valid = [
    body('type')
        .custom((value, { req }) => {
            if (value === 'selectbox' || value === 'radio') {
                if (req.body.title.length < 5 || req.body.value2.length < 2) {
                    return Promise.reject('require title or vlaue for option!');
                }
                return true;
            }
            if (value === 'phoneinput') {
                if (req.body.callbackUrl.length <= 8) {
                    return Promise.reject('require callbackUrl!');
                }
                return true;
            }

            /* validation for placeholder
                        if (value !== 'gender' || value !== 'submit'){
                            if (req.body.placeholder.length <= 5){
                                return Promise.reject('require placeholder!');
                            }
                            return true;
                        }
            */

            return true;
        })
];

module.exports = valid;