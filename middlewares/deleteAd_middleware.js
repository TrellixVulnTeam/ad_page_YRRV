const usersFunctionals = require('../models/functionals/users_functionals')
const adsFunctionals = require('../models/functionals/ads_functionals')
const categsFunctionals = require('../models/functionals/categories_functionals')

const getDeleteAdPage = async (req, res, next) => {
    const adById = await adsFunctionals.findOneAd({ id: req.params.id })
    if(adById) {
        res.render('deleteAd', { user: req.user, ad: adById })
    } else {
        const err = `There is no ad with id ${req.params.id}`
        res.render('error', { user: req.user, err: err })
    }
}

const postDeleteAdPage = async (req, res, next) => {
    const id = Number(req.params.id)
    const ad = await adsFunctionals.findOneAd({ id: id })

    if(!ad) {
        const err = `There is no ad with id ${req.params.id}`
        res.render('error', { user: req.user, err: err })
    }
    
    if(req.user.id === ad.userId) {
        await adsFunctionals.deleteAd({ id: id })
        req.flash('success_msg', 'Post deleted successfully.')
        res.redirect('/account')
    } else {
        req.flash('error_msg', 'Post cannot be deleted since it does not belong to you.')
        res.redirect(`/delete/ad/${ad.id}`)
    }
}

module.exports = { getDeleteAdPage, postDeleteAdPage }