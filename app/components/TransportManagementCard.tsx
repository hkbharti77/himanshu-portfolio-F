import Link from 'next/link';

const TransportManagementCard = () => {
  return (
    <div className="mithila-card p-6 transition-all duration-300 hover:shadow-2xl">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center bg-mithila-cream rounded-lg p-4 mb-4 dark:bg-dark-card">
          <div className="bg-mithila-blue text-white rounded-full p-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-mithila-red dark:text-mithila-yellow">Transportation Management System</h3>
        
        <p className="text-mithila-brown mb-4 flex-grow dark:text-mithila-cream">
          Full-stack platform with complete UI for logistics companies. 150+ REST APIs, modern Next.js frontend, real-time tracking, automated dispatching, and analytics.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-mithila-red text-white text-xs px-2 py-1 rounded">FastAPI</span>
          <span className="bg-mithila-blue text-white text-xs px-2 py-1 rounded">Next.js</span>
          <span className="bg-mithila-green text-white text-xs px-2 py-1 rounded">PostgreSQL</span>
          <span className="bg-mithila-orange text-white text-xs px-2 py-1 rounded">TypeScript</span>
          <span className="bg-mithila-purple text-white text-xs px-2 py-1 rounded">Tailwind CSS</span>
          <span className="bg-mithila-peacock text-white text-xs px-2 py-1 rounded">Docker</span>
        </div>
        
        <div className="mt-auto">
          <Link 
            href="/transport-management" 
            className="mithila-button-secondary inline-block w-full text-center py-2"
          >
            View Project Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TransportManagementCard;