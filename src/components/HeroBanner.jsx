export default function HeroBanner({ totalSolutions, solutions }) {
  const languageCounts = solutions.reduce((acc, curr) => {
    if (!curr.language) return acc;
    const key = curr.language.toLowerCase();
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="md:col-span-2 bg-[#ffffff] border border-[#E2703A] rounded-lg px-5 py-4 flex flex-col justify-center gap-1.5">
        <span className="text-sm font-semibold uppercase tracking-wider text-[#E2703A]">
          Overview
        </span>

        <h1 className="text-xl md:text-2xl font-bold text-[#1A1C1A]">
          Welcome back!
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
          <p className="text-md text-[#726c6c]">
            Your personal archive of algorithmic solutions.
          </p>
          <span className="text-md font-semibold text-[#1b680c]">
            {totalSolutions} {totalSolutions === 1 ? "solution" : "solutions"}
          </span>
        </div>
      </div>

      <div className="bg-[#ffffff] border border-[#E2703A] rounded-lg px-5 py-4 flex flex-col justify-center">
        <h2 className="text-sm font-semibold text-[#E2703A] uppercase tracking-wider">
          Language Breakdown
        </h2>

        <div className="mt-3 space-y-2">
          {Object.entries(languageCounts).map(([language, count]) => (
            <div
              key={language}
              className="flex items-center justify-between text-md"
            >
              <span className="text-[#1A1C1A] font-medium capitalize flex items-center gap-2">
                {language}
              </span>
              <span className="font-semibold text-[#1A1C1A]">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}