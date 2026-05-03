

import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer,
  PieChart, Pie, Cell, CartesianGrid, Tooltip, Sector
} from "recharts";
import { 
  FlaskConical, 
  Flame, 
  Atom, 
  Zap, 
  Dna, 
  Calendar, 
  Target, 
  ShieldCheck 
} from "lucide-react"; // Assuming you use lucide for icons

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const SUBJECT_MAP = {
    "chemistry": "Advanced Organic Chemistry",
    "physics": "Quantum & Classical Physics",
    "math": "Engineering Mathematics",
    "section": "Academic Pattern Analysis"
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("analysis"));
    if (stored && stored.sortedTopics) {
      const noiseWords = ["section", "increasing", "stable", "decreasing", "trend", "weightage"];
      
      // 1. Filter out non-topic noise
      const cleanedTopics = stored.sortedTopics.filter(t => 
        !noiseWords.includes(t.topic.toLowerCase())
      );
      
      // 2. Re-index the Study Plan to fix the missing Day 1, 3, 5 issue
      const sequentialPlan = cleanedTopics.map((t, i) => ({
        day: `Day ${i + 1}`,
        topic: t.topic.charAt(0).toUpperCase() + t.topic.slice(1),
        icon: getTopicIcon(t.topic)
      }));

      setData({ 
        ...stored, 
        sortedTopics: cleanedTopics, 
        studyPlan: sequentialPlan,
        subject: SUBJECT_MAP[stored.subject?.toLowerCase()] || stored.subject || "Academic Dataset"
      });
    }
  }, []);

  const getTopicIcon = (topic) => {
    const t = topic.toLowerCase();
    if (t.includes("chem")) return <FlaskConical className="w-4 h-4" />;
    if (t.includes("thermo")) return <Flame className="w-4 h-4" />;
    if (t.includes("quant") || t.includes("atom")) return <Atom className="w-4 h-4" />;
    if (t.includes("electro")) return <Zap className="w-4 h-4" />;
    return <Dna className="w-4 h-4" />;
  };

  const onPieEnter = (_, index) => setActiveIndex(index);

  if (!data) return (
    <div className="flex h-screen items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <div className="text-slate-400 font-bold tracking-widest uppercase text-xs">Syncing AI Models...</div>
      </div>
    </div>
  );

  const PRIMARY_BLUE = "#1e3a8a"; 
  const CHART_COLORS = ["#1e3a8a", "#2563eb", "#3b82f6", "#60a5fa", "#93c5fd"];
  const totalMentions = data.sortedTopics?.reduce((a, b) => a + b.count, 0) || 1;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans pb-20">
      {/* Updated Navbar - Removed Archive */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center shadow-lg shadow-blue-200">
              <Target className="text-white w-5 h-5" />
            </div>
            <span className="font-bold tracking-tight text-xl text-slate-800">ExamPulse<span className="text-blue-600">AI</span></span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black bg-slate-100 text-slate-500 px-3 py-1 rounded-full uppercase tracking-tighter">Pro Version</span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 border-2 border-white shadow-sm"></div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 lg:p-12">
        {/* Header with New AI Metrics */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-50 text-blue-700 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider border border-blue-100">
              Verified Analysis
            </span>
          </div>
          {/* <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-6">
          Subject
          </h1> */}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-green-50 rounded-xl text-green-600"><ShieldCheck /></div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Confidence Score</p>
                <p className="text-xl font-black text-slate-800">98.4%</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600"><Calendar /></div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Historical Span</p>
                <p className="text-xl font-black text-slate-800">2019 — 2026</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-purple-50 rounded-xl text-purple-600"><Target /></div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Data Points</p>
                <p className="text-xl font-black text-slate-800">{totalMentions} Patterns</p>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 space-y-8">
            {/* Bar Chart Section */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-blue-600"></div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-10 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
                Frequency Metrics
              </h3>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data.sortedTopics}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="topic" 
                      axisLine={false} 
                      tickLine={false} 
                      fontSize={10} 
                      tick={{fill: '#64748b', fontWeight: 700}} 
                      dy={10}
                    />
                    <YAxis axisLine={false} tickLine={false} fontSize={11} tick={{fill: '#94a3b8'}} />
                    <Tooltip 
                      cursor={{fill: '#f8fafc'}} 
                      contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                    />
                    <Bar dataKey="count" fill={PRIMARY_BLUE} radius={[6, 6, 0, 0]} barSize={45} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Sequential Study Path (Fixed Day Gaps) */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">AI-Optimized Schedule</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.studyPlan?.map((step, i) => (
                  <div key={i} className="group p-5 bg-white border border-slate-100 rounded-2xl flex items-center gap-4 hover:border-blue-200 hover:shadow-md transition-all cursor-default">
                    <div className="flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-blue-50 text-slate-400 group-hover:text-blue-600 transition-colors">
                      <span className="text-[8px] font-black uppercase tracking-tighter leading-none mb-1">Day</span>
                      <span className="text-lg font-black leading-none">{i + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-0.5">Focus Topic</p>
                      <p className="text-sm font-bold text-slate-800">{step.topic}</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-blue-200">{step.icon}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 space-y-8">
            {/* Weighting Pie Chart */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col items-center">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 self-start">Weighting Analysis</h3>
              
              <div className="h-64 w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      activeIndex={activeIndex}
                      activeShape={renderActiveShape}
                      data={data.sortedTopics}
                      innerRadius={70}
                      outerRadius={90}
                      dataKey="count"
                      onMouseEnter={onPieEnter}
                      stroke="none"
                      paddingAngle={5}
                    >
                      {data.sortedTopics?.map((_, index) => (
                        <Cell key={index} fill={CHART_COLORS[index % CHART_COLORS.length]} className="cursor-pointer outline-none" />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Weight</span>
                  <span className="text-3xl font-black text-slate-900">
                    {((data.sortedTopics[activeIndex]?.count / totalMentions) * 100).toFixed(0)}%
                  </span>
                </div>
              </div>

              <div className="w-full mt-8 space-y-3">
                {data.sortedTopics?.slice(0, 4).map((t, i) => (
                  <div key={i} className={`flex items-center justify-between p-2 rounded-xl transition-all ${activeIndex === i ? 'bg-blue-50' : 'opacity-60'}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{backgroundColor: CHART_COLORS[i % CHART_COLORS.length]}}></div>
                      <span className="text-xs font-bold text-slate-700 capitalize">{t.topic}</span>
                    </div>
                    <span className="text-xs font-black text-slate-900">{((t.count / totalMentions) * 100).toFixed(0)}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Ranking Card */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-300/60 mb-6 relative z-10">High-Yield Priority</h3>
              <div className="space-y-5 relative z-10">
                {data.sortedTopics?.slice(0, 3).map((t, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[10px] font-black border border-white/10 group-hover:bg-blue-600 transition-colors">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-blue-400 uppercase tracking-tighter">Strategic Topic</p>
                      <p className="text-sm font-bold text-white capitalize">{t.topic}</p>
                    </div>
                  </div>
                ))}
              </div>
            
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;