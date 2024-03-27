const request = require('supertest');
const app = require('../src/app');
const {message, chatbot } = require('../src/db');

test("ask chatbot", async()=>{
    const id = 4;
    const question = "¿cual es tu nombre?";

    const existingChatBot = await chatbot.findByPk(id);
    const expectedResponse = `Mi nombre es ${existingChatBot.name}, y mi ID es ${id}.`;

    const response = await request(app).post(`/chatbots/${id}/ask`).send({ question });
    expect(response.status).toBe(200);
    expect(response.body.message).toEqual(expectedResponse);

});