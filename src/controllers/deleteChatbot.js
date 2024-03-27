const { chatbot } = require("../db");

const disableChatbot = async (req, res) =>{
    const { id } = req.params;
    const { state } = req.body;
    try {
        const targetChatbot = await chatbot.findByPk(id);
        if(!targetChatbot || targetChatbot.disable){
            throw new Error("El usuario no se puede inhabilitar");
        }
        targetChatbot.state = state;
        await targetChatbot.save();
        
        return res.status(200).json({ message: "Chatbot deshabilitado exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    disableChatbot
}