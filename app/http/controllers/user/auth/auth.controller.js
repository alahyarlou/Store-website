const createHttpError = require('http-errors')
const authSchema = require('./../../../validations/user/auth.schema')

class AuthController {
    async loginUser(req, res, next) {
        try {
            await authSchema.validateAsync(req.body)
            return res.status(200).send('ورود شما با موفقیت انجام شد')
        } catch (error) {
            next(createHttpError.BadRequest(error.message))
        }
    }
}

module.exports = new AuthController()