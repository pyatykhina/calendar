const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: false
    },
    description: {
        type: String,
        required: false,
        unique: false
    },
    color: {
        type: String,
        required: true,
        unique: false
    },
    members: {
        type: Array,
        required: true,
        unique: false
    }
})

projectSchema.methods.setColor = function () {
    let r = Math.floor(Math.random() * 150),
        g = Math.floor(Math.random() * 150),
        b = Math.floor(Math.random() * 150);

    this.color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
};

projectSchema.methods.addMember = function(email) {
    const Model = mongoose.model('user');

    Model
        .findOne({ email: email })
        .then(user => {
            if (user) {
                this.members.push(user.id);
            } else {
                return ('User not found');
            }
        })
}

mongoose.model('project', projectSchema); 