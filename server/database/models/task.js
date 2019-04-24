const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema ({
    title: {
        type: String,
        required: true,
        unique: false
    },
    timeStart: {
        type: String,
        required: true,
        unique: false
    },
    timeEnd: {
        type: String,
        required: true,
        unique: false
    },
    project: {
        type: Object,
        required: true,
        unique: false
    }
})

mongoose.model('task', taskSchema); 