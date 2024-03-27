const { getAllChatbot } = require ("../handlers/chatbotHandlers");

const getChatbots = async(req, res) => {
    try {
        const chatbots = await getAllChatbot();
        res.json(chatbots);
    } catch (error) {
        res.status(500).json({ error: error.message});
        
    };
};

module.exports = {
    getChatbots
}