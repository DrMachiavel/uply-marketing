"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { faqs } from "@/lib/faq-data";
import type { FaqItem } from "@/lib/faq-data";

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-base font-medium text-uply-dark">
          {item.question}
        </span>
        <svg
          className={`h-5 w-5 shrink-0 text-uply-gray transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={`grid transition-all duration-200 ease-in-out ${
          isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-uply-gray">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section theme="light">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-uply-dark md:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-uply-gray">
          Everything you need to know about Uply.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-2xl">
        {faqs.map((item, i) => (
          <FaqAccordionItem
            key={item.question}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </Section>
  );
}
