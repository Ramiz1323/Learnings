import "dotenv/config";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { ChatMistralAI } from "@langchain/mistralai";
import { tool, createAgent } from "langchain";
import * as z from "zod";
import { sendEmail } from "./mail.service.js";

const model = new ChatMistralAI({
  model: "mistral-small-latest",
  apiKey: process.env.MISTRAL_API_KEY,
});

const rl = readline.createInterface({ input, output });

const emailTool = tool(
  async ({ to, subject, text }) => {
    return sendEmail({ to, subject, text });
  },
  {
    name: "send_email",
    description: "Send an email when user asks for it.",
    schema: z.object({
      to: z.string().email().describe("Receiver email address"),
      subject: z.string().min(1).describe("Email subject"),
      text: z.string().min(1).describe("Email body text"),
    }),
  }
);

const agent = createAgent({
  model,
  tools: [emailTool],
  systemPrompt:
    "You are a helpful assistant. If user asks to send an email, call send_email.",
});

while (true) {
  const message = (await rl.question("\x1b[33mYou:\x1b[0m ")).trim();
  if (!message) continue;
  if (message.toLowerCase() === "exit") break;

  const result = await agent.invoke({
    messages: [{ role: "user", content: message }],
  });

  const lastMessage = result.messages[result.messages.length - 1];
  console.log("\x1b[32mAI:\x1b[0m", lastMessage?.text || lastMessage?.content || "");
}

rl.close();
