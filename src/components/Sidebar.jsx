export default function Sidebar({
  solutions,
  selectedLanguage,
  setSelectedLanguage,
  selectedCategories = [],
  onToggleCategory,
  onClearCategories,
}) {
  const languages = ["all", ...new Set(solutions.map((s) => s.language))];
  const categories = [
    ...new Set(solutions.map((solution) => solution.category).filter(Boolean)),
  ];

  return (
    <aside className="w-90 border border-r border-[#E5E0B8] py-6 flex-col justify-between hidden md:flex min-h-screen">
      <div className="space-y-12 px-4">
        <div className="flex items-center gap-2.5 mb-8 pl-4">
          <div
            className="w-8 h-8 rounded-lg bg-[#E2703A] text-white flex items-center justify-center font-bold text-lg shadow-sm
                    "
          >
            A
          </div>
          <span className="font-bold text-2xl tracking-tight text-[#1A1C1A]">
            AlgoVault
          </span>
        </div>

        <nav className="space-y-1">
          <span className=" text-md font-semibold uppercase text-[#8A9C8C]">
              Solutions
            </span>
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => setSelectedLanguage(language)}
              className={`w-full text-left px-4 py-3 text-md font-medium transition-all relative flex items-center capitalize
                                ${
                                  selectedLanguage === language
                                    ? "bg-[#E2703A] text-white shadow-sm"
                                    : "text-[#6C726E] hover:bg-[#EF2EDE1] hover:text-[#E2703A]"
                                }`}
            >
              {language === "all" ? "All solutions" : language}
            </button>
          ))}
        </nav>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className=" text-md font-semibold uppercase text-[#8A9C8C]">
              Categories
            </span>
            {selectedCategories.length > 0 && (
              <button
                type="button"
                onClick={onClearCategories}
                className="text-md font-medium text-[#E2703A] hover:underline cursor-pointer"
              >
                Reset
              </button>
            )}
          </div>

          <div className="space-y-1.5 max-h-56 overflow-y-auto">
            {categories.map((category) => {
              const isChecked = selectedCategories.includes(category);

              return (
                <label
                  key={category}
                  className={`flex items-center gap-2.5 px-2.5 rounded-lg text-md cursor-pointer transition-colors ${
                    isChecked
                      ? "bg-[#F2EDE2] text-[#1A1C1A] font-semibold"
                      : "text-[#6C726E] hover:bg-[#F7F4EA] hover:text-[#1A1C1A]"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onToggleCategory?.(category)}
                    className="h-4 w-4 rounded border-[#E5E0D8] accent-[#E2703A] cursor-pointer"
                  />
                  <span className="truncate capitalize">{category}</span>
                </label>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-md text-[#8A908C] border-t border-[#E5E0D8] pt-4 px-4">
        {" "}
        AlgoVault v1.0
      </div>
    </aside>
  );
}
