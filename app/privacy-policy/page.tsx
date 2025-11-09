import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-mithila-cream dark:bg-bg-deep py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-dark-card rounded-2xl shadow-xl p-8 mithila-card">
          <Link href="/" className="inline-flex items-center text-mithila-blue dark:text-mithila-yellow hover:underline mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-mithila-red dark:text-mithila-yellow mb-8 text-center">
            Privacy Policy
          </h1>
          
          <div className="prose prose-mithila max-w-none dark:prose-invert">
            <p className="text-mithila-brown dark:text-mithila-cream mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mithila-brown dark:text-mithila-cream mb-4">Introduction</h2>
              <p className="text-mithila-brown dark:text-mithila-cream mb-4">
                Welcome to our website. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.
              </p>
              <p className="text-mithila-brown dark:text-mithila-cream">
                By using our website, you consent to the data practices described in this policy.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mithila-brown dark:text-mithila-cream mb-4">Information We Collect</h2>
              <p className="text-mithila-brown dark:text-mithila-cream mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 text-mithila-brown dark:text-mithila-cream space-y-2">
                <li>Personal identification information (Name, email address, phone number, etc.)</li>
                <li>Technical information (IP address, browser type, operating system, etc.)</li>
                <li>Usage data (pages visited, time spent on pages, navigation paths, etc.)</li>
                <li>Newsletter subscription information</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mithila-brown dark:text-mithila-cream mb-4">How We Use Your Information</h2>
              <p className="text-mithila-brown dark:text-mithila-cream mb-4">
                We use the collected information for various purposes:
              </p>
              <ul className="list-disc pl-6 text-mithila-brown dark:text-mithila-cream space-y-2">
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our services</li>
                <li>To monitor the usage of our services</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>To send you newsletters and updates (with your consent)</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mithila-brown dark:text-mithila-cream mb-4">Data Protection</h2>
              <p className="text-mithila-brown dark:text-mithila-cream mb-4">
                We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
              </p>
              <p className="text-mithila-brown dark:text-mithila-cream">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mithila-brown dark:text-mithila-cream mb-4">Cookies</h2>
              <p className="text-mithila-brown dark:text-mithila-cream">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mithila-brown dark:text-mithila-cream mb-4">Third-Party Services</h2>
              <p className="text-mithila-brown dark:text-mithila-cream">
                We may employ third-party companies and individuals due to the following reasons:
              </p>
              <ul className="list-disc pl-6 text-mithila-brown dark:text-mithila-cream space-y-2 mt-4">
                <li>To facilitate our services</li>
                <li>To provide the services on our behalf</li>
                <li>To perform service-related services</li>
                <li>To assist us in analyzing how our services are used</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mithila-brown dark:text-mithila-cream mb-4">Changes to This Privacy Policy</h2>
              <p className="text-mithila-brown dark:text-mithila-cream">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-mithila-brown dark:text-mithila-cream mb-4">Contact Us</h2>
              <p className="text-mithila-brown dark:text-mithila-cream mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="text-mithila-brown dark:text-mithila-cream space-y-2">
                <li><span className="font-semibold">Email:</span> hkbharti77@gmail.com</li>
                <li><span className="font-semibold">Phone:</span> +91 7050047159</li>
                <li><span className="font-semibold">Address:</span> Patna, Bihar</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}