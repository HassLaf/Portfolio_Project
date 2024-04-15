const userServices = require("../services/userServices")
const projectsServices = require("../services/projectsServices")
const { loginFunction } = require("../services/loginServices")


loginUser = async function loginUser(req, res) {
    console.log("Controller loginUser")
    
    const { email, password } = req.body;

    try{
        const userTokens = await loginFunction(email, password);
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
        const { title, shortDescription, description, period, thumbnail, ImagesList, Tags } = req.body;
        try{
            newProject = await projectsServices.createProject(title, shortDescription, description, period, thumbnail, ImagesList, Tags);
            res.status(200).json(newProject);
        }  catch (error) {
            console.error('Error adding project:', error);
            res.status(500).json({ error: 'Server Error' });
        }
    } else {
        res.status(403).json({ error: 'Admin role required !' });
    }
}

    
getAllProjects = async function getAllProjects(req, res) {
    try{
        projectList = await projectsServices.getProject()
        res.status(200).send(projectList)
    } catch (error) {
        console.error('Error getting projects:', error);
        res.status(500).json({ error: 'Server Error' });
    }
    
}

manageProject = async function manageProject(req, res) {

}


module.exports = {
    getAllProjects,
    addUser,
    addProject,
    loginUser
}