export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <div className="max-w-2xl space-y-6">
        <div className="w-24 h-24 mx-auto mb-8">
          <svg className="w-full h-full text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Welcome to SmartHire Chatbot</h2>
        <p className="text-lg text-gray-600">
          Get started by entering a website URL above to analyze its content
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mt-8">
          <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-semibold text-blue-600">1. Enter URL</h3>
            <p className="text-sm text-gray-600">Paste any website URL in the input field above</p>
          </div>
          <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-semibold text-blue-600">2. Scrape Content</h3>
            <p className="text-sm text-gray-600">Click the scrape button to analyze the website</p>
          </div>
          <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-semibold text-blue-600">3. Ask Questions</h3>
            <p className="text-sm text-gray-600">Chat with the bot about the website content</p>
          </div>
          <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-semibold text-blue-600">4. Get Insights</h3>
            <p className="text-sm text-gray-600">Receive detailed answers with source citations</p>
          </div>
        </div>
      </div>
    </div>
  );
} 