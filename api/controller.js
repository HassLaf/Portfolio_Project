const { createUser } = require("../sevices/userServices")
const { createProject } = require("../sevices/projectsServices")

addUser = async function addUser(req, res) {
    console.log("Controller addUser")
    
    const { username, email, password,role } = req.body;
    
    try{
        newUser = await createUser(username, email, password, role);
        res.status(200).json(newUser);
    }  catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ error: 'Server Error' });
    }
}

addProject = async function addProject(req, res) {
    console.log("Controller addProject")
    
    const { title, shortDescription, description, period, thumbnail, ImagesList, Tags } = req.body;
    
    try{
        newProject = await createProject(title, shortDescription, description, period, thumbnail, ImagesList, Tags);
        res.status(200).json(newProject);
    }  catch (error) {
        console.error('Error adding project:', error);
        res.status(500).json({ error: 'Server Error' });
    }
}

    
getAllProjects = function getAllProjects(req, res) {
    res.status(200).send("Bonjour, vous êtes dans le portfolio de Hassan !")
}

module.exports = {
    getAllProjects,
    addUser,
    addProject
}