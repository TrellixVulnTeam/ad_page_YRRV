const router = require('express').Router()

const check = require('../middlewares/check')
const validationMiddlware = require('../middlewares/validation_middleware')
const categoryMiddlware = require('../middlewares/category_middleware')

router.get('/:id',
    validationMiddlware.paramValidation,
    check.checkCateg,
    categoryMiddlware.getAdsByCategoryPage)

module.exports = router