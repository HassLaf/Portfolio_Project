const projectModel = require('../models/projectShema');


async function createProject(title, shortDescription, description, period, thumbnail, ImagesList, Tags) {
       try {
        const project = await projectModel.findOne({ title }); // Vérifie si le projet existe déjà dans la base de données
        if (project) {
            throw new Error('Project already exists');
        }
        const newProject = new projectModel({ title:title, shortDescription:shortDescription, description:description, period:period, thumbnail:thumbnail, ImagesList:ImagesList, Tags:Tags });
        
        // Sauvegarde du projet dans la base de données
        await newProject.save();
        
        return newProject;
        
    } catch (error) {
            throw new Error('Error creating project: ' + error.message);
        }

}



module.exports = {
    createProject
}
