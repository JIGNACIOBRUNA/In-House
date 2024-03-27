const request = require('supertest');
const app = require('../src/app');

const allChatbot = [
        {
            "id": 3,
            "name": "Mi nuevo chatbot",
            "description": "Descripción de mi nuevo chatbot",
            "state": true,
            "createdAt": "2024-03-27T02:37:49.316Z",
            "updatedAt": "2024-03-27T02:37:49.316Z"
        },
        {
            "id": 4,
            "name": "Mi nuevo chatbot2",
            "description": "Descripción de mi nuevo chatbot2",
            "state": true,
            "createdAt": "2024-03-27T02:44:34.214Z",
            "updatedAt": "2024-03-27T02:44:34.214Z"
        },
        {
            "id": 5,
            "name": "Mi nuevo chatbot4",
            "description": "Descripción de mi nuevo chatbot4",
            "state": true,
            "createdAt": "2024-03-27T02:50:28.963Z",
            "updatedAt": "2024-03-27T02:50:28.963Z"
        },
        {
            "id": 1,
            "name": "bot1",
            "description": "primer bot creado",
            "state": false,
            "createdAt": "2024-03-27T00:22:56.508Z",
            "updatedAt": "2024-03-27T03:11:21.856Z"
        },
        {
            "id": 2,
            "name": "bot2",
            "description": "segundo bot creado",
            "state": false,
            "createdAt": "2024-03-27T01:51:17.412Z",
            "updatedAt": "2024-03-27T03:16:08.525Z"
        },
        {
            "id": 6,
            "name": "bot5",
            "description": "creo que quinto bot creado",
            "state": false,
            "createdAt": "2024-03-27T04:40:34.989Z",
            "updatedAt": "2024-03-27T04:41:58.178Z"
        },
    ];

test("get all chatbots", async() =>{
    const response = await request(app).get("/chatbots");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(allChatbot);
});