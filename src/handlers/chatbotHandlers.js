const { chatbot } = require("../db");

const getAllChatbot = async() => {
    try {
        const chatbots = await chatbot.findAll();
        return chatbots;
    } catch (error) {
        console.error('Error al obtener los chatbots:', error);
        throw new Error('No se pudieron obtener los chatbots');
    }
}


module.exports = {
    getAllChatbot
}