import { useState } from "react";
import { ChevronDown } from "lucide-react";
import './FAQ.css';
const faqs = [
  {
    question: "How Does Dubai Vacation Homes Work?",
    answer: "The first step is to get in touch with our Homeowner Consultant team—they’ll walk through our services, see if your home’s a good fit, and go over your personalized management fee. If you choose to move forward, you’ll sign a management agreement. We’ll also request access to the property to confirm permits, clean, do an initial inspection, and compile your home’s online listing. We always aim to get your vacation rental up and running as quickly as possible.\n\nOnce your home is ready for guests, Dubai Vacation Homes’ all-in-one vacation rental management handles everything you need to make a peak profit, like:\n\n- Managing your listings on all major booking platforms\n- Providing eye-catching photography, 360-degree tours, and vivid descriptions\n- Leveraging technology to automatically update your prices for maximum revenue\n- Offering 24/7 on-the-ground guest assistance\n- Performing professional housekeeping\n\nThere’s no detail we overlook, no guest touchpoint we haven’t considered. All this leads to happy guests, glowing reviews, and flourishing success."
  },
  {
    question: "Why Choose Dubai Vacation Homes?",
    answer: "Managing a Vaction  rental  isn't easy-but Dubai Vaction makes it look that way.that's because we handle every hassle for you No more fielding guest calls after midnight,spending your free time cleaning, or tracking your reservations on multiple booking sites. With Dubai Vacation Homes, embrace the idea of more—like 24-hour local guest support, 360-degree home tours, professional writing and photography, streamlined reservation management, and thorough housekeeping after every stay. Best of all, we leverage technology to set your optimal nightly rate. All this with one straightforward fee,no long-term contracts, and the freedom to visit your home as frequently as you like. Plus, not forgetting our strong brand name Dubai Vacation Homes com  "
  },

  {
    question: "Are there restrictions on how often I can use my home?",
    answer: "Your vacation home in Dubai is—first and foremost—yours. You’re welcome to reserve your home for personal stays whenever you’d like, provided (of course!) that you honor any guest reservations that are already on your calendar. Other than that, Dubai Vacation Homes doesn’t place any restrictions on how often you can visit or how long you can stay. To block out your travel dates, simply reserve them in your online owner account."
  },
  
  {
    question: "Do I have to sign a long-term contract?",
    answer: "As your vacation rental partner, we’re here to stay. And we hope you are, too. We believe in earning your long-term confidence, our agreement is for 1 year. However, you can cancel your Dubai Vacation Home agreement at any time, with 90 days’ notice. We’ll just need to honor any reservations that are already booked at your home for that 90-day window."
  },
  {
    question: "How does Dubai Vacation Homes advertise my holiday home?",
    answer: "It’s not just about where your home is listed, but how. We have great relationships with all the major vacation rental sites (like Airbnb, Vrbo, and Booking.com), so the Dubai Vacation Homes website often appears right at the top of the google that guests browse. which means, our own website that reaches over 100,000 guests every day.In addition, your home will be included in strategic marketing to our growing audience of past and potential guests. This includes advertisement via search engines, email, social media, and more."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container p-6 ">
      <h3 className="text-3xl font-bold text-center mb-4">Dubai Vacation Homes Property Management FAQ</h3>
      <p className="text-center text-gray-500 mb-6">Most frequent questions asked by Dubai homeowners.</p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 bg-white shadow-lg transition-shadow hover:shadow-xl mb-1"
          >
            <button
              className="w-full flex justify-between items-center text-left font-medium text-lg quetion"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <ChevronDown
                className= {`transform transition-transform ${openIndex === index ? "rotate-180" : ""}`}
              />
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 transition-opacity opacity-100">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}