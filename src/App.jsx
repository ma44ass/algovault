import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import SolutionGrid from "./components/SolutionGrid";
import CodeModal from "./components/CodeModal";

import solutions from "./data/solutions.json";

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSolution, setSelectedSolution] = useState(null);

  const totalSolutions = solutions.length;

  return (
    <div className="min-h-screen bg-[#FBF9F1] text-[#2C302E] font-sans flex">
      <Sidebar
        solutions={solutions}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />

      <main className="flex-1 flex flex-col min-w-0">
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
        />

        <div className="p-8 overflow-y-auto">
          <HeroBanner totalSolutions={totalSolutions} solutions={solutions} />

          <SolutionGrid
            key={`${selectedLanguage}-${searchQuery}-${selectedDifficulty}`}
            solutions={solutions}
            selectedLanguage={selectedLanguage}
            selectedDifficulty={selectedDifficulty}
            searchQuery={searchQuery}
            onOpenModal={(solution) => setSelectedSolution(solution)}
          />
        </div>
      </main>

      <CodeModal
        key={selectedSolution ? selectedSolution.id : "closed"}
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
      />
    </div>
  );
}
