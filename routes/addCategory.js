const router = require('express').Router()

const check = require('../middlewares/check')
const validationMiddleware = require('../middlewares/validation_middleware.js')
const addCategoryMiddlware = require('../middlewares/addCategory_middleware.js')

router.get('/',
    check.checkNotAuthenticated,
    check.checkNotAdmin,
    addCategoryMiddlware.getAddCategoryPage)

router.post('/',
    check.checkNotAuthenticated,
    check.checkNotAdmin,
    addCategoryMiddlware.postAddCategoryPage)

module.exports = router