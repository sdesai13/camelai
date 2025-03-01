"use client";
import { useState } from "react";

export default function FAQ() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(index === openFaqIndex ? null : index);
  };

  const faqs = [
    {
      question: "How is my data stored?",
      answer: `camelAI's infrastructure is hosted on AWS. Data from applications is pulled only when necessary and limited to what you request in your prompt. It is stored in an EC2 cache for 5 minutes and then deleted. For more information, please see our
      <a href="#security-policy">Security Policy</a> and our <a href="#security-blog">security blog post</a>.`,
    },
    {
      question: "Do you train on my data?",
      answer: `No, we do not train on your data. camelAI is powered by OpenAI's API. We have opted out of data sharing for training. You can read more about OpenAI's API policies <a href="https://openai.com/enterprise-privacy/" target="_blank" rel="noopener noreferrer">here</a>.`,
    },
    {
      question: "Are my app connections secure?",
      answer: `Yes, your app connections are secure. We use OAuth 2.0 when available or secure key authentication to authenticate and authorize access to your applications. Your data is encrypted in transit and at rest. If you revoke access to an app, the connection is immediately destroyed and we will no longer have access to that application.`,
    },
    {
      question: "How do you pull my data?",
      answer: `camelAI only communicates with your connected apps when you request data in the chat. We do not train on your data, nor do we access or store any data without your request and supervision.`,
    },
  ];

  return (
    <section className="faq-section">
      <h2 className="faqs-heading">FAQs</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFaq(index)}>
              {faq.question}
              <span className="arrow">{openFaqIndex === index ? "▼" : "▲"}</span>
            </button>
            <div
              className="faq-answer"
              style={{ maxHeight: openFaqIndex === index ? "500px" : "0" }}
            >
              <div className="faq-code-snippet">
                <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
