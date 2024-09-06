import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
console.log(API_KEY);   
const genAI = new GoogleGenerativeAI(API_KEY);

export async function analyzeRailwayWithGemini(imageFile) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = `
    Analyze the image of a railway passenger area:

    Identify visible problems affecting passengers.
    For each problem:

    Provide a brief description
    Categorize as: Cleanliness, Plumbing, Electrical, Structural, Garbage, Safety, or Other

    Format : 

    Problem 1: [Brief description]
    Category: [Category]

    Problem 2: [Brief description]
    Category: [Category]

    [Continue for all problems]

    Summary: [Overall condition and main issues]

    Respond with a JSON object with keys: problems (as an array) and summary.
    `;

    let content = [prompt];

    if (imageFile) {
      const imageData = await fileToGenerativePart(imageFile);
      content.push(imageData);
    }

    const result = await model.generateContent(content);
    const response = await result.response;
    const text = response.text();
    console.log(text);

    // Extract JSON from the response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("Unable to extract JSON from the response");
    }

    const jsonString = jsonMatch[0];

    // Parse the JSON response
    const analysisResult = JSON.parse(jsonString);

    // Process the problems array to match the expected format
    analysisResult.problems = analysisResult.problems.map((problem, index) => {
      const problemKey = `Problem ${index + 1}`;
      const description = problem[problemKey];
      return {
        [problemKey]: description,
        Category: problem.Category,
      };
    });

    return analysisResult;
  } catch (error) {
    console.error("Error analyzing railway image with Gemini:", error);
    throw error;
  }
}

async function fileToGenerativePart(file) {
  const base64EncodedDataPromise = new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(",")[1]);
    reader.readAsDataURL(file);
  });

  return {
    inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  };
}
