const request = require('supertest');
const app = require('../src/app');
const {chatbot} = require('../src/db');


test("get all chatbots", async() =>{
    const chatbotFromDB = await chatbot.findAll();

    const response = await request(app).get("/chatbots");
    expect(response.status).toBe(200);
   
    chatbotFromDB.forEach((chatbotFromDB, index) => {
        expect(response.body[index].id).toBe(chatbotFromDB.id);
        expect(response.body[index].name).toBe(chatbotFromDB.name);
        expect(response.body[index].description).toBe(chatbotFromDB.description);
        expect(response.body[index].state).toBe(chatbotFromDB.state);
    });
});