const { chatbot } = require("../db");
const { message } = require("../db");

const staticResponse = async (id, question) => {
    try{
        const existingChatBot = await chatbot.findByPk(id);
        if(!existingChatBot){
            throw new Error("Chatbot no encontrado");
        }
        if(existingChatBot.state === false){
            throw new Error("El chatbot no esta disponible en este momento");
        }
        let response;
        switch (question.toLowerCase()) {
            case '¿cual es tu nombre?':
                response = `Mi nombre es ${existingChatBot.name}, y mi ID es ${id}.`;
                break;
                case '¿cual es tu funcion?':
                response = `Soy un bot diseñado para responder preguntas de manera simulada. Chatbot ID: ${question}`;
                break;
                default:
                response = 'Lo siento, no puedo responder a esa pregunta.';
        }
        await message.create({
            chatbotId: id,
            question: question,
            response: response,
            date: new Date()
        });
        return response;
                }catch(error){
        return error;
    }
}

module.exports = {
    staticResponse
}