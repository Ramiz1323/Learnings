import "dotenv/config";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage } from "@langchain/core/messages";

const rl = readline.createInterface({ input, output });

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash-lite",
  apiKey: process.env.GOOGLE_API_KEY,
});

const history = [];

while (true) {
  const message = (await rl.question("\x1b[32mYou: \x1b[0m")).trim();

  if (!message) {
    continue;
  }
 
  if (message.toLowerCase() === "exit" || message.toLowerCase() === "quit") {
    console.log("Session ended.");
    rl.close();
    break;
  }

  history.push(new HumanMessage({ content: message }));

  const response = await model.invoke(history);
  history.push(response);

  console.log("\x1b[34mAI: \x1b[0m" + response.text);
}
