const axios = require('axios');
const API_KEY = "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";
const API_URL = "https://api.openai.com/v1/engines/text-davinci-003/completions";

async function askGPT(prompt) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  };

  const data = {
    prompt: "Привет, как дела",
    max_tokens: 150,
    temperature: 0.7,
    // language: "ru"
  };

  try {
    const response = await axios.post(API_URL, data, { headers: headers });
    console.log(response.data.choices[0].text);
  } catch (error) {
    console.error("Error in calling OpenAI API:", error);
    throw error;
  }
}
askGPT();