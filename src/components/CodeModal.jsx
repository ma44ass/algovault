import { useEffect, useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";

export default function CodeModal({ solution, onClose }) {
  const [copied, setCopied] = useState(false);
  const [activeApproach, setActiveApproach] = useState(0);

  useEffect(() => {
    if (!solution) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [solution, onClose]);

  if (!solution) return null;

  const approaches = solution.approaches || [
    {
      name: "Primary Solution",
      description: solution.description,
      code: solution.code || "// No code snippet provided",
    },
  ];

  const currentApproach = approaches[activeApproach] || approaches[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(
      currentApproach.code || "// No code snippet provided"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-[#FBF9F1] border border-[#E5E0D8] rounded-lg w-full max-w-3xl max-h-[90vh] flex flex-col shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-3.5 border-b border-[#E5E0D8] flex items-center justify-between bg-[#F7F4EA]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md bg-[#E2703A]/12 text-[#C85A28] text-md font-bold uppercase tracking-wide">
              {solution.language}
            </span>

            {solution.category && (
              <span className="px-2.5 py-0.5 text-[#4A504D] text-s font-medium">
                {solution.category}
              </span>
            )}

            {solution.difficulty && (
              <span className="px-2.5 py-0.5 text-[#6C726E] text-s font-semibold">
                {solution.difficulty}
              </span>
            )}

            {solution.src && (
              <span className="text-xs text-[#8A908C]">
                 {solution.src}
              </span>
            )}
          </div>

          <button
            type="button"
            aria-label="Close modal"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#6C726E] hover:text-[#1A1C1A] hover:bg-[#E8E2D5] transition-colors cursor-pointer text-sm font-semibold"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Modal body */}
        <div className="p-6 overflow-y-auto space-y-5">
          <div>
            <h2 className="text-2xl font-bold text-[#1A1C1A]">
              {solution.title}
            </h2>
            <p className="text-base text-[#5C625E] mt-2 leading-relaxed">
              {solution.description}
            </p>
          </div>

          {approaches.length > 1 && (
            <div className="flex flex-wrap gap-2">
              {approaches.map((approach, index) => {
                const isSelected = activeApproach === index;
                return (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setActiveApproach(index)}
                    className={`px-3.5 py-1.5 rounded-lg text-md font-semibold transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-[#E2703A] text-white shadow-xs"
                        : "bg-[#F7F4EA] text-[#5C625E] border border-[#E5E0D8] hover:bg-[#EFEADF] hover:text-[#1A1C1A]"
                    }`}
                  >
                    {approach.name}
                  </button>
                );
              })}
            </div>
          )}

          {currentApproach.description && approaches.length > 1 && (
            <p className="text-md text-[#4A504D] bg-[#F7F4EA] px-4 py-3 rounded-lg border border-[#E2703A] leading-relaxed">
              {currentApproach.description}
            </p>
          )}

          {/* Code viewer */}
          <div className="rounded-xl overflow-hidden border border-[#E5E0D8]">
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#F7F4EA] border-b border-[#E5E0D8]">
              <span className="font-semibold uppercase tracking-wide text-[#6C726E]">
                Implementation Code
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="px-2.5 py-1 rounded-md text-sm font-semibold bg-[#FBF9F1] hover:bg-[#EFEADF] text-[#1A1C1A] border border-[#E5E0D8] transition-colors cursor-pointer"
              >
                {copied ? "✓ Copied" : "Copy Code"}
              </button>
            </div>

            <AceEditor
              mode={solution.language === "python" ? "python" : "javascript"}
              theme="tomorrow_night_eighties"
              value={currentApproach.code}
              name="code-editor-view"
              readOnly={true}
              fontSize={16}
              showPrintMargin={false}
              showGutter={true}
              highlightActiveLine={true}
              width="100%"
              height="300px"
              setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: false,
                showLineNumbers: true,
                tabSize: 2,
                fontFamily: '"JetBrains Mono", monospace',
              }}
            />
          </div>

          <div className="pt-1 flex justify-end">
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-[#E2703A] text-white text-sm font-semibold hover:bg-[#cf6230] transition-colors cursor-pointer"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}