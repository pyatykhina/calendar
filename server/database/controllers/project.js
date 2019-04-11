const mongoose = require('mongoose');

module.exports.getProjects = (req, res) => {
    const Model = mongoose.model('project');
    
    Model.find({ members: { $elemMatch: { _id: req.body.userID } } })
        .then(items => {
            res.status(200).json( items );
        });
};

module.exports.createProject = function (req, res) {
    const Model = mongoose.model('project');
    const User = mongoose.model('user');

    User
        .findOne({ _id: req.body.userID })
        .then(user => {
            let member = {
                name: user.name,
                email: user.email,
                _id: user.id
            }

            let project = new Model({
                name: req.body.name,
                description: req.body.description,
                members: [member]
            })

            project.setColor();

            project
                .save()
                .then(project => {
                    res.redirect('/main'); 
                })
                .catch(err => {
                    res.redirect('/main?modal-msg=Something went wrong. Refresh the page and try again'); 
                });
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
                        { $push: { members: {
                            name: user.name,
                            email: user.email,
                            _id: user.id
                        } } }
                    )
                    .then(project => {
                        res.redirect('/main')
                    })
            }
        })
}

module.exports.removeMember = function(req, res) {
    const Model = mongoose.model('project');

    Model
        .findOneAndUpdate(
            { _id: req.body.projectID },
            { $pull: { members: {
                _id: req.body.memberID
            } } })
        .then(project => {
            res.status(200).json({ status: 'deleted' });
        })
}