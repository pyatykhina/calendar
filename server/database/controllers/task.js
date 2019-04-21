const mongoose = require('mongoose');

module.exports.getTasks = (req, res) => {
    const Model = mongoose.model('task');
    
    Model.find({ project: { '$in': req.body.projectsID } })
        .then(items => {
            res.status(200).json( items );
        });
};

module.exports.addTask = function (req, res, next) {
    const Model = mongoose.model('task');

    let task = new Model({
        title: req.body.title,
        timeStart: req.body.timeStart,
        timeEnd: req.body.timeEnd,
        project: req.body.project
    });

    task
        .save()
        .then(task => { 
            res.redirect('/diary'); 
        })
        .catch(err => {
            res.redirect('/diary?modal-msg=Something went wrong. Refresh the page and try again');
        });
} 