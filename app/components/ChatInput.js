export default function ChatInput({ onSendMessage, isLoading }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const message = e.target.message.value;
        onSendMessage(message);
        e.target.reset();
      }}
      className="flex gap-2"
    >
      <input
        name="message"
        placeholder="Type your message..."
        className="flex-1 px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        {isLoading ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
} 