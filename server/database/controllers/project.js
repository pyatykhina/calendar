const mongoose = require('mongoose');

module.exports.getProjects = (req, res) => {
    const Model = mongoose.model('project');

    Model.find().then(items => {
        res.status(200).json( items );
    });
};

module.exports.createProject = function (req, res, next) {
    const Model = mongoose.model('project');

    let project = new Model({
        name: req.body.name,
        description: req.body.description
    });

    project.setColor();

    project.addMember(req.body.email);

    if (project.addMember(req.body.email) === 'User not found') {
        res.redirect('/main?modal-msg=User not found');
    };

    project
        .save()
        .then(project => {
            res.redirect('/main'); 
        })
        .catch(err => {
            res.redirect('/main?modal-msg=Something went wrong. Refresh the page and try again'); 
        });
} 