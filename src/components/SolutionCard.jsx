export default function SolutionCard({ solution, onOpenModal }) {
  const difficultyMarker = {
    Easy: "bg-emerald-100 text-emerald-800 border-emerald-200",
    Medium: "bg-amber-100 text-amber-800 border-amber-200",
    Hard: "bg-rose-100 text-rose-800 border-rose-200",
  };

  return (
    <div
      className="bg-[#F7F4EA] border border-[#E5E0D8] rounded-lg p-5 hover:shadow-md hover:border-[#D0C9BC] transition-all cursor-pointer flex flex-col justify-between group"
      onClick={() => onOpenModal(solution)}
    >
      <div>
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <span className="text-xs font-semibold tracking-wider px-2.5 py-1 rounded-md bg-[#EFEADF] text-[#1A1C1A] border border-[#E5E0D8] capitalize">
            {solution.language}
          </span>
          <span
            className={`text-xs font-medium px-2.5 py-0.5 rounded-lg border ${difficultyMarker[solution.difficulty] || "bg-gray-100 text-gray-700"}`}
          >
            {solution.difficulty}
          </span>
          {solution.src && (
            <span className="text-xs font-semibold tracking-wider px-2.5 py-1 rounded-md bg-[#EFEADF] text-[#1A1C1A] border border-[#E5E0D8] capitalize">
              {solution.src}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-[#1A1C1A] group-hover:text-[#E2703A] transition-colors">
          {solution.title}
        </h3>
        <p className="text-xs text-[#8A908C] font-medium mt-0.5 mb-2">
          {solution.category}
        </p>

        <p className="text-sm text-[#6C726E] line-clamp-2">
          {solution.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-[#E5E0D8] flex items-center justify-between text-xs text-[#8A908C]">
        <span>Click to view code</span>
        <span className="text-[#E2703A] font-medium group-hover:translate-x-1 transition-transform">
          &rarr;
        </span>
      </div>
    </div>
  );
}