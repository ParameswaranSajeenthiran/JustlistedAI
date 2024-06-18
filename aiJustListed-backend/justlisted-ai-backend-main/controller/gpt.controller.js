const { Configuration, OpenAIApi } = require("openai");

// chat gpt connection
const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(config);

exports.gptScan = async (req, res) => {
    const {data} = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "hi", 
        max_tokens: 2048,
        temperature: 1
    });
    console.log(response);
};