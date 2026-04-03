"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col gap-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-[13px]">
          <span className="w-[7px] h-[7px] bg-green rounded-[1px]" />
          <span className="text-lg font-medium text-sub-gray font-['DM_Sans']">
            FAQ
          </span>
        </div>
        <h2 className="text-[28px] md:text-[38px] font-bold text-main-black leading-[1.28]">
          よくある質問
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-[10px] shadow-[2px_2px_8px_rgba(0,0,0,0.08)] overflow-hidden"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-left cursor-pointer"
              aria-expanded={openIndex === index}
            >
              <h3 className="text-[15px] md:text-[17px] font-bold text-main-black leading-[1.6] flex-1">
                <span className="text-green mr-2">Q.</span>
                {item.question}
              </h3>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                className={`shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M0.5 0.5L7 7L13.5 0.5"
                  stroke="#767f93"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-4 md:px-6 md:pb-5 border-t border-[#f0f1f3]">
                  <p className="text-[14px] md:text-[15px] text-sub-gray leading-[1.8] pt-4">
                    <span className="text-green font-bold mr-2">A.</span>
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
