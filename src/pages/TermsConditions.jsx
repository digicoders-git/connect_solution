import React from 'react';
import { Shield, FileText, Users, AlertTriangle } from 'lucide-react';
import Slider from '../components/Slider';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Slider 
        h1="Terms and Conditions"
        subH1="Please read our terms carefully before using our services"
        img1="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
        
        h2="Legal Agreement"
        subH2="Understanding your rights and responsibilities"
        img2="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
        
        h3="Service Terms"
        subH3="Transparent policies for quality service delivery"
        img3="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80"
      />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[#1FA4C4] rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-[#1FA4C4] mb-4">Terms and Conditions</h1>
          <p className="text-gray-600">Last updated: January 2024</p>
        </div>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1FA4C4] mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6" />
              1. Agreement to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using Connect Solution's telemarketing services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1FA4C4] mb-4 flex items-center gap-3">
              <Users className="w-6 h-6" />
              2. Service Description
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Connect Solution provides professional telemarketing, telesales, and lead generation services. Our services include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Outbound telemarketing campaigns</li>
              <li>Inbound call handling services</li>
              <li>Lead generation and qualification</li>
              <li>Appointment scheduling</li>
              <li>Customer support services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1FA4C4] mb-4">3. Client Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Clients are responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Providing accurate and up-to-date information about their products/services</li>
              <li>Ensuring compliance with all applicable laws and regulations</li>
              <li>Providing necessary training materials and guidelines</li>
              <li>Timely payment of agreed fees</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1FA4C4] mb-4">4. Payment Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Payment terms are as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Invoices are payable within 30 days of receipt</li>
              <li>Late payments may incur additional charges</li>
              <li>Services may be suspended for overdue accounts</li>
              <li>All prices are exclusive of applicable taxes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1FA4C4] mb-4">5. Confidentiality</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Connect Solution maintains strict confidentiality regarding all client information, customer data, and business processes. We do not share, sell, or distribute any client information to third parties without explicit consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1FA4C4] mb-4">6. Performance Standards</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We strive to maintain high performance standards including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Professional communication at all times</li>
              <li>Adherence to agreed calling schedules</li>
              <li>Regular reporting and updates</li>
              <li>Compliance with industry best practices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1FA4C4] mb-4 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6" />
              7. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Connect Solution's liability is limited to the amount paid for services. We are not responsible for indirect, consequential, or punitive damages arising from the use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1FA4C4] mb-4">8. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Either party may terminate the service agreement with 30 days written notice. Upon termination, all confidential information must be returned or destroyed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1FA4C4] mb-4">9. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These terms are governed by the laws of India. Any disputes will be resolved through arbitration in accordance with Indian arbitration laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1FA4C4] mb-4">10. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions regarding these terms and conditions, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">Email: jiteshdhameja191990@gmail.com</p>
              <p className="text-gray-700">Phone: <a href="tel:+918881055055" className="hover:text-[#F7941D] transition-colors">+91 8881055055</a> / <a href="tel:+918881033033" className="hover:text-[#F7941D] transition-colors">+91 8881033033</a></p>
              <p className="text-gray-700">Address: House No – B-3/010-CC, Zone 4, Ward – Gomti Nagar (110)</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;