import Banner from './components/Banner/Banner';
import Companies from './components/Companies/Companies';
import Buyers from './components/Buyers/index';
import Provide from './components/Provide/index';
import Why from './components/Why/index';
import Network from './components/Network/index';
import Clientsay from './components/Clientsay/index';
import Newsletter from './components/Newsletter/Newsletter';
import AIChatbotCard from './components/AIChatbotCard';
import TransportManagementCard from './components/TransportManagementCard';

export default function Home() {
  return (
    <main className="mithila-bg-primary">
      <Banner />
      <Companies />
      
      {/* Services Section */}
      <div id="services" className="py-16">
        <Provide />
      </div>
      
      {/* About Section */}
      <div id="about" className="py-16 mithila-bg-secondary dark:mithila-bg-secondary">
        <Why />
      </div>
      
      {/* Buyers Section */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-mithila-red mb-4 dark:text-mithila-yellow">By The Numbers</h2>
            <p className="text-lg text-mithila-brown max-w-3xl mx-auto dark:text-mithila-cream">
              Here&apos;s what I bring to the table as a full-stack developer
            </p>
          </div>
        </div>
        <Buyers />
      </div>
      
      {/* Network Section */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-mithila-red mb-4 dark:text-mithila-yellow">Areas of Expertise</h2>
            <p className="text-lg text-mithila-brown max-w-3xl mx-auto dark:text-mithila-cream">
              Specialized skills and knowledge I bring to every project
            </p>
          </div>
        </div>
        <Network />
      </div>
      
      {/* Projects Section */}
      <section id="project" className="py-16 mithila-bg-secondary dark:mithila-bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-mithila-red dark:text-mithila-yellow">Our Featured Projects</h2>
          <p className="text-lg text-center mb-12 text-mithila-brown dark:text-mithila-cream">
            Discover our innovative solutions that drive business transformation
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Chatbot Project Card */}
            <AIChatbotCard />
            
            {/* Transport Management Project Card */}
            <TransportManagementCard />
            
            {/* Custom Solutions */}
            <div className="mithila-card p-6 opacity-50">
              <div className="flex items-center justify-center bg-mithila-cream rounded-lg p-4 mb-4 dark:bg-dark-card">
                <div className="bg-mithila-brown text-white rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-mithila-brown dark:text-mithila-cream">Custom Solutions</h3>
              <p className="text-mithila-brown mb-4 dark:text-mithila-cream">
                Need a tailored solution? Contact us to discuss your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Professional Background Section */}
      <div className="py-16">
        <Clientsay />
      </div>
      
      <Newsletter />
    </main>
  )
}
