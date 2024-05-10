const joi = require("@hapi/joi");

const authSchema = joi.object({
  mobile: joi.string().trim().pattern(/^09[0-9]{9}$/).error(new Error('شماره تلفن وارد شده نادرست است'))
});

module.exports = authSchema;
