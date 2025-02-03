# SmartHire Chatbot 🤖

SmartHire Chatbot is an intelligent website content analysis tool that uses Google's Gemini Pro AI to provide insightful answers about any website's content. Simply provide a URL, and start asking questions about the content.

[live Demo](https://smart-hire-chatbot.vercel.app/)

## 🌟 Features

- **Website Content Scraping**: Automatically extracts and analyzes content from any website URL
- **Intelligent Analysis**: Powered by Google's Gemini Pro AI for accurate and contextual responses
- **Interactive Chat Interface**: Clean and intuitive chat UI with user and assistant messages
- **Real-time Feedback**: Visual indicators for loading states and success/error messages
- **Smooth Animations**: Animated message transitions and auto-scrolling
- **Responsive Design**: Fully responsive layout that works on all screen sizes
- **Error Handling**: Comprehensive error handling with user-friendly messages

## Screenshot

![image](https://github.com/user-attachments/assets/5588e531-6314-4708-864f-f81fb765ea25)

![image](https://github.com/user-attachments/assets/f4891f30-33d5-4845-8d0f-82e959d56882)



## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Frontend**: React with Client-side Components
- **Styling**: TailwindCSS for responsive design
- **State Management**: React useState and useEffect hooks
- **API Integration**: Google Gemini Pro
- **Web Scraping**: Custom scraping implementation
- **UI Components**: Custom-built React components

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js 18+ installed
- A Google Gemini Pro API key
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Set up environment variables
4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## 🔒 Environment Variables

Create a `.env.local` file with:
```env
GOOGLE_API_KEY=your_gemini_pro_api_key_here
```

## 🎯 Key Components

- **Main Application (`app/page.js`)**:
  - Manages chat state and messages
  - Handles website scraping
  - Coordinates component interactions
  
- **Components (`app/components/`)**:
  - `Navbar.js`: URL input and scraping controls
  - `Message.js`: Renders chat messages with role-based styling
  - `ChatInput.js`: User input interface with send functionality
  - `Welcome.js`: Initial welcome screen with instructions

- **API Routes (`app/api/`)**:
  - `/api/scrape`: Handles website content extraction
  - `/api/chat`: Manages chat interactions with Gemini Pro

## 🔒 Environment Variables

Create a `.env.local` file with:



## 💡 Usage

1. Enter a website URL in the navigation bar
2. Click "Scrape" to analyze the website content
3. Wait for the success message confirming content extraction
4. Start asking questions in the chat input
5. Receive AI-powered responses about the website content
6. Continue the conversation naturally

## 🔄 Core Functionality

### Website Scraping
- Input validation for URLs
- Loading state management
- Error handling for failed scrapes
- Success confirmation messages

### Chat Interface
- Real-time message updates
- Automatic scrolling to latest messages
- Loading indicators during AI processing
- Error handling for failed responses
- Role-based message styling (user/assistant/system)

## 📱 Responsive Design

The application is optimized for:
- Desktop (1024px and above)
- Tablet (768px to 1023px)
- Mobile (below 768px)

Features:
- Flexible layouts
- Responsive text sizing
- Adaptive spacing
- Mobile-friendly input controls

## ⚡ Performance Optimizations

- Client-side state management
- Efficient message rendering
- Smooth scrolling behavior
- Loading state indicators
- Error boundary implementation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request


## 🙏 Acknowledgments

- Google Gemini Pro for AI capabilities
- Next.js team for the framework
- TailwindCSS for styling utilities
- Open source community

## 📞 Support

For support:
- Open an issue in the GitHub repository
- Contact the development team
- Check the documentation

---

Built with ❤️ by Sanjeev Patel
