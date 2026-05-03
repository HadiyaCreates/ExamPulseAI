

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { extractTextFromPDF } from "../utils/pdf";

// function Home() {
//   const [files, setFiles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // Handle file selection
//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     setFiles((prev) => [...prev, ...selectedFiles]);
//   };

//   // Remove file from list
//   const removeFile = (index) => {
//     setFiles(files.filter((_, i) => i !== index));
//   };

//   // Existing Backend Logic
//   const handleAnalyze = async () => {
//     if (files.length === 0) return;
//     setLoading(true);

//     try {
//       // Logic for the first file (following your existing backend structure)
//       const text = await extractTextFromPDF(files[0]);

//       const res = await fetch("http://localhost:5000/api/analyze", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ text }),
//       });

//       const result = await res.json();
      
//       // Navigate to dashboard with result (or save to localStorage as in your previous version)
//       localStorage.setItem("analysis", JSON.stringify(result));
//       navigate("/dashboard");
//     } catch (error) {
//       console.error("Analysis failed:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans">
//       {/* Navbar */}
//       <nav className="flex justify-between items-center px-8 py-4 bg-white border-b border-gray-100">
//         <div className="flex items-center gap-2">
//           <span className="text-2xl">🎓</span>
//           <span className="font-bold text-gray-800 text-lg">Smart Exam Prep Assistant</span>
//         </div>
//         <div className="flex items-center gap-6 text-gray-600 font-medium">
//           <a href="#" className="hover:text-black">Docs</a>
//           <div className="flex items-center gap-2 border-l pl-6">
//             <span>Account</span>
//             <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">👤</div>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="flex flex-col items-center pt-16 px-4">
//         <div className="bg-white rounded-3xl shadow-xl w-full max-w-2xl overflow-hidden border border-gray-100">
//           <div className="p-8 text-center">
//             <h1 className="text-2xl font-bold text-gray-800 mb-8">
//               📄 [ Papers Upload & Analysis ]
//             </h1>

//             {/* Upload Area */}
//             <div className="border-2 border-dashed border-blue-200 rounded-2xl bg-blue-50/30 p-10 relative">
//               <input
//                 type="file"
//                 multiple
//                 onChange={handleFileChange}
//                 className="absolute inset-0 opacity-0 cursor-pointer"
//               />
//               <div className="flex flex-col items-center">
//                 <div className="w-16 h-16 mb-4">
//                   <svg viewBox="0 0 24 24" fill="none" className="text-blue-500" stroke="currentColor" strokeWidth="1.5">
//                     <path d="M7 18H17M7 18C4.79086 18 3 16.2091 3 14C3 11.7909 4.79086 10 7 10C7.31154 10 7.61543 10.0354 7.90673 10.1032C8.4842 7.72731 10.6139 6 13.1538 6C16.4477 6 19.1154 8.66777 19.1154 11.9615C19.1154 12.313 19.085 12.6575 19.0267 12.9922C20.7303 13.5042 22 15.1018 22 17C22 19.2091 20.2091 21 18 21H7" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-700">Step 1: Upload Past Papers</h3>
//                 <p className="text-gray-500 text-sm mb-4">Drop your PDF or JPG exam papers here to begin analysis.</p>
//                 <p className="text-blue-600 font-medium">📁 [ Click to upload or drag files... ]</p>
//                 <p className="text-gray-400 text-xs mt-1">Add PDF, JPG, PNG up to 10MB</p>
//               </div>
//             </div>

//             {/* File List */}
//             {files.length > 0 && (
//               <div className="mt-6 space-y-2 text-left">
//                 {files.map((file, index) => (
//                   <div key={index} className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg">
//                     <div className="flex items-center gap-3">
//                       <span className="text-xl">{file.type.includes("pdf") ? "📄" : "🖼️"}</span>
//                       <div>
//                         <p className="text-sm font-medium text-gray-700 truncate w-48">{file.name}</p>
//                         <p className="text-xs text-gray-400">{(file.size / 1024 / 1024).toFixed(1)}MB - <span className="text-green-500">(Ready)</span></p>
//                       </div>
//                     </div>
//                     <button onClick={() => removeFile(index)} className="text-gray-400 hover:text-red-500 text-lg">✕</button>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* Action Button */}
//             <button
//               onClick={handleAnalyze}
//               disabled={files.length === 0 || loading}
//               className={`mt-8 w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-bold text-lg transition-all ${
//                 loading ? "bg-blue-400" : "bg-blue-900 hover:bg-blue-800"
//               }`}
//             >
//               {loading ? "Analyzing..." : "🚀 Analyze and Generate Dashboard"}
//               {!loading && (
//                 <div className="ml-4 w-12 h-2 bg-blue-700 rounded-full overflow-hidden">
//                   <div className="bg-blue-300 h-full w-1/3 animate-pulse"></div>
//                 </div>
//               )}
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Home;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { extractTextFromPDF } from "../utils/pdf";
import { 
  CloudUpload, 
  FileText, 
  Image as ImageIcon, 
  X, 
  Loader2, 
  ShieldCheck, 
  Target, 
  ChevronRight,
  FileSearch
} from "lucide-react";

function Home() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  // const handleAnalyze = async () => {
  //   if (files.length === 0) return;
  //   setLoading(true);

  //   try {
  //     // Process the first file
  //     const text = await extractTextFromPDF(files[0]);

  //     const res = await fetch("http://localhost:5000/api/analyze", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ text }),
  //     });

  //     const result = await res.json();
      
  //     // Save results + the original filename for dynamic dashboard titling
  //     localStorage.setItem("analysis", JSON.stringify({
  //       ...result,
  //       fileName: files[0].name 
  //     }));
      
  //     navigate("/dashboard");
  //   } catch (error) {
  //     console.error("Analysis failed:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
const handleAnalyze = async () => {
  if (files.length === 0) return;
  setLoading(true);

  try {
    // 1. Process all files in parallel
    const analysisPromises = files.map(async (file) => {
      const text = await extractTextFromPDF(file);
      const res = await fetch("http://localhost:5000/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      return await res.json();
    });

    const results = await Promise.all(analysisPromises);

    // 2. Merge logic: Combine results from multiple papers
    // We'll take the subject from the first file but merge the 'sortedTopics'
    const mergedResult = {
      ...results[0],
      fileName: files.length > 1 ? `${files.length} Papers Analyzed` : files[0].name,
      sortedTopics: mergeTopics(results.map(r => r.sortedTopics))
    };
    
    localStorage.setItem("analysis", JSON.stringify(mergedResult));
    navigate("/dashboard");
  } catch (error) {
    console.error("Multi-file analysis failed:", error);
  } finally {
    setLoading(false);
  }
};

// Helper function to aggregate counts for the same topics across different papers
const mergeTopics = (topicsArrays) => {
  const merged = {};
  topicsArrays.flat().forEach(({ topic, count }) => {
    const key = topic.toLowerCase();
    if (merged[key]) {
      merged[key].count += count;
    } else {
      merged[key] = { topic, count };
    }
  });
  return Object.values(merged).sort((a, b) => b.count - a.count);
};
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      {/* Unified Navbar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center shadow-lg shadow-blue-200">
              <Target className="text-white w-5 h-5" />
            </div>
            <span className="font-bold tracking-tight text-xl text-slate-800">
              ExamPulse<span className="text-blue-600">AI</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500 uppercase tracking-widest">
            {/* <a href="#" className="hover:text-blue-600 transition-colors">Documentation</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Methodology</a> */}
            <div className="h-4 w-[1px] bg-slate-200"></div>
            <div className="flex items-center gap-3 text-slate-800">
              {/* <span>Account</span> */}
              <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto pt-16 px-6 pb-24">
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider mb-6 border border-blue-100">
            {/* <Loader2 className="w-3 h-3 animate-spin" />
            System Online: v2.0.4 */}
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tight mb-4">
            Transform Papers into <span className="text-blue-600">Intelligence.</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto font-medium">
            Upload your past examination papers and let our AI engine map the high-yield topics, 
            frequency trends, and optimized study paths.
          </p>
        </header>

        {/* Upload Container */}
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
          <div className="p-10">
            {/* Dropzone */}
            <div className="relative group">
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer z-10"
              />
              <div className="border-2 border-dashed border-slate-200 rounded-[1.5rem] bg-slate-50/50 p-12 transition-all group-hover:border-blue-400 group-hover:bg-blue-50/30 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 mb-6 transition-transform group-hover:scale-110">
                  <CloudUpload strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Initialize Data Upload</h3>
                <p className="text-slate-500 text-sm mb-6 max-w-xs">
                  Drag and drop your PDF or High-Res images here to start the extraction process.
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                  Select Files <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* File Queue */}
            {/* {files.length > 0 && (
              <div className="mt-10 space-y-3">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <FileSearch className="w-3 h-3" /> Processing Queue
                </h4>
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:border-slate-300 transition-all shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                        {file.type.includes("pdf") ? <FileText size={18} /> : <ImageIcon size={18} />}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-700 truncate max-w-[200px] md:max-w-md">{file.name}</p>
                        <p className="text-[10px] font-black text-blue-500 uppercase">
                          {(file.size / 1024 / 1024).toFixed(2)} MB — Ready for analysis
                        </p>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFile(index)} 
                      className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )} */}
            {/* Add this inside your main container above the CTA button */}
{files.length > 1 && (
  <div className="mt-6 p-4 bg-blue-50/50 border border-blue-100 rounded-2xl flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="p-2 bg-blue-600 rounded-lg text-white">
        <Target size={16} />
      </div>
      <div>
        <p className="text-[10px] font-black text-blue-700 uppercase tracking-widest">Cross-Paper Correlation</p>
        <p className="text-sm font-bold text-slate-700">Merging {files.length} datasets for higher accuracy</p>
      </div>
    </div>
  </div>
)}

            {/* CTA Button */}
            <button
              onClick={handleAnalyze}
              disabled={files.length === 0 || loading}
              className={`mt-10 w-full relative overflow-hidden group py-5 rounded-2xl text-white font-black text-sm uppercase tracking-[0.2em] transition-all ${
                loading 
                ? "bg-slate-100 text-slate-400 cursor-not-allowed" 
                : "bg-slate-900 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200"
              }`}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Analyzing Dataset...
                  </>
                ) : (
                  <>
                    Begin Analysis Engine
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
              {loading && (
                <div className="absolute bottom-0 left-0 h-1 bg-blue-500 animate-[loading_2s_ease-in-out_infinite]" style={{ width: '100%' }}></div>
              )}
            </button>
          </div>
          
          {/* Footer Info
          <div className="bg-slate-50 border-t border-slate-100 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Encryption</span>
                  <span className="text-[10px] font-bold text-slate-600">AES-256 Bit</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Processing</span>
                  <span className="text-[10px] font-bold text-slate-600">OCR + GPT-4o</span>
                </div>
             </div>
             <p className="text-[10px] font-medium text-slate-400 italic">
               Supports high-resolution scans and digital PDF formats.
             </p>
          </div> */}
        </div>
      </main>
    </div>
  );
}

export default Home;