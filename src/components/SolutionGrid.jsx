import SolutionCard from "./SolutionCard";

export default function SolutionGrid({ solutions, selectedLanguage, searchQuery, onOpenModal }) {

    const filteredSolutions = solutions.filter((item) => {
        const matchesLanguage = selectedLanguage === "all" ||
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
                <p className="text-[#8A908C] text-xs mt-1">Try adjusting your filters or search query.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSolutions.map((solution) => (
                <SolutionCard
                    key={solution.id}
                    solution={solution}
                    onOpenModal={onOpenModal}
                />
            ))}   
        </div>
    );
}