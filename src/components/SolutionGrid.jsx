import { useState } from "react";

import SolutionCard from "./SolutionCard";

export default function SolutionGrid({
  solutions,
  selectedLanguage,
  searchQuery,
  onOpenModal,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const filteredSolutions = solutions.filter((item) => {
    const matchesLanguage =
      selectedLanguage === "all" ||
      item.language.toLowerCase() === selectedLanguage.toLowerCase();

    const query = searchQuery.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.language.toLowerCase().includes(query);

    return matchesLanguage && matchesSearch;
  });

  if (filteredSolutions.length === 0) {
    return (
      <div className="text-center py-12 bg-[#F7F4EA] border border-[#E5E0D8] rounded-2xl">
        <p className="text-[#6C726E] font-medium">No solutions found.</p>
        <p className="text-[#8A908C] text-xs mt-1">
          Try adjusting your filters or search query.
        </p>
      </div>
    );
  }

  const totalPages = Math.ceil(filteredSolutions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentSolutions = filteredSolutions.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        {currentSolutions.map((solution) => (
          <SolutionCard
            key={solution.id}
            solution={solution}
            onOpenModal={onOpenModal}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between pt-4 border-t border-[#E5E0D8]">
          <span className=" text-xs text-[#8A908C] font-medium">
            Showing {startIndex + 1} to{" "}
            {Math.min(startIndex + itemsPerPage, filteredSolutions.length)} of{" "}
            {filteredSolutions.length} solutions
          </span>

          <div className=" flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 rounded-sm bg-[#F7F4EA] border border-[#E5E0D8] text-xs font-semibold text-[#1A1C1A] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#EFEADF] transition-colors cursor-pointer"
            >
              &larr; Prev
            </button>

            <span className="text-xs font-semibold text-[#6C726E] px-2">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 rounded-lg bg-[#F7F4EA] border border-[#E5E0D8] text-xs font-semibold text-[#1A1C1A] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#EFEADF] transition-colors cursor-pointer"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
