import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

export async function POST(req) {
  const { message } = await req.json();

  try {
    // Initialize the model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    // Prepare the prompt to send to the LLM
    const prompt = `
    You are a customer service representative for a Indian Railways. A customer has contacted you with the following message:
    ${message}
    Don't give answer in more than 3 lines.
    `;

    const content = [prompt];

    // Call the Gemini API with the user's message
    const result = await model.generateContent(content);
    const response = await result.response;
    const text = await response.text();

    // Respond with the LLM's response
    return new Response(JSON.stringify({ response: text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return new Response(
      JSON.stringify({ error: "Error processing the request." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}