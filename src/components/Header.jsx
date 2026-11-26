
export default function Header({
  searchQuery,
  setSearchQuery,
  selectedDifficulty,
  setSelectedDifficulty,
  onOpenSidebar,
  activeFilterCount = 0,
}) {
  const difficulties = ["all", "Easy", "Intermediate"];




  return (
    <header className="border-b border-[#E5E0D8] bg-[#FBF9F1] px-4 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
      <div className="flex items-center gap-2.5 w-full sm:max-w-md">
        <button
          type="button"
          onClick={onOpenSidebar}
          aria-label={
            activeFilterCount > 0
              ? `Open sidebar filters (${activeFilterCount} active)`
              : "Open sidebar filters"
          }

          className=" relative md:hidden shrink-0 px-3 py-2.5 rounded-lg border border-[#E5E0D8] bg-[#F7F4EA] text-[#1A1C1A] hover:bg-[#EFEADF] hover:border-[#E2703A] transition-all cursor-pointer text-md font-medium"
        >
          ☰
          {activeFilterCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 rounded-md bg-[#E2703A] text-white text-[12px] font-semibold flex items-center justify-center shadow-sm">
              {activeFilterCount}
            </span>
          )}
        </button>

        <input
          className="w-full bg-[#F0ECE1] border border-[#E5E0D8] rounded-lg px-4 py-2.5 text-md text-[#1A1C1A] placeholder-[#8A908C] focus:outline-none focus:ring-2 focus:ring-[#E2703A]/40 transition-all"
          type="text"
          value={searchQuery}
          placeholder="Search algorithms, categories, or keywords..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex items-center flex-wrap gap-2">
        <span className="text-md font-semibold text-[#8A908C] uppercase tracking-wider mr-1 hidden sm:inline">
          Difficulty:
        </span>
        {difficulties.map((difficulty) => {
          const isActive = selectedDifficulty === difficulty;
          return (
            <button
              key={difficulty}
              onClick={() => setSelectedDifficulty(difficulty)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer capitalize ${
                isActive
                  ? "bg-[#E2703A] text-white shadow-sm font-semibold"
                  : "bg-[#F7F4EA] text-[#6C726E] border border-[#E5E0D8] hover:bg-[#EFEADF] hover:text-[#1A1C1A]"
              }`}
            >
              {difficulty === "all" ? "All" : difficulty}
            </button>
          );
        })}
      </div>
    </header>
  );
}