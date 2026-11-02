export default function Sidebar({
  solutions,
  selectedLanguage,
  setSelectedLanguage,
}) {
  const languages = ["all", ...new Set(solutions.map((s) => s.language))];

  return (
    <aside className="w-55 border border-r border-[#E5E0B8] py-6 flex-col justify-between hidden md:flex min-h-screen">
      <div>
        <div className="flex items-center gap-2 5 mb-8 pl-4">
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
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => setSelectedLanguage(language)}
              className={`w-full text-left px-4 py-3 text-md font-medium transition-all relative flex items-center capitalize
                                ${
                                  selectedLanguage === language
                                    ? "bg-[#E2703A] text-white shadow-sm"
                                    : "text-[#6C726E] hover:bg-[#EA5DC] hover:text-[#E2703A]"
                                }`}
            >
              {language === "all" ? "All solutions" : language}
            </button>
          ))}
        </nav>
      </div>
      <div className="text-xs text-[#8A908C] border-t border-[#E5E0D8] pt-4">
        {" "}
        AlgoVault v1.0
      </div>
    </aside>
  );
}
