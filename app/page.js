'use client';
import { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Message from './components/Message';
import ChatInput from './components/ChatInput';
import Welcome from './components/Welcome';

export default function Home() {
  const [url, setUrl] = useState('');
  const [scrapedUrl, setScrapedUrl] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isScraping, setIsScraping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleScrape = async () => {
    if (!url) return;
    
    setIsScraping(true);
    try {
      const response = await fetch('/api/scrape', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
      
      const data = await response.json();
      if (data.success) {
        setScrapedUrl(url);
        setMessages(prev => [...prev, {
          role: 'system',
          content: '✨ Website content has been scraped successfully! You can now ask questions about it.'
        }]);
      } else {
        throw new Error(data.error || 'Failed to scrape website');
      }
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'system',
        content: '❌ ' + (error.message || 'Failed to scrape the website. Please try again.')
      }]);
    } finally {
      setIsScraping(false);
    }
  };

  const handleSendMessage = async (message) => {
    if (!message.trim()) return;
    
    if (!scrapedUrl) {
      setMessages(prev => [...prev, {
        role: 'system',
        content: '❌ Please scrape a website first before asking questions.'
      }]);
      return;
    }

    setMessages(prev => [...prev, { role: 'user', content: message }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, url: scrapedUrl }),
      });
      
      const data = await response.json();
      if (data.success) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: data.response 
        }]);
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'system',
        content: '❌ ' + (error.message || 'Failed to get response. Please try again.')
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-50">
      <Navbar 
        url={url}
        setUrl={setUrl}
        handleScrape={handleScrape}
        isScraping={isScraping}
        scrapedUrl={scrapedUrl}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm border h-[calc(100vh-10rem)] flex flex-col overflow-hidden">
          {messages.length === 0 ? (
            <Welcome />
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, idx) => (
                  <Message key={idx} message={msg} />
                ))}
                {isLoading && (
                  <div className="flex justify-center">
                    <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm text-gray-500">
                      Thinking...
                    </div>
                  </div>
                )}
                <div  ref={messagesEndRef} />
              </div>

              <div className="border-t p-4 bg-gray-50">
                <ChatInput 
                  onSendMessage={handleSendMessage}
                  isLoading={isLoading}
                />
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}