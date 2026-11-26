export default function Sidebar({
  solutions,
  selectedLanguage,
  setSelectedLanguage,
  selectedCategories = [],
  onToggleCategory,
  onClearCategories,
  isOpen,
  onClose,
}) {
  const languages = ["all", ...new Set(solutions.map((s) => s.language))];
  const categories = [
    ...new Set(solutions.map((solution) => solution.category).filter(Boolean)),
  ];

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
    onClose?.();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-[#1A1C1A]/50 backdrop-blur-[2px] md:hidden"
        />
      )}

      {/* Drawer on Mobile / Docked Sidebar on Desktop */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 lg:w-80 bg-[#FBF9F1] border-r border-[#E5E0D8] py-6 flex flex-col justify-between min-h-screen transition-transform duration-200 ease-out
          md:sticky md:top-0 md:h-screen md:translate-x-0 md:z-auto
          ${isOpen ? "translate-x-0 shadow-xl" : "-translate-x-full"}`}
      >
        <div className="space-y-8 px-4 overflow-y-auto">
          {/* Header + Mobile Close Button */}
          <div className="flex items-center justify-between pl-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#E2703A] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                A
              </div>
              <span className="font-bold text-2xl tracking-tight text-[#1A1C1A]">
                AlgoVault
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="md:hidden p-2 rounded-lg text-[#6C726E] hover:bg-[#F2EDE2] hover:text-[#1A1C1A] cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Language Filter */}
          <nav className="space-y-1">
            <span className="block mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-[#8A9C8C]">
              Solutions
            </span>
            {languages.map((language) => (
              <button
                key={language}
                onClick={() => handleSelectLanguage(language)}
                className={`w-full text-left px-4 py-2.5 rounded-sm text-sm font-medium transition-all flex items-center capitalize cursor-pointer
                  ${
                    selectedLanguage === language
                      ? "bg-[#E2703A] text-white shadow-sm"
                      : "text-[#6C726E] hover:bg-[#F2EDE2] hover:text-[#E2703A]"
                  }`}
              >
                {language === "all" ? "All solutions" : language}
              </button>
            ))}
          </nav>

          {/* Category Filter */}
          <div>
            <div className="flex items-center justify-between mb-2 px-2">
              <span className="text-md font-semibold uppercase  text-[#8A9C8C]">
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

            <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
              {categories.map((category) => {
                const isChecked = selectedCategories.includes(category);

                return (
                  <label
                    key={category}
                    className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-md cursor-pointer transition-colors ${
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

        <div className="text-md text-[#8A908C] border-t border-[#E5E0D8] pt-4 px-6">
          AlgoVault v1.0
        </div>
      </aside>
    </>
  );
}