const { staticResponse } = require("../handlers/chatbotResponse");


const askChatbot = async (req, res) =>{
    const { id } = req.params;
    const { question } = req.body;
    try {
        const answer = await staticResponse(id, question);

        res.status(200).json({message: answer});
        console.log(answer);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}

module.exports = {
    askChatbot
}