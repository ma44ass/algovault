export default function HeroBanner({ totalSolutions, solutions }) {
  const languageCounts = solutions.reduce((acc, curr) => {
    acc[curr.language] = (acc[curr.language] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="md:col-span-2 bg-[#F2EDE1] border border-[#E5E0D8] rounded-md p-6 flex flex-col justify-between shadow-xs">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#E2703a]">
            Overview
          </span>

          <h1 className="text-2xl md:text-3xl font-bold text-[#1A1C1A] mt-1">
            Welcome back, Developer!
          </h1>
          <p className="text-sm text-[#6C726E] mt-2 max-w-lg">
            Your personal archive of algorithmic solutions. Currently tracking
            clean implementations across JavaScript and Python.
          </p>
        </div>

        <div className="mt-6 flex items-center gap-4 text-xs font-medium text-[#6C726E]">
          <span className="bg-[#E5E0D8] px-3 py-1 text-[#1A1C1A] rounded-sm">
            {totalSolutions} Total Solutions
          </span>
        </div>
      </div>

      <div className="bg-[#EFEADF] border border-[#E5E0D8] rounded-md p-6 flex flex-col justify-between shadow-xs">
        <div>
          <h2 className="text-sm font-semibold text-[#6C726E] uppercase tracking-wider">
            Language Breakdown
          </h2>
          <div className="mt-4 space-y-3">
            {Object.entries(languageCounts).map(([language, count]) => (
              <div
                key={language}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-[#1A1C1A] font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                  {language}
                </span>
                <span className="text-sm font-bold text-[#1A1C1A]">
                  {count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
