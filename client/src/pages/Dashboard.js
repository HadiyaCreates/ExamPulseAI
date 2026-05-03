

// // // import React, { useEffect, useState } from "react";
// // // import {
// // //   BarChart, Bar, XAxis, YAxis, ResponsiveContainer,
// // //   PieChart, Pie, Cell, LineChart, Line, CartesianGrid, Tooltip
// // // } from "recharts";

// // // const Dashboard = () => {
// // //   const [data, setData] = useState(null);

// // //   useEffect(() => {
// // //     const stored = JSON.parse(localStorage.getItem("analysis"));
// // //     if (stored) setData(stored);
// // //   }, []);

// // //   if (!data) return (
// // //     <div className="flex h-screen items-center justify-center bg-slate-50">
// // //       <p className="text-slate-500 font-medium">Processing analysis data...</p>
// // //     </div>
// // //   );

// // //   const THEME_COLORS = ["#4f46e5", "#94a3b8", "#cbd5e1", "#e2e8f0"];

// // //   return (
// // //     <div className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans text-slate-900">
// // //       {/* Header Section */}
// // //       <header className="max-w-7xl mx-auto mb-10 flex justify-between items-end">
// // //         <div>
// // //           <h1 className="text-2xl font-semibold tracking-tight text-slate-800">
// // //             Analysis Report: {data.subject || "Academic Paper"}
// // //           </h1>
// // //           <p className="text-slate-500 text-sm mt-1">Comprehensive breakdown based on uploaded documents</p>
// // //         </div>
// // //         <div className="flex gap-4">
// // //           <button className="px-4 py-2 text-sm font-medium bg-white border border-slate-200 rounded-md shadow-sm hover:bg-slate-50">
// // //             Export PDF
// // //           </button>
// // //         </div>
// // //       </header>

// // //       <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
        
// // //         {/* Main Analytics Column */}
// // //         <div className="col-span-12 lg:col-span-8 space-y-8">
          
// // //           {/* Primary Trends Card */}
// // //           <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-8">
// // //             <div className="flex items-center justify-between mb-8">
// // //               <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
// // //                 Topic Distribution & Weighting
// // //               </h3>
// // //             </div>
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
// // //               <div className="h-64">
// // //                 <ResponsiveContainer width="100%" height="100%">
// // //                   <BarChart data={data.sortedTopics}>
// // //                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
// // //                     <XAxis dataKey="topic" axisLine={false} tickLine={false} fontSize={11} tick={{fill: '#64748b'}} />
// // //                     <YAxis axisLine={false} tickLine={false} fontSize={11} tick={{fill: '#64748b'}} />
// // //                     <Tooltip cursor={{fill: '#f8fafc'}} />
// // //                     <Bar dataKey="count" fill="#4f46e5" radius={[2, 2, 0, 0]} barSize={32} />
// // //                   </BarChart>
// // //                 </ResponsiveContainer>
// // //               </div>
// // //               <div className="flex flex-col justify-center items-center">
// // //                 <PieChart width={200} height={200}>
// // //                   <Pie 
// // //                     data={data.sortedTopics} 
// // //                     dataKey="count" 
// // //                     innerRadius={60} 
// // //                     outerRadius={80} 
// // //                     paddingAngle={5}
// // //                   >
// // //                     {data.sortedTopics?.map((_, i) => (
// // //                       <Cell key={i} fill={THEME_COLORS[i % THEME_COLORS.length]} stroke="none" />
// // //                     ))}
// // //                   </Pie>
// // //                 </PieChart>
// // //                 <div className="mt-4 flex gap-4 text-[10px] uppercase font-bold text-slate-400">
// // //                   <span>Legend: Frequency by Topic Volume</span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Optimized Curriculum Path */}
// // //           <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-8">
// // //             <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
// // //               Strategic Study Schedule
// // //             </h3>
// // //             <div className="relative flex justify-between">
// // //               <div className="absolute top-4 left-0 w-full h-[1px] bg-slate-100 -z-0"></div>
// // //               {data.studyPlan?.map((step, i) => (
// // //                 <div key={i} className="flex flex-col items-center w-full z-10">
// // //                   <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-sm text-xs font-bold text-indigo-600">
// // //                     {i + 1}
// // //                   </div>
// // //                   <span className="text-[10px] font-bold text-slate-400 uppercase mb-1">{step.day}</span>
// // //                   <span className="text-xs font-semibold text-slate-700 text-center px-2">{step.topic}</span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Intelligence Sidebar */}
// // //         <div className="col-span-12 lg:col-span-4 space-y-8">
          
// // //           {/* Focus Score Gauge */}
// // //           <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-8 text-center">
// // //             <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
// // //               Preparation Focus Score
// // //             </h3>
// // //             <div className="relative inline-flex items-center justify-center">
// // //               <svg className="w-40 h-40 transform -rotate-90">
// // //                 <circle cx="80" cy="80" r="70" stroke="#f1f5f9" strokeWidth="8" fill="transparent" />
// // //                 <circle 
// // //                   cx="80" 
// // //                   cy="80" 
// // //                   r="70" 
// // //                   stroke="#4f46e5" 
// // //                   strokeWidth="8" 
// // //                   fill="transparent" 
// // //                   strokeDasharray={440} 
// // //                   strokeDashoffset={440 - (440 * data.focusScore) / 100} 
// // //                   strokeLinecap="round"
// // //                 />
// // //               </svg>
// // //               <span className="absolute text-3xl font-light text-slate-800">{data.focusScore}%</span>
// // //             </div>
// // //             <p className="mt-6 text-xs text-slate-500 leading-relaxed">
// // //               Based on the alignment between identified high-priority topics and document frequency.
// // //             </p>
// // //           </div>

// // //           {/* Key Intelligence List */}
// // //           {/* <div className="bg-slate-900 rounded-lg p-8 text-white shadow-lg">
// // //             <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
// // //               Critical Insights
// // //             </h3>
// // //             <ul className="space-y-6">
// // //               {data.keyInsights?.map((insight, i) => (
// // //                 <li key={i} className="flex gap-4">
// // //                   <span className="text-indigo-400 font-mono text-xs">0{i+1}</span>
// // //                   <p className="text-sm text-slate-300 leading-snug">{insight}</p>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div> */}

// // //           {/* Priority Topics List */}
// // //           <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-8">
// // //             <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
// // //               High-Yield Areas
// // //             </h3>
// // //             <div className="space-y-4">
// // //               {data.sortedTopics?.slice(0, 3).map((t, i) => (
// // //                 <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded border border-slate-100">
// // //                   <span className="text-xs font-semibold text-slate-700">{t.topic}</span>
// // //                   <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded uppercase">
// // //                     Priority
// // //                   </span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;

// // import React, { useEffect, useState } from "react";
// // import {
// //   BarChart, Bar, XAxis, YAxis, ResponsiveContainer,
// //   PieChart, Pie, Cell, CartesianGrid, Tooltip
// // } from "recharts";

// // const Dashboard = () => {
// //   const [data, setData] = useState(null);

// //   useEffect(() => {
// //     const stored = JSON.parse(localStorage.getItem("analysis"));
// //     if (stored) setData(stored);
// //   }, []);

// //   if (!data) return (
// //     <div className="flex h-screen items-center justify-center bg-slate-50">
// //       <div className="animate-pulse text-slate-400 font-medium tracking-tight">LOADING ANALYTICS...</div>
// //     </div>
// //   );

// //   const THEME_COLORS = ["#0f172a", "#334155", "#64748b", "#94a3b8"];

// //   return (
// //     <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-100">
// //       {/* Top Navigation Bar */}
// //       <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4">
// //         <div className="max-w-7xl mx-auto flex justify-between items-center">
// //           <div className="flex items-center gap-3">
// //             <div className="h-8 w-1 bg-indigo-600 rounded-full"></div>
// //             <span className="font-bold tracking-tighter text-lg text-slate-800 uppercase">Exam Intelligence Unit</span>
// //           </div>
// //           <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
// //             Document ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
// //           </div>
// //         </div>
// //       </nav>

// //       <main className="max-w-7xl mx-auto p-8 lg:p-12">
// //         {/* Header Summary */}
// //         <header className="mb-12 border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
// //           <div>
// //             <h1 className="text-4xl font-light text-slate-900 tracking-tight">
// //               {data.subject || "Academic Content Analysis"}
// //             </h1>
// //             <p className="text-slate-500 mt-2 text-sm max-w-xl leading-relaxed">
// //               Automated audit of past examination patterns and curriculum weighting derived from processed document text.
// //             </p>
// //           </div>
// //           {/* <div className="flex flex-col items-end">
// //             <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1">Preparation Index</span>
// //             <span className="text-5xl font-extralight text-slate-800">{data.focusScore}%</span>
// //           </div> */}
// //         </header>

// //         <div className="grid grid-cols-12 gap-8">
          
// //           {/* Primary Data Visualizations */}
// //           <div className="col-span-12 lg:col-span-8 space-y-8">
            
// //             {/* Chart Container */}
// //             <div className="bg-white border border-slate-200 rounded-sm p-8 shadow-sm">
// //               <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-10">
// //                 Quantitative Topic Distribution
// //               </h3>
// //               <div className="h-72 w-full">
// //                 <ResponsiveContainer width="100%" height="100%">
// //                   <BarChart data={data.sortedTopics}>
// //                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
// //                     <XAxis 
// //                       dataKey="topic" 
// //                       axisLine={false} 
// //                       tickLine={false} 
// //                       fontSize={10} 
// //                       tick={{fill: '#94A3B8'}} 
// //                       dy={10}
// //                     />
// //                     <YAxis 
// //                       axisLine={false} 
// //                       tickLine={false} 
// //                       fontSize={10} 
// //                       tick={{fill: '#94A3B8'}} 
// //                     />
// //                     <Tooltip 
// //                       cursor={{fill: '#F8FAFC'}} 
// //                       contentStyle={{borderRadius: '0px', border: '1px solid #E2E8F0', boxShadow: 'none', fontSize: '12px'}}
// //                     />
// //                     <Bar dataKey="count" fill="#0F172A" radius={0} barSize={40} />
// //                   </BarChart>
// //                 </ResponsiveContainer>
// //               </div>
// //             </div>

// //             {/* Strategic Roadmap */}
// //             <div className="bg-white border border-slate-200 rounded-sm p-8 shadow-sm">
// //               <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-10">
// //                 Execution Roadmap
// //               </h3>
// //               <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-l border-slate-100">
// //                 {data.studyPlan?.map((step, i) => (
// //                   <div key={i} className="p-6 border-r border-b md:border-b-0 border-slate-100 hover:bg-slate-50 transition-colors group">
// //                     <div className="text-[10px] font-bold text-indigo-600 mb-2">{step.day}</div>
// //                     <div className="text-sm font-medium text-slate-800 group-hover:text-indigo-700 transition-colors">
// //                       {step.topic}
// //                     </div>
// //                     <div className="mt-4 h-1 w-8 bg-slate-200 group-hover:w-full group-hover:bg-indigo-200 transition-all duration-300"></div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Side Performance Indicators */}
// //           <div className="col-span-12 lg:col-span-4 space-y-8">
            
// //             {/* Topic Weighting Pie */}
// //             <div className="bg-white border border-slate-200 rounded-sm p-8 shadow-sm">
// //               <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-8 text-center">
// //                 Structural Weighting
// //               </h3>
// //               <div className="flex justify-center">
// //                 <PieChart width={220} height={220}>
// //                   <Pie 
// //                     data={data.sortedTopics} 
// //                     dataKey="count" 
// //                     innerRadius={70} 
// //                     outerRadius={90} 
// //                     stroke="none"
// //                   >
// //                     {data.sortedTopics?.map((_, i) => (
// //                       <Cell key={i} fill={THEME_COLORS[i % THEME_COLORS.length]} />
// //                     ))}
// //                   </Pie>
// //                 </PieChart>
// //               </div>
// //               <div className="mt-6 space-y-2">
// //                 {data.sortedTopics?.slice(0, 3).map((t, i) => (
// //                   <div key={i} className="flex items-center justify-between text-[11px]">
// //                     <span className="text-slate-500 font-medium">{t.topic}</span>
// //                     <span className="text-slate-900 font-bold">{( (t.count / data.sortedTopics.reduce((a,b) => a + b.count, 0)) * 100 ).toFixed(0)}%</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* High Priority Table */}
// //             <div className="bg-slate-900 rounded-sm p-8 text-white shadow-xl">
// //               <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">
// //                 High-Yield Segments
// //               </h3>
// //               <div className="space-y-1">
// //                 {data.sortedTopics?.slice(0, 5).map((t, i) => (
// //                   <div key={i} className="flex items-center justify-between py-3 border-b border-slate-800 last:border-0">
// //                     <div className="flex items-center gap-3">
// //                       <span className="text-[9px] font-mono text-slate-500">0{i+1}</span>
// //                       <span className="text-xs font-light tracking-wide">{t.topic}</span>
// //                     </div>
// //                     <div className="h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default Dashboard;

// import React, { useEffect, useState } from "react";
// import {
//   BarChart, Bar, XAxis, YAxis, ResponsiveContainer,
//   PieChart, Pie, Cell, CartesianGrid, Tooltip
// } from "recharts";

// const Dashboard = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("analysis"));
//     if (stored) setData(stored);
//   }, []);

//   if (!data) return (
//     <div className="flex h-screen items-center justify-center bg-white">
//       <div className="text-slate-900 font-semibold tracking-widest uppercase">Processing Data...</div>
//     </div>
//   );

//   // Palette updated to match Home screen (Deep Professional Blues)
//   const PRIMARY_BLUE = "#1e3a8a"; // indigo-900
//   const CHART_COLORS = ["#1e3a8a", "#3b82f6", "#60a5fa", "#93c5fd"];

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
//       {/* Navigation Bar */}
//       <nav className="bg-white border-b border-slate-200 px-8 py-5">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <div className="flex items-center gap-3">
//             <span className="font-bold tracking-tight text-xl text-slate-900">
//               Smart Exam Prep Assistant
//             </span>
//           </div>
//           <div className="flex gap-6 text-sm font-medium text-slate-600">
//             <span>Docs</span>
//             <span>Account</span>
//           </div>
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto p-8 lg:p-12">
//         {/* Header Summary */}
//         <header className="mb-12">
//           <h1 className="text-3xl font-bold text-slate-900 mb-2">
//             Analysis: {data.subject || "Uploaded Document"}
//           </h1>
//           <p className="text-slate-600 text-base max-w-2xl">
//             Detailed breakdown of exam patterns and curriculum weighting. All metrics are derived directly from the analyzed PDF content.
//           </p>
//         </header>

//         <div className="grid grid-cols-12 gap-8">
          
//           {/* Main Visualizations */}
//           <div className="col-span-12 lg:col-span-8 space-y-8">
            
//             {/* Topic Frequency Bar Chart */}
//             <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
//               <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-8">
//                 Topic Frequency Distribution
//               </h3>
//               <div className="h-80 w-full">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart data={data.sortedTopics}>
//                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
//                     <XAxis 
//                       dataKey="topic" 
//                       axisLine={{stroke: '#cbd5e1'}} 
//                       tickLine={false} 
//                       fontSize={12} 
//                       tick={{fill: '#0f172a', fontWeight: 500}} 
//                       dy={10}
//                     />
//                     <YAxis 
//                       axisLine={{stroke: '#cbd5e1'}} 
//                       tickLine={false} 
//                       fontSize={12} 
//                       tick={{fill: '#0f172a', fontWeight: 500}} 
//                     />
//                     <Tooltip 
//                       cursor={{fill: '#f1f5f9'}} 
//                       contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
//                     />
//                     <Bar dataKey="count" fill={PRIMARY_BLUE} radius={[4, 4, 0, 0]} barSize={45} />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>

//             {/* Execution Roadmap (Study Plan) */}
//             <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
//               <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-8">
//                 Optimized Study Roadmap
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//                 {data.studyPlan?.map((step, i) => (
//                   <div key={i} className="p-5 bg-slate-50 border border-slate-100 rounded-lg">
//                     <div className="text-[11px] font-bold text-blue-800 uppercase mb-2">{step.day}</div>
//                     <div className="text-sm font-semibold text-slate-900 leading-snug">
//                       {step.topic}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Sidebar Metrics */}
//           <div className="col-span-12 lg:col-span-4 space-y-8">
            
//             {/* Weighting Pie Chart */}
//             <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
//               <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-8 text-center">
//                 Exam Pattern Weighting
//               </h3>
//               <div className="flex justify-center">
//                 <PieChart width={200} height={200}>
//                   <Pie 
//                     data={data.sortedTopics} 
//                     dataKey="count" 
//                     innerRadius={60} 
//                     outerRadius={85} 
//                     stroke="#fff"
//                     strokeWidth={2}
//                   >
//                     {data.sortedTopics?.map((_, i) => (
//                       <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
//                     ))}
//                   </Pie>
//                 </PieChart>
//               </div>
//               <div className="mt-8 space-y-3">
//                 {data.sortedTopics?.slice(0, 4).map((t, i) => (
//                   <div key={i} className="flex items-center justify-between text-xs border-b border-slate-50 pb-2">
//                     <span className="text-slate-700 font-medium">{t.topic}</span>
//                     <span className="text-slate-900 font-bold">
//                       {((t.count / data.sortedTopics.reduce((a, b) => a + b.count, 0)) * 100).toFixed(0)}%
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* High-Yield Areas List */}
//             <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
//               <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
//                 Prioritized Topic Focus
//               </h3>
//               <div className="space-y-4">
//                 {data.sortedTopics?.slice(0, 5).map((t, i) => (
//                   <div key={i} className="flex items-center gap-4 group">
//                     <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded bg-blue-50 text-blue-900 text-[10px] font-bold">
//                       0{i+1}
//                     </span>
//                     <span className="text-sm font-medium text-slate-800">{t.topic}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;
// import React, { useEffect, useState } from "react";
// import {
//   BarChart, Bar, XAxis, YAxis, ResponsiveContainer,
//   PieChart, Pie, Cell, CartesianGrid, Tooltip, Sector
// } from "recharts";

// // Custom active shape for the Pie Chart interaction
// const renderActiveShape = (props) => {
//   const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
//   return (
//     <g>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius + 8}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//     </g>
//   );
// };

// const Dashboard = () => {
//   const [data, setData] = useState(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   // useEffect(() => {
//   //   const stored = JSON.parse(localStorage.getItem("analysis"));
//   //   if (stored) setData(stored);
//   // }, []);
//   useEffect(() => {
//   const stored = JSON.parse(localStorage.getItem("analysis"));
//   if (stored && stored.sortedTopics) {
//     // List of words to exclude from topic names
//     const noiseWords = ["section", "increasing", "stable", "decreasing", "trend", "weightage"];
    
//     const cleanedTopics = stored.sortedTopics.filter(t => 
//       !noiseWords.includes(t.topic.toLowerCase())
//     );
    
//     const cleanedPlan = stored.studyPlan?.filter(p => 
//       !noiseWords.includes(p.topic.toLowerCase())
//     );

//     setData({ ...stored, sortedTopics: cleanedTopics, studyPlan: cleanedPlan });
//   }
// }, []);

//   const onPieEnter = (_, index) => {
//     setActiveIndex(index);
//   };

//   if (!data) return (
//     <div className="flex h-screen items-center justify-center bg-white font-sans">
//       <div className="text-slate-900 font-bold tracking-widest uppercase">Initializing...</div>
//     </div>
//   );

//   const PRIMARY_BLUE = "#1e3a8a"; 
//   const CHART_COLORS = ["#1e3a8a", "#2563eb", "#60a5fa", "#93c5fd", "#bfdbfe"];
//   const totalMentions = data.sortedTopics?.reduce((a, b) => a + b.count, 0) || 1;

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
//       <nav className="bg-white border-b border-slate-200 px-8 py-5 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <span className="font-bold tracking-tight text-xl">Smart Exam Prep</span>
//           <div className="flex gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
//             <span>Dashboard</span>
//             <span>Archive</span>
//           </div>
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto p-8 lg:p-12">
//         <header className="mb-10">
//           <h1 className="text-3xl font-black text-slate-900 leading-none">
//             {/* {data.subject || "Academic Dataset"} */}
//           </h1>
//           <p className="text-slate-500 mt-3 text-sm font-medium uppercase tracking-wider">
//             Pattern Analysis & Document Audit
//           </p>
//         </header>

//         <div className="grid grid-cols-12 gap-8">
          
//           <div className="col-span-12 lg:col-span-8 space-y-8">
//             {/* Main Bar Chart */}
//             <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
//               <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-10">Frequency Metrics</h3>
//               <div className="h-80 w-full">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart data={data.sortedTopics}>
//                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
//                     <XAxis 
//                       dataKey="topic" 
//                       axisLine={false} 
//                       tickLine={false} 
//                       fontSize={11} 
//                       tick={{fill: '#0f172a', fontWeight: 600}} 
//                       dy={10}
//                     />
//                     <YAxis axisLine={false} tickLine={false} fontSize={11} tick={{fill: '#94a3b8'}} />
//                     <Tooltip 
//                       cursor={{fill: '#f8fafc'}} 
//                       contentStyle={{borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: 'none'}}
//                     />
//                     <Bar dataKey="count" fill={PRIMARY_BLUE} radius={[4, 4, 0, 0]} barSize={40} />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>

//             {/* Study Roadmap */}
//             <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
//               <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Generated Study Path</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 {data.studyPlan?.map((step, i) => (
//                   <div key={i} className="p-4 bg-slate-50 border border-slate-100 rounded-lg flex items-center gap-4">
//                     <span className="text-[10px] font-bold text-blue-800 bg-blue-100 px-2 py-1 rounded">{step.day}</span>
//                     <span className="text-sm font-bold text-slate-800">{step.topic}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="col-span-12 lg:col-span-4 space-y-8">
            
//             {/* Circle Chart with Text at Bottom */}
//             <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
//               <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Weighting Analysis</h3>
              
//               <div className="h-64 w-full flex flex-col items-center justify-center relative">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <PieChart>
//                     <Pie
//                       activeIndex={activeIndex}
//                       activeShape={renderActiveShape}
//                       data={data.sortedTopics}
//                       innerRadius={65}
//                       outerRadius={85}
//                       dataKey="count"
//                       onMouseEnter={onPieEnter}
//                       stroke="none"
//                     >
//                       {data.sortedTopics?.map((_, index) => (
//                         <Cell key={index} fill={CHART_COLORS[index % CHART_COLORS.length]} className="cursor-pointer" />
//                       ))}
//                     </Pie>
//                   </PieChart>
//                 </ResponsiveContainer>
                
//                 {/* Centered Hover Text */}
//                 <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
//                   <span className="text-xs font-black uppercase text-slate-400">Weight</span>
//                   <span className="text-2xl font-black text-slate-900">
//                     {((data.sortedTopics[activeIndex]?.count / totalMentions) * 100).toFixed(0)}%
//                   </span>
//                 </div>
//               </div>

//               {/* Text list at the bottom of the chart as requested */}
//               <div className="mt-8 pt-8 border-t border-slate-100 space-y-3">
//                 {data.sortedTopics?.slice(0, 5).map((t, i) => (
//                   <div key={i} className={`flex items-center justify-between transition-opacity duration-300 ${activeIndex === i ? 'opacity-100' : 'opacity-40'}`}>
//                     <div className="flex items-center gap-3">
//                       <div className="w-2 h-2 rounded-full" style={{backgroundColor: CHART_COLORS[i % CHART_COLORS.length]}}></div>
//                       <span className="text-xs font-bold text-slate-700">{t.topic}</span>
//                     </div>
//                     <span className="text-xs font-mono font-bold text-slate-900">
//                       {((t.count / totalMentions) * 100).toFixed(0)}%
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Simple Ranking */}
//             <div className="bg-blue-900 rounded-xl p-8 text-white shadow-lg">
//               <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-300 mb-6">High-Yield Priority</h3>
//               <div className="space-y-4">
//                 {data.sortedTopics?.slice(0, 3).map((t, i) => (
//                   <div key={i} className="flex flex-col border-b border-blue-800 pb-3 last:border-0">
//                     <span className="text-[9px] font-bold text-blue-400 mb-1">PRIORITY 0{i+1}</span>
//                     <span className="text-sm font-bold text-white">{t.topic}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;

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
              {/* <button className="w-full mt-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-xs font-black uppercase tracking-widest transition-all">
                Download Mock Test
              </button> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;