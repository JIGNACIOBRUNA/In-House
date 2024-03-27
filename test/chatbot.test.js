const request = require('supertest');
const app = require('../src/app');

const newChatbotData = {
  name: 'Mi nuevo chatbot4',
  description: 'Descripción de mi nuevo chatbot4',
  state: true
};

test('create chatbot', async () => {
  const response = await request(app).post('/chatbots').send(newChatbotData);
  expect(response.status).toBe(200);
  expect(response.body.name).toEqual( "Mi nuevo chatbot4" );
});
