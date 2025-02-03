import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

// In-memory storage (replace with proper database in production)
let scrapedContent = new Map();

export async function POST(req) {
  try {
    const { url } = await req.json();

    // Fetch the webpage content
    const response = await fetch(url);
    const html = await response.text();

    // Parse the HTML
    const $ = cheerio.load(html);

    // Remove script, style elements, and comments
    $('script').remove();
    $('style').remove();
    $('noscript').remove();
    $('iframe').remove();
    
    // Extract meaningful content with structure
    const content = {
      title: $('title').text(),
      headings: $('h1, h2, h3').map((_, el) => $(el).text()).get(),
      paragraphs: $('p').map((_, el) => $(el).text()).get(),
      lists: $('ul, ol').map((_, el) => $(el).text()).get(),
    };

    // Store the scraped content with the URL as key
    scrapedContent.set(url, content);

    return NextResponse.json({ 
      success: true, 
      message: 'Content scraped and stored successfully' 
    });
  } catch (error) {
    console.error('Scraping error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Export the scrapedContent map to be used by other routes
export { scrapedContent }; 