export function FAQSection({
  faqs,
  title = "Frequently asked questions",
}: {
  faqs: { question: string; answer: string }[];
  title?: string;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <div className="mt-4 space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="rounded-lg border border-slate-200 bg-white p-4"
          >
            <summary className="cursor-pointer font-medium text-slate-900">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
