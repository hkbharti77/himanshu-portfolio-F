import Link from 'next/link';
import Image from 'next/image';

export default function TransportManagementProject() {
  return (
    <div className="min-h-screen bg-mithila-cream dark:bg-bg-deep py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-dark-card rounded-2xl shadow-xl p-8 mithila-card">
          <Link href="/" className="inline-flex items-center text-mithila-blue dark:text-mithila-yellow hover:underline mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-5xl">🚚</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-mithila-red dark:text-mithila-yellow mb-4">
              Transportation Management System (TMS)
            </h1>
            <p className="text-lg text-mithila-brown max-w-3xl mx-auto dark:text-mithila-cream mb-6">
              A production-ready full-stack platform for logistics & public transportation companies. Built with FastAPI backend and a complete modern frontend UI. Features real-time tracking, automated dispatching, route optimization, payment processing, and comprehensive analytics dashboards.
            </p>
            <p className="text-xl font-semibold text-mithila-blue dark:text-mithila-yellow italic">
              &quot;A complete full-stack platform to run a transport company – from booking to tracking to billing, fully automated with a beautiful, intuitive user interface.&quot;
            </p>
          </div>

          {/* Project Meta */}
          <div className="bg-mithila-cream dark:bg-slate-800 rounded-lg p-6 mb-8 border border-mithila-yellow dark:border-slate-600">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-sm text-mithila-brown dark:text-slate-300 opacity-75">Role</p>
                <p className="font-bold text-mithila-red dark:text-mithila-yellow">Full-Stack Developer</p>
              </div>
              <div>
                <p className="text-sm text-mithila-brown dark:text-slate-300 opacity-75">Duration</p>
                <p className="font-bold text-mithila-red dark:text-mithila-yellow">3–4 months</p>
              </div>
              <div>
                <p className="text-sm text-mithila-brown dark:text-slate-300 opacity-75">API Endpoints</p>
                <p className="font-bold text-mithila-red dark:text-mithila-yellow">150+</p>
              </div>
              <div>
                <p className="text-sm text-mithila-brown dark:text-slate-300 opacity-75">Status</p>
                <p className="font-bold text-mithila-red dark:text-mithila-yellow">Production Ready</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="#" 
              className="mithila-button-primary inline-flex items-center px-6 py-3 rounded-lg font-bold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View API Documentation
            </a>
            <a 
              href="#" 
              className="mithila-button-secondary inline-flex items-center px-6 py-3 rounded-lg font-bold"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View GitHub Repo
            </a>
            <a 
              href="#" 
              className="mithila-button-secondary inline-flex items-center px-6 py-3 rounded-lg font-bold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Live Demo
            </a>
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-mithila-brown mb-6 dark:text-mithila-cream flex items-center">
              <span className="mr-2">🔧</span> Tech Stack
            </h2>
            <div className="bg-mithila-cream dark:bg-slate-800 rounded-lg p-6 border border-mithila-yellow dark:border-slate-600">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="font-semibold text-mithila-red dark:text-mithila-yellow mb-2">Backend</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-mithila-red text-white px-3 py-1 rounded-full text-sm dark:bg-pink-600">FastAPI</span>
                    <span className="bg-mithila-blue text-white px-3 py-1 rounded-full text-sm dark:bg-blue-600">Python</span>
                    <span className="bg-mithila-green text-white px-3 py-1 rounded-full text-sm dark:bg-green-600">PostgreSQL</span>
                    <span className="bg-mithila-orange text-white px-3 py-1 rounded-full text-sm dark:bg-orange-600">SQLAlchemy</span>
                    <span className="bg-mithila-purple text-white px-3 py-1 rounded-full text-sm dark:bg-purple-600">Redis</span>
                    <span className="bg-mithila-peacock text-white px-3 py-1 rounded-full text-sm dark:bg-teal-600">Celery</span>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-mithila-red dark:text-mithila-yellow mb-2">Frontend</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-mithila-red text-white px-3 py-1 rounded-full text-sm dark:bg-pink-600">Next.js</span>
                    <span className="bg-mithila-blue text-white px-3 py-1 rounded-full text-sm dark:bg-blue-600">TypeScript</span>
                    <span className="bg-mithila-green text-white px-3 py-1 rounded-full text-sm dark:bg-green-600">Tailwind CSS</span>
                    <span className="bg-mithila-orange text-white px-3 py-1 rounded-full text-sm dark:bg-orange-600">Redux</span>
                    <span className="bg-mithila-purple text-white px-3 py-1 rounded-full text-sm dark:bg-purple-600">React Query</span>
                    <span className="bg-mithila-peacock text-white px-3 py-1 rounded-full text-sm dark:bg-teal-600">WebSocket</span>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-mithila-red dark:text-mithila-yellow mb-2">Infrastructure & Services</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-mithila-red text-white px-3 py-1 rounded-full text-sm dark:bg-pink-600">Docker</span>
                    <span className="bg-mithila-blue text-white px-3 py-1 rounded-full text-sm dark:bg-blue-600">JWT</span>
                    <span className="bg-mithila-green text-white px-3 py-1 rounded-full text-sm dark:bg-green-600">OAuth2</span>
                    <span className="bg-mithila-orange text-white px-3 py-1 rounded-full text-sm dark:bg-orange-600">SendGrid</span>
                    <span className="bg-mithila-purple text-white px-3 py-1 rounded-full text-sm dark:bg-purple-600">CI/CD</span>
                    <span className="bg-mithila-peacock text-white px-3 py-1 rounded-full text-sm dark:bg-teal-600">Swagger</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-mithila-brown mb-6 dark:text-mithila-cream flex items-center">
              <span className="mr-2">🚀</span> Core Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Vehicle & fleet management (status, capacity, health)',
                'Driver management (performance, shifts, licenses)',
                'Route creation + optimization (traffic, weather, fuel costs)',
                'Cargo & passenger booking system',
                'Auto assignment of drivers & vehicles',
                'Real-time GPS tracking & geofencing',
                'Maintenance scheduling & parts inventory',
                'Payment & invoice system',
                'Email/SMS notifications',
                'Analytics dashboard (revenue, fleet usage, performance)'
              ].map((feature, idx) => (
                <div key={idx} className="bg-mithila-cream dark:bg-slate-800 rounded-lg p-4 border border-mithila-yellow dark:border-slate-600 flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-2 mt-1">✔</span>
                  <p className="text-mithila-brown dark:text-slate-200 text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Intelligence & Automations */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-mithila-brown mb-6 dark:text-mithila-cream flex items-center">
              <span className="mr-2">🧠</span> Intelligence & Automations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Automatic vehicle & driver assignment',
                'Automatic maintenance alerts',
                'Route optimization with APIs',
                'Behavior & safety tracking for drivers',
                'Real-time performance & diagnostics'
              ].map((item, idx) => (
                <div key={idx} className="bg-mithila-cream dark:bg-slate-800 rounded-lg p-4 border border-mithila-yellow dark:border-slate-600 flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-2 mt-1">✔</span>
                  <p className="text-mithila-brown dark:text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Business Impact */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-mithila-brown mb-6 dark:text-mithila-cream flex items-center">
              <span className="mr-2">🎯</span> Business Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Reduced manual work for fleet managers',
                'Automated dispatching & tracking',
                'Lower fuel cost using route optimization',
                'Zero paperwork — digital bookings & invoices',
                'Prevent breakdowns with scheduled maintenance',
                'Business insights through analytics dashboards'
              ].map((impact, idx) => (
                <div key={idx} className="bg-mithila-cream dark:bg-slate-800 rounded-lg p-4 border border-mithila-yellow dark:border-slate-600">
                  <p className="text-mithila-brown dark:text-slate-200 flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2 mt-1">✅</span>
                    <span>{impact}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Modules */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-mithila-brown mb-6 dark:text-mithila-cream flex items-center">
              <span className="mr-2">📊</span> Modules
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Users & Authentication',
                'Vehicles / Drivers / Fleet',
                'Routes & Trips',
                'Cargo Orders',
                'Bookings & Dispatch',
                'Invoices & Payments',
                'Tracking & Notifications',
                'Analytics & Reports'
              ].map((module, idx) => (
                <div key={idx} className="bg-mithila-cream dark:bg-slate-800 rounded-lg p-4 border border-mithila-yellow dark:border-slate-600 text-center">
                  <p className="text-mithila-brown dark:text-slate-200 font-semibold text-sm">{module}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Security */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-mithila-brown mb-6 dark:text-mithila-cream flex items-center">
              <span className="mr-2">🔐</span> Security
            </h2>
            <div className="bg-mithila-cream dark:bg-slate-800 rounded-lg p-6 border border-mithila-yellow dark:border-slate-600">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'JWT authentication',
                  'Role-based access control',
                  'Bcrypt password hashing',
                  'Rate limiting & audit logging'
                ].map((security, idx) => (
                  <div key={idx} className="flex items-center">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    <p className="text-mithila-brown dark:text-slate-200">{security}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Screenshots Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-mithila-brown mb-6 dark:text-mithila-cream flex items-center">
              <span className="mr-2">📸</span> Screenshots
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'API Documentation (/docs)', emoji: '📚' },
                { title: 'Fleet Overview', emoji: '🚛' },
                { title: 'Driver Management', emoji: '👨‍✈️' },
                { title: 'Bookings & Dispatch', emoji: '📋' },
                { title: 'Tracking Map', emoji: '🗺️' },
                { title: 'Analytics Dashboard', emoji: '📊' }
              ].map((screenshot, idx) => (
                <div key={idx} className="bg-mithila-cream dark:bg-slate-800 rounded-xl p-4 border-2 border-mithila-yellow dark:border-slate-600">
                  <div className="bg-gray-200 dark:bg-slate-700 border-2 border-dashed border-gray-400 dark:border-slate-500 rounded-xl w-full h-48 flex flex-col items-center justify-center">
                    <span className="text-4xl mb-2">{screenshot.emoji}</span>
                    <span className="text-mithila-brown dark:text-slate-200 text-sm text-center px-2">{screenshot.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-mithila-brown mb-6 dark:text-mithila-cream flex items-center">
              <span className="mr-2">⭐</span> Key Highlights
            </h2>
            <div className="bg-mithila-cream dark:bg-slate-800 rounded-lg p-6 border border-mithila-yellow dark:border-slate-600">
              <ul className="space-y-3 text-mithila-brown dark:text-slate-200">
                <li className="flex items-start">
                  <span className="text-mithila-red dark:text-mithila-yellow mr-2 font-bold">•</span>
                  <span>Built <strong>150+ REST API endpoints</strong> with comprehensive documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mithila-red dark:text-mithila-yellow mr-2 font-bold">•</span>
                  <span>Developed <strong>complete modern frontend UI</strong> with Next.js, TypeScript, and Tailwind CSS</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mithila-red dark:text-mithila-yellow mr-2 font-bold">•</span>
                  <span>Real-time tracking & booking automation with WebSocket integration for seamless operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mithila-red dark:text-mithila-yellow mr-2 font-bold">•</span>
                  <span>Route optimization using traffic/weather APIs to reduce fuel costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mithila-red dark:text-mithila-yellow mr-2 font-bold">•</span>
                  <span>Interactive analytics dashboard with responsive design for revenue & fleet usage insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mithila-red dark:text-mithila-yellow mr-2 font-bold">•</span>
                  <span>Fully automated dispatching system with intelligent assignment algorithms</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Back Button */}
          <div className="text-center">
            <Link 
              href="/#project" 
              className="mithila-button-secondary inline-block py-3 px-8 rounded-lg font-bold"
            >
              View Other Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}