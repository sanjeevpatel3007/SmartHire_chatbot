import React from 'react';
import ReactMarkdown from 'react-markdown';
import { User, Bot } from 'lucide-react';

export default function Message({ message }) {
  return (
    <div
      className={`flex items-start gap-3 my-4 ${
        message.role === 'user' ? 'justify-end' : 'justify-start'
      }`}
    >
      {message.role !== 'user' && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center z-10">
          <Bot className="w-5 h-5 text-indigo-600" />
        </div>
      )}
      
      <div
        className={`relative max-w-[80%] px-6 py-4 rounded-2xl shadow-sm z-0
          ${message.role === 'user'
            ? 'bg-gradient-to-br from-indigo-600 to-blue-700 text-white'
            : message.role === 'system'
            ? 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800'
            : 'bg-white border border-gray-200 text-gray-800'
          }
          ${message.role === 'user' ? 'rounded-br-sm' : 'rounded-bl-sm'}
        `}
      >
        <div 
          className={`prose prose-sm max-w-none ${
            message.role === 'user' ? 'text-white' : 'text-gray-800'
          }`}
        >
          {message.role === 'user' ? (
            <div className="text-sm leading-relaxed">{message.content}</div>
          ) : (
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => (
                  <h1 className="text-xl font-bold mb-3 text-gray-900" {...props} />
                ),
                h2: ({node, ...props}) => (
                  <h2 className="text-lg font-semibold mb-2 text-gray-800" {...props} />
                ),
                h3: ({node, ...props}) => (
                  <h3 className="text-base font-semibold mb-2 text-gray-800" {...props} />
                ),
                p: ({node, ...props}) => (
                  <p className="mb-3 last:mb-0 text-gray-700 leading-relaxed" {...props} />
                ),
                ul: ({node, ...props}) => (
                  <ul className="list-disc pl-6 mb-3 space-y-2" {...props} />
                ),
                ol: ({node, ...props}) => (
                  <ol className="list-decimal pl-6 mb-3 space-y-2" {...props} />
                ),
                li: ({node, ...props}) => (
                  <li className="mb-1 text-gray-700" {...props} />
                ),
                a: ({node, ...props}) => (
                  <a 
                    className="text-indigo-600 hover:text-indigo-800 underline transition-colors" 
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                  />
                ),
                strong: ({node, ...props}) => (
                  <strong className="font-semibold text-gray-900" {...props} />
                ),
                em: ({node, ...props}) => (
                  <em className="italic text-gray-800" {...props} />
                ),
                code: ({node, ...props}) => (
                  <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm text-gray-800 font-mono" {...props} />
                ),
                blockquote: ({node, ...props}) => (
                  <blockquote className="border-l-4 border-indigo-200 pl-4 italic text-gray-700" {...props} />
                ),
              }}
            >
              {message.content}
            </ReactMarkdown>
          )}
        </div>
      </div>

      {message.role === 'user' && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center z-10">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
}