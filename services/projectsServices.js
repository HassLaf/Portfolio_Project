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


async function manageProject(projectID, title, shortDescription, description, period, thumbnail, ImagesList, Tags) {
    try {
        // Construire l'objet contenant les champs à mettre à jour
        const updateFields = {};
        if (title) {
            updateFields.title = title;
        }
        if (shortDescription) {
            updateFields.shortDescription = shortDescription;
        }
        if (description) {
            updateFields.description = description;
        }
        if (period) {
            updateFields.period = period;
        }
        if (thumbnail) {
            updateFields.thumbnail = thumbnail;
        }
        if (ImagesList) {
            updateFields.ImagesList = ImagesList;
        }
        if (Tags) {
            updateFields.Tags = Tags;
        }
        
        // Rechercher et mettre à jour le projet en utilisant findOneAndUpdate
        const updatedProject = await projectModel.findOneAndUpdate(
            { projectID: projectID }, // Critère de recherche
            updateFields, // Champs à mettre à jour
            { new: true } // Pour renvoyer le document mis à jour
        );
        console.log(updatedProject)
        if (!updatedProject) {
            throw new Error('Project not found');
        }

        console.log('Project ' + projectID + ' modified');
        return updatedProject;
    } catch (error) {
        throw new Error('Error updating project: ' + error.message);
    }
}


async function deleteProject(projectID) {
    try {
        // Recherche du projet avec l'ID spécifié et suppression
        const deletedProject = await projectModel.findOneAndDelete({ projectID: projectID });

        // Vérification si le projet a été trouvé et supprimé
        if (!deletedProject) {
            throw new Error('Project not found');
        }

        console.log('Project ' + projectID + ' deleted');
        return true;
    } catch (error) {
        throw new Error('Error deleting project: ' + error.message);
    }
}
module.exports = {
    createProject,
    getProject,
    getAllProjects,
    manageProject,
    deleteProject
}
