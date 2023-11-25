// Custom components/libs

const insights = [
  '20+ Projects Completed',
  '3+ Years of Freelancing',
  '99% Client Satisfaction',
  '20K+ Subscribers',
  'Authored In-Depth Course on Educative',
  'Contributed as a Technical Course Reviewer 📝',
  'Recipient of the Hackernoon Noonies Award 🏆',
];

const InsightRoll = () => {
  return (
    <div className="w-full bg-accent text-light whitespace-nowrap overflow-hidden">
      <div className="animate-roll w-full py-2 flex items-center justify-center capitalize font-semibold tracking-wider text-base">
        {insights.map((text, index) => (
          <div key={index}>
            {text} <span className="px-4">|</span>{' '}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightRoll;
