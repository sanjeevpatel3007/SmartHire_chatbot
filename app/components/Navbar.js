import React from 'react';

export default function Navbar({ url, setUrl, handleScrape, isScraping, scrapedUrl }) {
  return (
    <header className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">SmartHire Chatbot</h1>
            <p className="text-sm text-blue-100">
              {scrapedUrl ? `Currently analyzing: ${scrapedUrl}` : 'Explore website content intelligently'}
            </p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <input 
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter website URL"
              className="flex-1 sm:w-96 px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
            />
            <button
              onClick={handleScrape}
              disabled={isScraping || !url}
              className="px-4 py-2 text-sm font-medium bg-white text-blue-600 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isScraping ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Scraping...
                </span>
              ) : 'Scrape'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 