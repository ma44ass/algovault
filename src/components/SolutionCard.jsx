export default function SolutionCard({ solution, onOpenModal }) {
  const difficultyMarker = {
    Easy: "text-emerald-500 ",
    Intermediate: "text-amber-600 ",
    Hard: "text-rose-100",
  };

  return (
    <div
      className="bg-[#F7F4EA] border border-[#E5E0D8] rounded-lg p-5 hover:shadow-md hover:border-[#D0C9BC] transition-all cursor-pointer flex flex-col justify-between group"
      onClick={() => onOpenModal(solution)}
    >
      <div>
        <div className="flex items-center justify-left mb-3 flex-wrap gap-2">
          <span className="text-md font-semibold tracking-wider py-1 text-[#1A1C1A]] capitalize">
            {solution.language}
          </span>
          <span
            className={`text-md font-medium px-2.5 py-0.5 rounded-md ${difficultyMarker[solution.difficulty] || "bg-gray-100 text-gray-700"}`}
          >
            {solution.difficulty}
          </span>
          {solution.src && (
            <span className="text-md italic tracking-wider px-2.5 py-1 text-[#1A1C1A] capitalize">
              {solution.src}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-[#1A1C1A] group-hover:text-[#E2703A] transition-colors">
          {solution.title}
        </h3>
        <p className="text-md text-[#8A908C] font-medium mt-0.5 mb-2">
          {solution.category}
        </p>

        <p className="text-md text-[#6C726E] line-clamp-2">
          {solution.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-[#E5E0D8] flex items-center justify-between text-s text-[#8A908C]">
        <span>Click to view code</span>
        <span className="text-[#E2703A] font-medium group-hover:translate-x-1 transition-transform">
          &rarr;
        </span>
      </div>
    </div>
  );
}