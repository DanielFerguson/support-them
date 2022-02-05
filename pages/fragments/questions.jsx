const faqs = [
  {
    question: "Who started Support Them?",
    answer:
      "Dan Ferguson (founder of the Helping Group) started the Support Them initiative in order to help small local buisinesses reach a large, local audience and for those looking to shop local to have an easier browsing experience.",
  },
  {
    question: "Why are only Ballarat-based businesses listed?",
    answer:
      "There are so many amazing businesses out there, and we want to help them all. However, as we only have limited resources we need to pick and choose our battles. Please feel free to reach out to us if you want to see Support Them extend to your closest town, and we will mark it on our map!",
  },
  {
    question: "I'm a business owner, can I add my business to Support Them?",
    answer:
      "As long as you're in the greater Ballarat region, yes! Please fill out the form by pressing 'Get Started' above and we will add your business as soon as possible.",
  },
  {
    question: "What's the best way to get in contact with the team?",
    answer:
      "If you want to get in touch with us for any reason, please reach out to us via gday@danferg.com",
  },
];

export default function Questions() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Can’t find the answer you’re looking for?{" "}
              <a href="mailto:gday@danferg.com" className="text-yellow-600">
                Reach out
              </a>{" "}
              to our team today.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
