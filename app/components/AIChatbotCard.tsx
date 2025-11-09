import Link from 'next/link';

const AIChatbotCard = () => {
  return (
    <div className="mithila-card p-6 transition-all duration-300 hover:shadow-2xl">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center bg-mithila-cream rounded-lg p-4 mb-4 dark:bg-dark-card">
          <div className="bg-mithila-red text-white rounded-full p-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-mithila-red dark:text-mithila-yellow">AI-Powered Multi-Format RAG Chatbot System</h3>
        
        <p className="text-mithila-brown mb-4 flex-grow dark:text-mithila-cream">
          Intelligent conversational AI with lead generation, customer ticketing, employee ticketing, and Telegram/WhatsApp integration.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-mithila-red text-white text-xs px-2 py-1 rounded">AI/ML</span>
          <span className="bg-mithila-blue text-white text-xs px-2 py-1 rounded">RAG</span>
          <span className="bg-mithila-green text-white text-xs px-2 py-1 rounded">NLP</span>
          <span className="bg-mithila-orange text-white text-xs px-2 py-1 rounded">Telegram</span>
          <span className="bg-mithila-purple text-white text-xs px-2 py-1 rounded">WhatsApp</span>
        </div>
        
        <div className="mt-auto">
          <Link 
            href="/ai-chatbot" 
            className="mithila-button-secondary inline-block w-full text-center py-2"
          >
            View Project Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AIChatbotCard;