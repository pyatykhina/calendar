const mongoose = require('mongoose');

module.exports.isAuth = function (req, res, next) {
    if (!req.body.email || !req.body.password) {
        return res.redirect('/login?msg=Fill in all the fields');
    }

    const Model = mongoose.model('user');

    Model
        .findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                res.redirect('/login?msg=User not found');
            }
            if (!user.validPassword(req.body.password)) {
                res.redirect('/login?msg=Invalid password');
            } 
            res.redirect('/login?msg=Authorized'); 
        }).catch(e => {
            res.redirect('/login?msg=Something went wrong. Refresh the page and try again.');
        });
} 

module.exports.isReg = function (req, res) {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.redirect('/login?msg=Fill in all the fields');
    }

    const Model = mongoose.model('user');

    Model
        .findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                res.redirect('/login?msg=User is already registered');
            }
        })

    let user = new Model({
        name: req.body.name,
        email: req.body.email,
    });

    user.setPassword(req.body.password);

    user
        .save()
        .then(user => { 
            res.redirect('/login?msg=You have registered successfully'); 
        })
        .catch(err => {
            res.redirect('/login?msg=Something went wrong. Refresh the page and try again.');
        });
} 