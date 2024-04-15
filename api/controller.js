const userServices = require("../services/userServices")
const projectsServices = require("../services/projectsServices")
const loginServices  = require("../services/loginServices")


getProjectById = async function getProjectById(req, res) {
    console.log("Controller getProjectById")
    const { projectID } = req.params;
    try{
        project = await projectsServices.getProject(projectID)
        res.status(200).send(project)
    } catch (error) {
        console.error('Error getting project:', error);
        res.status(500).json({ error: 'Server Error' });
    }
}
getAllProjects = async function getAllProjects(req, res) {
    try{
        projectList = await projectsServices.getAllProjects()
        res.status(200).send(projectList)
    } catch (error) {
        console.error('Error getting projects:', error);
        res.status(500).json({ error: 'Server Error' });
    }
    
}

modifyProject = async function modifyProject(req, res) {
    console.log("Controller modifyProject")
    idUser = req.user._id
    const {projectID} = req.params
    console.log(projectID)
    roleVerify = await userServices.verifyAdmin(idUser)
    console.log(roleVerify)
    if(roleVerify){
        const {title, shortDescription, description, period, thumbnail, ImagesList, Tags } = req.body;
        try{
            newProject = await projectsServices.manageProject(projectID,title, shortDescription, description, period, thumbnail, ImagesList, Tags);
            res.status(200).json(newProject);
        }  catch (error) {
            console.error('Error modifying  project:', error);
            res.status(500).json({ error: 'Server Error' });
        }
    } else {
        res.status(403).json({ error: 'Admin role required !' });
    }
    
}

loginUser = async function loginUser(req, res) {
    console.log("Controller loginUser")
    
    const { email, password } = req.body;

    try{
        const userTokens = await loginServices.loginFunction(email, password);
        res.status(200).json(userTokens);
    }  catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Server Error' });
    }
}

addUser = async function addUser(req, res) {
    console.log("Controller addUser")
    
    const { username, email, password,role } = req.body;
    
    try{
        newUser = await userServices.createUser(username, email, password, role);
        res.status(200).json(newUser);
    }  catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ error: 'Server Error' });
    }
}

addProject = async function addProject(req, res) {
    console.log("Controller addProject")
    idUser = req.user._id
    // console.log(idUser)
    roleVerify = await userServices.verifyAdmin(idUser)
    console.log(roleVerify)
    if(roleVerify){
        const { projectID,title, shortDescription, description, period, thumbnail, ImagesList, Tags } = req.body;
        try{
            newProject = await projectsServices.createProject(projectID,title, shortDescription, description, period, thumbnail, ImagesList, Tags);
            res.status(200).json(newProject);
        }  catch (error) {
            console.error('Error adding project:', error);
            res.status(500).json({ error: 'Server Error' });
        }
    } else {
        res.status(403).json({ error: 'Admin role required !' });
    }
}


module.exports = {
    getAllProjects,
    getProjectById,
    addUser,
    addProject,
    loginUser,
    modifyProject
}