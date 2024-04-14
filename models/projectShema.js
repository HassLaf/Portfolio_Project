const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    ImagesList: {
        type: [String],
        required: true
    },
    Tags: {
        type: [String],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;