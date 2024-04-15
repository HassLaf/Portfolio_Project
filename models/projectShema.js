const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectID: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
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
        type: Number,
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

const projectModel = mongoose.model('Project', projectSchema);

module.exports = projectModel;