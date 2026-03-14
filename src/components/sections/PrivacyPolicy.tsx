import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>

        <p className="mb-4">
          At <strong>Digital Agency Park</strong>, we value your privacy and are committed to protecting your personal information.
          This Privacy Policy explains what information we collect, how we use it, and how we protect your data.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Personal information you provide (name, email, phone, company) when contacting us.</li>
          <li>Website usage data (IP address, browser type, pages visited) collected automatically.</li>
          <li>Cookies and similar technologies for analytics and site performance.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>To provide our services like website development, digital marketing, and automation.</li>
          <li>To respond to inquiries and support requests.</li>
          <li>To improve our website, services, and user experience.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">3. Data Protection</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal data from unauthorized access, disclosure, or misuse.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">4. Third-Party Services</h2>
        <p className="mb-4">
          We may share your information with trusted third-party service providers (analytics, payment gateways) to help run our business effectively. They are bound to protect your data.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">5. Your Rights</h2>
        <p className="mb-4">
          You can request access, correction, or deletion of your personal data. Contact us at <a href="mailto:info@digitalagencypark.com" className="text-blue-600 underline">info@digitalagencypark.com</a>.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">6. Updates to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy occasionally. Please check this page regularly for any changes.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;