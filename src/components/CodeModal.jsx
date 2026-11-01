import { useState } from "react";

export default function CodeModal({ solution, onClose }) {
  const [copied, setCopied] = useState(false);
  const [activeApproach, setActiveApproach] = useState(0);

  if (!solution) return null;

  const approaches = solution.approaches || [
    {
      name: "Primary Solution",
      description: solution.description,
      code: solution.code || "//No code snippet provided",
    },
  ];

  const currentApproach = approaches[activeApproach];

  const handleCopy = () => {
    navigator.clipboard.writeText(
      currentApproach.code || "// No code snippet provided",
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="  bg-[#FBF9F1] border-b border-[#E5E0D8] rounded-lg w-full max-w-3xl max-h-[90vh] flex flex-col shadow-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-3 py-5 border-b border-[#E5E0D8] flex items-center justify-between bg-[#F7F4EA]">
          <div className="flex items-center gap-3 ">
            <span className="text-xs font-semibold uppercase tracking-wider py-1 text-[#1A1C1A]">
              {solution.language}
            </span>
          </div>
          <button
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#6C726E] hover:text-[#1A1C1A] hover:bg-[#E8E2D5] transition-colors cursor-pointer"
            onClick={onClose}
          >
            x
          </button>
        </div>

        {/* Modal body */}
        <div className="p-6 overflow-y-auto space-y-5">
          <div>
            <h2 className="text-2xl font-bold text-[#1A1C1A]">
              {solution.title}
            </h2>
            <p className="text-lg text-[#6C726E] mt-3 leading-relaxed">
              {solution.description}
            </p>
          </div>

          {approaches.length > 1 && (
            <div className="flex gap-2 pb-3">
              {approaches.map((approch, index) => (
                <button
                  key={index}
                  onClick={() => setActiveApproach(index)}
                  className={`px-3 py-1.5 rounded-xs font-semibold transition-colors cursor-pointer
                  ${
                    activeApproach === index
                      ? "bg-[#E2703A] text-white"
                      : "bg-[#EFEADF] text-[#6C726E] hover:bg-[#E5E0D8]"
                  }`}
                >
                  {approch.name}
                </button>
              ))}
            </div>
          )}

          {currentApproach.description && approaches.length > 1 && (
            <p className="text-[#6C724E] italic bg-[#F7F4EA] p-3 rounded-md border border-[#E5E0D8]">{currentApproach.description}</p>
          )}

          {/* Code viewer */}
          <div>
            <div className="flex items-center justify-between px-4 py-2.5 rounded-t-xl border-t border-x border-[#E5E0D8] text-md ">
              <span>Implementation Code</span>
              <button onClick={handleCopy}>
                {copied ? "✓ Copied!" : "Copy Code"}
              </button>
            </div>
            <pre className="bg-[#1A1C1A] text-[#FBF9F1] p-4 rounded-b-md overflow-x-auto text-md font-mono leading-relaxed">
              <code>
                {currentApproach.code ||
                  '// Add a "code" property to your solution object'}
              </code>
            </pre>
          </div>

          <div className="px-2 py-2 flex justify-end">
            <button
              className="px-4 py-2 rounded-md bg-[#E2703A] text-white text-md font-semibold hover:bg-[#cf6230] transition-colors cursor-pointer"
              onClick={onClose}
            >
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
