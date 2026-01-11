import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

// Initialize the Gemini Client
export const initializeGemini = (apiKey: string) => {
  genAI = new GoogleGenAI({ apiKey });
};

// Start a new chat session with a specific system instruction (persona)
export const startChat = async (systemInstruction: string) => {
  if (!genAI) {
    // In a real app, you might handle this better, but here we assume the key is present
    throw new Error("Gemini API not initialized");
  }

  // Using gemini-3-flash-preview for fast, responsive conversational text
  chatSession = genAI.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: systemInstruction + " Keep your responses concise (under 50 words) to encourage conversation flow. Correct any major grammar mistakes gently at the end of your response.",
      temperature: 0.7,
    },
  });

  return chatSession;
};

// Send a message and get the response text
export const sendMessage = async (message: string): Promise<string> => {
  if (!chatSession) {
    throw new Error("Chat session not started");
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong connecting to Orbeon.";
  }
};