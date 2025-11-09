import Link from 'next/link';

export default function TermsConditions() {
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
            Terms and Conditions
          </h1>
          
          <div className="prose prose-mithila max-w-none dark:prose-invert">
            <p className="text-mithila-brown dark:text-mithila-cream mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mithila-brown dark:text-mithila-cream mb-4">Introduction</h2>
              <p className="text-mithila-brown dark:text-mithila-cream mb-4">
                These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms and Conditions and our Privacy Policy.
              </p>
              <p className="text-mithila-brown dark:text-mithila-cream">
                If you disagree with any part of these terms, you may not access the website.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mithila-brown dark:text-mithila-cream mb-4">Intellectual Property</h2>
              <p className="text-mithila-brown dark:text-mithila-cream mb-4">
                Unless otherwise stated, we own the intellectual property rights for all material on this website. All intellectual property rights are reserved.
              </p>
              <p className="text-mithila-brown dark:text-mithila-cream">
                You may view and/or print pages for your personal use subject to restrictions set in these terms and conditions.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mithila-brown dark:text-mithila-cream mb-4">Restrictions</h2>
              <p className="text-mithila-brown dark:text-mithila-cream mb-4">
                You are specifically restricted from all of the following:
              </p>
              <ul className="list-disc pl-6 text-mithila-brown dark:text-mithila-cream space-y-2">
                <li>Publishing any website material in any other media</li>
                <li>Selling, sublicensing and/or otherwise commercializing any website material</li>
                <li>Publicly performing and/or showing any website material</li>
                <li>Using this website in any way that is or may be damaging to this website</li>
                <li>Using this website in any way that impacts user access to this website</li>
                <li>Using this website contrary to applicable laws and regulations</li>
                <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mithila-brown dark:text-mithila-cream mb-4">Your Content</h2>
              <p className="text-mithila-brown dark:text-mithila-cream mb-4">
                In these Terms and Conditions, &quot;Your Content&quot; shall mean any audio, video, text, images or other material you choose to display on this website.
              </p>
              <p className="text-mithila-brown dark:text-mithila-cream">
                By displaying Your Content, you grant us a non-exclusive, worldwide irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mithila-brown dark:text-mithila-cream mb-4">No Warranties</h2>
              <p className="text-mithila-brown dark:text-mithila-cream">
                This website is provided &quot;as is,&quot; with all faults, and we express no representations or warranties, of any kind related to this website or the materials contained on this website.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mithila-brown dark:text-mithila-cream mb-4">Limitation of Liability</h2>
              <p className="text-mithila-brown dark:text-mithila-cream">
                In no event shall we, nor any of our officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mithila-brown dark:text-mithila-cream mb-4">Indemnification</h2>
              <p className="text-mithila-brown dark:text-mithila-cream">
                You hereby indemnify to the fullest extent us from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mithila-brown dark:text-mithila-cream mb-4">Variation of Terms</h2>
              <p className="text-mithila-brown dark:text-mithila-cream">
                We are permitted to revise these Terms at any time as we see fit, and by using this website you are expected to review these Terms on a regular basis.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mithila-brown dark:text-mithila-cream mb-4">Assignment</h2>
              <p className="text-mithila-brown dark:text-mithila-cream">
                We are allowed to assign, transfer, and subcontract our rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mithila-brown dark:text-mithila-cream mb-4">Entire Agreement</h2>
              <p className="text-mithila-brown dark:text-mithila-cream">
                These Terms constitute the entire agreement between us and you in relation to your use of this website, and supersede all prior agreements and understandings.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-mithila-brown dark:text-mithila-cream mb-4">Contact Us</h2>
              <p className="text-mithila-brown dark:text-mithila-cream mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
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