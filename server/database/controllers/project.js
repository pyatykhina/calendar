const mongoose = require('mongoose');

module.exports.getProjects = (req, res) => {
    const Model = mongoose.model('project');

    Model.find().then(items => {
        res.status(200).json( items );
    });
};

module.exports.createProject = function (req, res) {
    const Model = mongoose.model('project');

    let project = new Model({
        name: req.body.name,
        description: req.body.description,
        members: [req.body.userID]
    });

    project.setColor();

    project
        .save()
        .then(project => {
            res.redirect('/main'); 
        })
        .catch(err => {
            res.redirect('/main?modal-msg=Something went wrong. Refresh the page and try again'); 
        });
} 

module.exports.addMember = function(req, res) {
    const Model = mongoose.model('project');
    const User = mongoose.model('user');

    User
        .findOne({ email: req.body.email }) 
        .then(user => {
            if (!user) {
                res.redirect('/main?proj-msg=User not found')
            } else {
                Model
                    .findOne({ _id: req.body.projectID })
                    .update(
                        { _id: req.body.projectID },
                        { $push: { members: user.id } }
                    )
                    .then(project => {
                        res.redirect('/main')
                    })
            }
        })
}