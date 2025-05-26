
import React, { useState } from 'react';

const QNA = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I list my property on RENTIFY?",
      answer: "Go to Services page, select your property type, fill in the details including location, photos, and description. Our team will verify and publish your listing."
    },
    {
      question: "Is RENTIFY safe to use?",
      answer: "Yes, we verify all users and listings. We also provide secure communication channels and have safety guidelines for all interactions."
    },
    {
      question: "How do I find a roommate?",
      answer: "Use our roommate finder feature to connect with people looking for shared accommodation. You can filter by location, budget, and preferences."
    },
    {
      question: "What types of properties can I find?",
      answer: "We have family houses, bachelor apartments, commercial spaces, and roommate options available across different locations and budgets."
    },
    {
      question: "How do I contact property owners?",
      answer: "Once you find a property you're interested in, you can contact the owner through our secure messaging system or contact information provided."
    },
    {
      question: "Are there any fees for using RENTIFY?",
      answer: "Basic browsing and searching is free. We charge a small service fee only when you successfully find a rental through our platform."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about using RENTIFY
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <span className="text-2xl text-yellow-500">
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <button className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default QNA;
