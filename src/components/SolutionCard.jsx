const difficultyMarker = {
  Easy: "text-emerald-700",
  Intermediate: "text-amber-700",
  Hard: "text-rose-700",
};

export default function SolutionCard({ solution }) {
  const approachCount = solution.approaches?.length || 1;
  const difficultyClass =
    difficultyMarker[solution.difficulty] || "text-[#5C625E]";

  return (
    <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FBF9F1] group-hover:bg-[#F7F4EA] transition-colors cursor-pointer">
      {/* Number, Title & Summary */}
      <div className="min-w-0 flex-1 space-y-1">
        <div className="flex items-center gap-2.5">
          <span className="text-sm font-mono text-[#E2703A]">
            #{String(solution.id).padStart(2, "0")}
          </span>
          <h3 className="text-md font-bold text-[#1A1C1A] group-hover:text-[#E2703A] transition-colors truncate">
            {solution.title}
          </h3>
        </div>

        <p className="text-sm text-[#6C726E] line-clamp-1">
          {solution.description}
        </p>
      </div>

      {/*Metadata */}
      <div className="flex items-center flex-wrap sm:flex-nowrap gap-4 shrink-0 text-sm">
        {solution.language && (
          <span className="font-medium text-[#6C726E] capitalize">
            {solution.language}
          </span>
        )}

        {solution.category && (
          <span className="font-medium text-[#5C625E]">
            {solution.category}
          </span>
        )}

        {solution.difficulty && (
          <span className={`font-semibold ${difficultyClass}`}>
            {solution.difficulty}
          </span>
        )}

        <span className="text-[#8A908C] hidden lg:inline">
          {approachCount} {approachCount === 1 ? "approach" : "approaches"}
        </span>

        <span className="font-semibold text-[#E2703A] group-hover:translate-x-0.5 transition-transform">
          View &rarr;
        </span>
      </div>
    </div>
  );
}
