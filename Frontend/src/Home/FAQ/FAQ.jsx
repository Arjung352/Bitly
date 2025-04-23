import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="features">
      <h1 className="text-center text-5xl font-WorkSans my-4 " id="FAQ">
        FAQ
      </h1>
      <div className="feature my-8 backdrop-filter backdrop-blur-md bg-opacity-15 ">
        {faqData.map((item, index) => (
          <div key={index}>
            <button
              className={`accordion ${
                activeIndex === index ? "active" : ""
              } shadow-md rounded-xl`}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
            </button>
            <div
              className={`panel border-none m-2 ${
                activeIndex === index ? "open" : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Data for FAQ
const faqData = [
  {
    question: "What is Shortify and what does it offer?",
    answer:
      "Shortify is a powerful micro-SaaS platform that allows users to shorten long URLs, generate QR codes for those links, and track detailed analytics such as click counts, device types, and geographic locations—all from a single dashboard.",
  },
  {
    question: "How do I create a shortened link using Shortify?",
    answer:
      "Simply log in with your credentials, paste the long URL into the input field, and click the 'Shorten' button. Shortify will instantly generate a unique, shortened version of your link, ready to share.",
  },
  {
    question: "Can I generate a QR code for the shortened link?",
    answer:
      "Yes! Once a link is shortened, Shortify provides an option to instantly generate a QR code. This QR code can be downloaded and shared easily for offline or print use.",
  },
  {
    question: "What kind of analytics does Shortify provide?",
    answer:
      "Shortify offers real-time analytics including the total number of clicks, types of devices used (mobile/desktop), and the geographic locations of users accessing the link. This helps you track performance and engagement effectively.",
  },
  {
    question: "Is there user authentication in Shortify?",
    answer:
      "Yes, Shortify supports secure authentication using a hardcoded email and password for demonstration purposes. This ensures that all created links are tied to a specific user for multi-user support and personalized dashboards.",
  },
  {
    question: "Can I view all my created links in one place?",
    answer:
      "Absolutely. After logging in, users are presented with a dashboard that lists all their shortened links along with their corresponding analytics. It includes pagination and search features for easy navigation and access.",
  },
  {
    question: "Is Shortify mobile-friendly?",
    answer:
      "Yes, Shortify is built with responsiveness in mind. Whether you're on a desktop, tablet, or mobile device, the UI adapts seamlessly to ensure a smooth and consistent experience.",
  },
];

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
