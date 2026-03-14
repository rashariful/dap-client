import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h1>

        <p className="mb-4">
          Welcome to <strong>Digital Agency Park</strong>. By accessing or using our services, you agree to these Terms of Service.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">1. Service Overview</h2>
        <p className="mb-4">
          We provide digital solutions including website development, eCommerce, UI/UX design, digital marketing, video editing, and business automation.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">2. Payment Terms</h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>50% advance before project starts.</li>
          <li>50% remaining on project completion before delivery.</li>
          <li>Additional revisions or changes outside initial scope may incur extra charges.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">3. Client Responsibilities</h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Provide necessary information, content, and approvals promptly.</li>
          <li>Ensure legality of content shared with us.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">4. Intellectual Property</h2>
        <p className="mb-4">
          All work remains property of Digital Agency Park until final payment is received, after which full rights are transferred to the client.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">5. Limitation of Liability</h2>
        <p className="mb-4">
          We are not liable for indirect or consequential damages. Services are provided “as is” to the best of our abilities.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">6. Termination</h2>
        <p className="mb-4">
          Either party may terminate the project if terms are breached. Payments made for completed work are non-refundable.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">7. Updates to Terms</h2>
        <p className="mb-4">
          Digital Agency Park may update these Terms of Service at any time. Clients are advised to review periodically.
        </p>

        <p className="mt-6">
          Contact us at <a href="mailto:info@digitalagencypark.com" className="text-blue-600 underline">info@digitalagencypark.com</a> for questions regarding these Terms.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;