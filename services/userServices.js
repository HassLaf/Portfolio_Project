const userModels = require('../models/userShema');
const bcrypt = require('bcrypt');

async function createUser(username, email, password, role) {
    try {
        const user = await userModels.findOne({ email }); // Vérifie si l'utilisateur existe déjà dans la base de données
        if (user) {
            throw new Error('User already exists');
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);
        
        const newUser = new userModels({ username, email, password : hashedpassword, role });
        
        // Sauvegarde de l'utilisateur dans la base de données
        await newUser.save();
        
        return newUser;
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
}

module.exports = {
    createUser
};
