
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
    <div className="page-container">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-white via-blue-50 to-red-50 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 animate-pulse-glow"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-header animate-bounce-in">
            Frequently Asked Questions
          </h1>
          <p className="section-subtitle animate-slide-up">
            Find answers to common questions about using RENTIFY
          </p>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-red-400 to-pink-400 rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="card-elegant hover-lift animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-8 text-left focus:outline-none focus:ring-2 focus:ring-red-500 rounded-3xl"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-900">{faq.question}</h3>
                    <span className="text-3xl text-gradient-to-r from-red-500 to-pink-500 font-bold">
                      {openFAQ === index ? '−' : '+'}
                    </span>
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-8 animate-fade-in">
                    <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support Section */}
      <div className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-elegant p-12 text-center animate-scale-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 gradient-text">Still have questions?</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <button className="btn-primary hover-lift">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QNA;
