import prompt from './index';
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
prompt = prompt;

async function callApi(){
    const response = await openai.createCompletion({
        model: "text-curie-001",
        prompt: prompt,
        temperature: 0,
        max_tokens: 200,
      });
      console.log(response.data.choices[0].text)
}

callApi()


