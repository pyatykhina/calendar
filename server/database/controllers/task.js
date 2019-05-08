const mongoose = require('mongoose');

module.exports.getTasks = (req, res) => {
    const Model = mongoose.model('task');
    
    Model.find({ 'project._id': { '$in': req.body.projectsID } })
        .then(items => {
            res.status(200).json( items );
        });
};

module.exports.addTask = function (req, res, next) {
    const Model = mongoose.model('task');
    const Project = mongoose.model('project');

    Project
        .findOne({ _id: req.body.project })
        .then (result => {
            let project = {
                _id: req.body.project,
                name: result.name,
                color: result.color
            }

            let task = new Model({
                title: req.body.title,
                timeStart: req.body.timeStart,
                timeEnd: req.body.timeEnd,
                project: project
            });
        
            task
                .save()
                .then(task => { 
                    res.redirect('/diary'); 
                })
                .catch(err => {
                    res.redirect('/diary?modal-msg=Something went wrong. Refresh the page and try again');
                });

        })
} 

module.exports.removeTask = function(req, res) {
    const Model = mongoose.model('task');

    Model
        .findOneAndDelete(
            { _id: req.body.taskID })
        .then(project => {
            res.status(200).json({ status: 'deleted' });
        })
}