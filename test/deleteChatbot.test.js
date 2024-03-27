const request = require('supertest');
const app = require('../src/app');
const {chatbot} = require('../src/db');


test("delete chatbot", async ()=>{
    const chatbotIdToUpdate = 5;
    const newState = { state: false};

    const response = await request(app).put(`/chatbots/${chatbotIdToUpdate}`).send(newState);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Chatbot deshabilitado exitosamente");

    const disabledChatbot = await chatbot.findByPk(chatbotIdToUpdate);
    expect(disabledChatbot.state).toBe(false);
});