const projectModel = require('../models/projectShema');


async function createProject(projectID,title, shortDescription, description, period, thumbnail, ImagesList, Tags) {
       try {
        const project = await projectModel.findOne({ projectID }); // Vérifie si le projet existe déjà dans la base de données
        if (project) {
            throw new Error('Project already exists');
        }
        const newProject = new projectModel({ projectID:projectID, title:title, shortDescription:shortDescription, description:description, period:period, thumbnail:thumbnail, ImagesList:ImagesList, Tags:Tags });
        
        // Sauvegarde du projet dans la base de données
        await newProject.save();
        
        return newProject;
        
    } catch (error) {
            throw new Error('Error creating project: ' + error.message);
        }

}

async function getProject(projectID) {
    try {
        const project = await projectModel.findOne({ projectID });
        if (!project) {
            throw new Error('Project not found');
        }
        return project;
    }
    catch (error) {
        throw new Error('Error getting project: ' + error.message);
    }
}

async function getAllProjects() {
    try {
        const project = await projectModel.find();
        return project;
    } catch (error) {
        throw new Error('Error getting project: ' + error.message);
    }
}


async function manageProject(projectID,title, shortDescription, description, period, thumbnail, ImagesList, Tags) {
    try {
        const project = await projectModel.findOne({ projectID: projectID });
        if (!project) {
            throw new Error('Project not found');
        }
        if (title) {
            project.title = title;
        }
        if (shortDescription) {
            project.shortDescription = shortDescription;
        }
        if (description) {
            project.description = description;
        }
        if (period) {
            project.period = period;
        }
        if (thumbnail) {
            project.thumbnail = thumbnail;
        }
        if (ImagesList) {
            project.ImagesList = ImagesList;
        }
        if (Tags) {
            project.Tags = Tags;
        }
        await project.save();
        console.log('Project' + projectID + 'modified' );
        return project;
    } catch (error) {
        throw new Error('Error getting project: ' + error.message);
    }
}

module.exports = {
    createProject,
    getProject,
    getAllProjects,
    manageProject
}
