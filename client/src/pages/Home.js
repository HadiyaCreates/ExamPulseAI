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
  FileSearch,
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

   
      const mergedResult = {
        ...results[0],
        fileName:
          files.length > 1 ? `${files.length} Papers Analyzed` : files[0].name,
        sortedTopics: mergeTopics(results.map((r) => r.sortedTopics)),
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
            Transform Papers into{" "}
            <span className="text-blue-600">Intelligence.</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto font-medium">
            Upload your past examination papers and let our AI engine map the
            high-yield topics, frequency trends, and optimized study paths.
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
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Initialize Data Upload
                </h3>
                <p className="text-slate-500 text-sm mb-6 max-w-xs">
                  Drag and drop your PDF or High-Res images here to start the
                  extraction process.
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                  Select Files <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </div>

           
            {files.length > 1 && (
              <div className="mt-6 p-4 bg-blue-50/50 border border-blue-100 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-600 rounded-lg text-white">
                    <Target size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-blue-700 uppercase tracking-widest">
                      Cross-Paper Correlation
                    </p>
                    <p className="text-sm font-bold text-slate-700">
                      Merging {files.length} datasets for higher accuracy
                    </p>
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
                <div
                  className="absolute bottom-0 left-0 h-1 bg-blue-500 animate-[loading_2s_ease-in-out_infinite]"
                  style={{ width: "100%" }}
                ></div>
              )}
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Home;
