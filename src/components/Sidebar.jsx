

export default function Sidebar({selectedLanguage, setSelectedLanguage}){
    const navItems = [
        {id: "all", label : "All Solutions"},
        {id: "javaScript", label : "JavaScript"},
        {id: "python", label : "Python"},
    ];

    return (
        <aside className="w-64 border border-r border-[#E5E0B8] p-6 flex-col justify-between hidden md:flex min-h-screen">
            <div>
                <div className="flex items-center gap-2 5 mb-8">
                    <div className="w-8 h-8 rounded-lg bg-[#E2703A] text-white flex items-center justify-center font-bold text-lg shadow-sm
                    ">
                        A
                    </div>
                    <span className="font-bold text-xl tracking-tight text-[#1A1C1A]">AlgoVault</span>
                </div>
            

                <nav className="space-y-1">
                    {navItems.map((item) => (
                        <button
                            key ={item.id}
                            onClick={() => setSelectedLanguage(item.id)}
                            className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all 
                                ${
                                selectedLanguage === item.id 
                                ? 'bg-[#E5E0D8] text-[#1A1C1A] shadow-sm'
                                : 'text-[#6C726E] hover:bg-[#EA5DC] hover:text-[#1A1C1A]'
                            }`}
                        >
                            {item.label}    
                        </button>
                    ))}
                </nav>
            </div>
            <div className="text-xs text-[#8A908C] border-t border-[#E5E0D8] pt-4"> AlgoVault v1.0</div>

        </aside>
    )
}