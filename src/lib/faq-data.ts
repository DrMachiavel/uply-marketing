export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "How does billing work?",
    answer:
      "Uply Pro is free during early access. When paid plans launch, you'll get 30 days notice before any charges apply.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, cancel anytime. No contracts, no commitments.",
  },
  {
    question: "What Slack permissions does Uply need?",
    answer:
      "Uply only posts to channels you choose. It cannot read your messages or access private conversations.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We don't store message content. Only question responses are saved, and all data is encrypted at rest and in transit.",
  },
  {
    question: "How many topics are available?",
    answer:
      "The Free plan includes 1 topic. Pro includes all current and future topics, with new ones added every month.",
  },
];
