const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const progressSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    questions: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Progress', progressSchema);

