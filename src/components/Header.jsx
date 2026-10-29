

export default function Header({searchQuery, setSearchQuery}){
    return(
        <header className="border-b border-[#E5E0D8] bg-[#FBF9F1] px-8 py-4 flex items-center justify-between gap-4">
            <div className="w-full max-w-md">
                <input
                    className="w-full bg-[#F0ECE1] border border-[#E5E0D8] rounded-xl px-4 py-2.5 text-sm text-[#1A1C1A] placeholder-[#8A908C] focus:outline-none focus:ring-2 focus:ring-[#E2703A]/40 transition-all"
                    type="text"
                    value={searchQuery}
                    placeholder="Search algorithms, categories, or keywords..."
                    onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-3">
                    <span className = "text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#FECE1] text-[#6C726E] border border-[#E5E0B8]">Ready to Solve</span>
                </div>
        </header>
    )
}