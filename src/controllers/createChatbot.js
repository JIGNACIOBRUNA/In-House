const { chatbot } = require("../db");

const createChatbot = async(req, res) =>{
    const { name, description, state } = req.body;
    try{
        const existingChatbot = await chatbot.findOne({where: {name: name}});
        if(existingChatbot){
           return res.status(400).json({error: "El nombre de chatbot ya esta en uso"});
        }
        const newChatbot = await chatbot.create({name: name, description: description, state: state});
        res.status(200).json(newChatbot);
    }catch(error){
        console.log("Error al crear usuario:", error);
        return res.status(500).json({error: error.message});
    };
}; 

module.exports = {
    createChatbot
}