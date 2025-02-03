import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { scrapedContent } from '../scrape/route';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { message, url } = await req.json();

    // Get the scraped content for this URL
    const content = scrapedContent.get(url);
    if (!content) {
      return NextResponse.json({ 
        success: false, 
        error: 'No scraped content found for this URL. Please scrape the website first.' 
      }, { status: 400 });
    }

    // Initialize the model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Create a structured prompt with the scraped content
   // ... existing imports ...



    // Update the prompt to request markdown formatting
    const prompt = `
      Context: You are a helpful chatbot analyzing content from the website: ${url}
      
      Website Content:
      Title: ${content.title}
      
      Main Headings:
      ${content.headings.join('\n')}
      
      Content:
      ${content.paragraphs.join('\n')}
      
      Lists:
      ${content.lists.join('\n')}
      
      User Question: ${message}
      
      Instructions:
      1. Answer based only on the provided content
      2. If the information isn't in the content, say so
      3. Format your response using clean markdown:
         - Use ## for main headings
         - Use bullet points for lists
         - Use bold for emphasis
         - Keep paragraphs short and readable
      4. End your response with a "Source" link
      5. Keep responses concise and focused
    `;

    // Generate response
    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    // Format the response to ensure clean markdown
    const formattedResponse = response.text().replace(/\n{3,}/g, '\n\n');
    
    return NextResponse.json({ 
      success: true, 
      response: formattedResponse + `\n\n**Source:** [${url}](${url})` 
    });
  } catch (error) {
    console.error('Chat error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
  