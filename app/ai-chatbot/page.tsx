import Link from 'next/link';

export default function AIChatbotPage() {
  return (
    <div className="mithila-bg-primary min-h-screen">
      {/* Header */}
      <header className="bg-mithila-red py-6 dark:bg-mithila-peacock">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white text-center">AI-Powered Multi-Format RAG Chatbot System</h1>
          <p className="text-mithila-cream text-center mt-2 dark:text-dark-mithila-text">
            Intelligent conversational AI with lead generation, ticketing, and messaging integrations
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-mithila-red mb-6 text-center dark:text-mithila-yellow">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Lead Generation */}
            <div className="mithila-card p-6">
              <div className="bg-mithila-red text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-mithila-red dark:text-mithila-yellow">Lead Generation</h3>
              <p className="text-mithila-brown dark:text-mithila-cream">
                Capture and qualify leads automatically through intelligent conversations.
              </p>
            </div>

            {/* Customer Ticket */}
            <div className="mithila-card p-6">
              <div className="bg-mithila-blue text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-mithila-red dark:text-mithila-yellow">Customer Tickets</h3>
              <p className="text-mithila-brown dark:text-mithila-cream">
                Automatically create and manage support tickets from customer interactions.
              </p>
            </div>

            {/* Employee Ticket */}
            <div className="mithila-card p-6">
              <div className="bg-mithila-green text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-mithila-red dark:text-mithila-yellow">Employee Tickets</h3>
              <p className="text-mithila-brown dark:text-mithila-cream">
                Streamline internal processes with automated employee ticket creation.
              </p>
            </div>

            {/* Messaging Integration */}
            <div className="mithila-card p-6">
              <div className="bg-mithila-orange text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-mithila-red dark:text-mithila-yellow">Messaging Integration</h3>
              <p className="text-mithila-brown dark:text-mithila-cream">
                Connect with users via Telegram, WhatsApp, and other messaging platforms.
              </p>
            </div>
          </div>
        </section>

        {/* RAG Capabilities */}
        <section className="mb-12">
          <div className="mithila-card p-8">
            <h2 className="text-2xl font-bold text-mithila-red mb-4 text-center dark:text-mithila-yellow">Retrieval-Augmented Generation (RAG) Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="bg-mithila-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 dark:bg-dark-card">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mithila-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-mithila-red dark:text-mithila-yellow">Multi-Format Support</h3>
                <p className="text-mithila-brown dark:text-mithila-cream">
                  Process PDFs, DOCs, TXT, and more document formats.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-mithila-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 dark:bg-dark-card">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mithila-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-mithila-red dark:text-mithila-yellow">Knowledge Base</h3>
                <p className="text-mithila-brown dark:text-mithila-cream">
                  Intelligent retrieval from your organization&apos;s knowledge base.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-mithila-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 dark:bg-dark-card">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mithila-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-mithila-red dark:text-mithila-yellow">Real-time Processing</h3>
                <p className="text-mithila-brown dark:text-mithila-cream">
                  Instant responses with context-aware information retrieval.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-mithila-red mb-6 text-center dark:text-mithila-yellow">Seamless Integrations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Telegram Integration */}
            <div className="mithila-card p-6">
              <div className="flex items-start">
                <div className="bg-mithila-blue text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-mithila-red dark:text-mithila-yellow">Telegram Bot Integration</h3>
                  <p className="text-mithila-brown mb-4 dark:text-mithila-cream">
                    Connect with your audience via Telegram bots for 24/7 customer support and lead generation.
                  </p>
                  <ul className="list-disc pl-5 text-mithila-brown dark:text-mithila-cream">
                    <li>Automated responses to common queries</li>
                    <li>Lead capture through conversation flows</li>
                    <li>Ticket creation for complex issues</li>
                    <li>Seamless handoff to human agents</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* WhatsApp Integration */}
            <div className="mithila-card p-6">
              <div className="flex items-start">
                <div className="bg-mithila-green text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-mithila-red dark:text-mithila-yellow">WhatsApp Bot Integration</h3>
                  <p className="text-mithila-brown mb-4 dark:text-mithila-cream">
                    Engage customers on the world&apos;s most popular messaging platform with AI-powered assistance.
                  </p>
                  <ul className="list-disc pl-5 text-mithila-brown dark:text-mithila-cream">
                    <li>Business API integration for enterprise use</li>
                    <li>Automated lead qualification and nurturing</li>
                    <li>Multi-language support capabilities</li>
                    <li>Rich media support (images, documents, videos)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-mithila-red mb-6 text-center dark:text-mithila-yellow">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="mithila-card p-6">
              <h3 className="text-lg font-bold mb-2 text-mithila-red dark:text-mithila-yellow">24/7 Availability</h3>
              <p className="text-mithila-brown dark:text-mithila-cream">
                Provide round-the-clock support without additional staffing costs.
              </p>
            </div>
            <div className="mithila-card p-6">
              <h3 className="text-lg font-bold mb-2 text-mithila-red dark:text-mithila-yellow">Cost Reduction</h3>
              <p className="text-mithila-brown dark:text-mithila-cream">
                Reduce support costs by automating routine inquiries and tasks.
              </p>
            </div>
            <div className="mithila-card p-6">
              <h3 className="text-lg font-bold mb-2 text-mithila-red dark:text-mithila-yellow">Enhanced Customer Experience</h3>
              <p className="text-mithila-brown dark:text-mithila-cream">
                Deliver instant, accurate responses to improve customer satisfaction.
              </p>
            </div>
            <div className="mithila-card p-6">
              <h3 className="text-lg font-bold mb-2 text-mithila-red dark:text-mithila-yellow">Data Insights</h3>
              <p className="text-mithila-brown dark:text-mithila-cream">
                Gain valuable insights from conversation analytics and customer behavior.
              </p>
            </div>
            <div className="mithila-card p-6">
              <h3 className="text-lg font-bold mb-2 text-mithila-red dark:text-mithila-yellow">Scalability</h3>
              <p className="text-mithila-brown dark:text-mithila-cream">
                Handle unlimited concurrent conversations without performance degradation.
              </p>
            </div>
            <div className="mithila-card p-6">
              <h3 className="text-lg font-bold mb-2 text-mithila-red dark:text-mithila-yellow">Seamless Integration</h3>
              <p className="text-mithila-brown dark:text-mithila-cream">
                Easily integrate with your existing CRM, ticketing, and communication systems.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="mithila-card p-8 text-center">
            <h2 className="text-2xl font-bold text-mithila-red mb-4 dark:text-mithila-yellow">Ready to Transform Your Business?</h2>
            <p className="text-mithila-brown mb-6 dark:text-mithila-cream">
              Contact us today to learn how our AI-Powered Multi-Format RAG Chatbot System can revolutionize your customer interactions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="mithila-button px-6 py-3 text-center">
                Get a Demo
              </Link>
              <Link href="/contact" className="mithila-button-secondary px-6 py-3 text-center">
                Request a Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}