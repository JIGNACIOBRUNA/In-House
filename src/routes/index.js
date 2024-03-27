const { Router } = require("express");
const {createChatbot} = require("../controllers/createChatbot");
const { getChatbots } = require("../controllers/getAllChatbot");
const { disableChatbot } = require("../controllers/deleteChatbot");
const { askChatbot } = require("../controllers/askChatbot.js");

const router = Router();


router.post("/chatbots", createChatbot);
router.get("/chatbots", getChatbots);
router.put("/chatbots/:id", disableChatbot);
router.post("/chatbots/:id/ask", askChatbot);


module.exports = router;