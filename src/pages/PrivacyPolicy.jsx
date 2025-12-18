import React from 'react';
import { Lock, Eye, Database, UserCheck, Shield } from 'lucide-react';
import Slider from '../components/Slider';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Slider 
        h1="Privacy Policy"
        subH1="Your privacy and data security are our top priorities"
        img1="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80"
        
        h2="Data Protection"
        subH2="How we collect, use, and protect your information"
        img2="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1920&q=80"
        
        h3="Your Rights"
        subH3="Understanding your privacy rights and choices"
        img3="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
      />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[#7BC043] rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-[#1FA4C4] mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: January 2024</p>
        </div>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1FA4C4] mb-4 flex items-center gap-3">
              <Eye className="w-6 h-6" />
              1. Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Connect Solution collects information necessary to provide our telemarketing services effectively. This includes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Contact information (name, phone number, email address)</li>
              <li>Business information (company name, industry, requirements)</li>
              <li>Communication preferences and history</li>
              <li>Service usage data and performance metrics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1FA4C4] mb-4 flex items-center gap-3">
              <Database className="w-6 h-6" />
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Providing telemarketing and lead generation services</li>
              <li>Communicating with clients about services and campaigns</li>
              <li>Improving our service quality and performance</li>
              <li>Generating reports and analytics</li>
              <li>Complying with legal and regulatory requirements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1FA4C4] mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Connect Solution does not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and property</li>
              <li>With trusted service providers under strict confidentiality agreements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1FA4C4] mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6" />
              4. Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement robust security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Encrypted data transmission and storage</li>
              <li>Access controls and authentication systems</li>
              <li>Regular security audits and updates</li>
              <li>Employee training on data protection</li>
              <li>Secure disposal of data when no longer needed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1FA4C4] mb-4">5. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your information only as long as necessary to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide ongoing services</li>
              <li>Comply with legal requirements</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Improve our services</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Typically, we retain client data for 3 years after service termination, unless legally required to retain it longer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1FA4C4] mb-4 flex items-center gap-3">
              <UserCheck className="w-6 h-6" />
              6. Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Access: Request copies of your personal data</li>
              <li>Rectification: Request correction of inaccurate data</li>
              <li>Erasure: Request deletion of your data</li>
              <li>Portability: Request transfer of your data</li>
              <li>Objection: Object to processing of your data</li>
              <li>Restriction: Request limitation of data processing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1FA4C4] mb-4">7. Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website may use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Improve website functionality and user experience</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Remember your preferences and settings</li>
              <li>Provide personalized content</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1FA4C4] mb-4">8. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1FA4C4] mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware of such collection, we will take steps to delete the information immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1FA4C4] mb-4">10. Policy Updates</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this privacy policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes through email or website notices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1FA4C4] mb-4">11. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this privacy policy or wish to exercise your rights, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">Email: jiteshdhameja191990@gmail.com</p>
              <p className="text-gray-700">Phone: <a href="tel:+918881055055" className="hover:text-[#F7941D] transition-colors">+91 8881055055</a> / <a href="tel:+918881033033" className="hover:text-[#F7941D] transition-colors">+91 8881033033</a></p>
              <p className="text-gray-700">Address: House No – B-3/010-CC, Zone 4, Ward – Gomti Nagar (110)</p>
            </div>
          </section>

          <div className="bg-[#F8FAFC] p-6 rounded-lg border-l-4 border-[#7BC043]">
            <p className="text-gray-700 font-semibold mb-2">Commitment to Privacy</p>
            <p className="text-gray-600">
              At Connect Solution, we are committed to protecting your privacy and maintaining the confidentiality of your information. This policy reflects our dedication to transparent and responsible data handling practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;