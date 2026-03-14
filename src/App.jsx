import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getGuides } from './data';
import { Terminal, Cpu, ChevronRight, Hash, Activity } from 'lucide-react';

export default function App() {
  const [guides, setGuides] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const data = getGuides();
    setGuides(data);
    if (data.length > 0) setSelected(data[0]);
  }, []);

  return (
    <div className="flex h-screen bg-brand-dark overflow-hidden font-mono">
      {/* SIDEBAR */}
      <aside className="w-80 bg-brand-card border-r border-brand-border flex flex-col">
        <div className="p-6 border-b border-brand-border flex items-center gap-3">
          <Terminal className="text-blue-500" size={24} />
          <div>
            <h1 className="text-white font-bold tracking-tighter text-lg uppercase">IT-Administrator (IHK)</h1>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] text-green-500 uppercase font-bold">Terminal Online</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 custom-scrollbar space-y-4">
          {["Modul-01", "Modul-02", "Modul-03", "Modul-04"].map((modName) => (
            <div key={modName} className="space-y-1">
              <div className="flex items-center gap-2 px-2 py-2 text-slate-500 text-[10px] uppercase tracking-[0.2em] font-black">
                <Cpu size={12} /> {modName}
              </div>
              {guides.filter(g => g.folder.includes(modName)).map(guide => (
                <button
                  key={guide.id}
                  onClick={() => setSelected(guide)}
                  className={`w-full group flex items-center gap-3 p-2.5 rounded-md transition-all border ${
                    selected?.id === guide.id 
                    ? 'bg-blue-600/10 border-blue-500/50 text-blue-400' 
                    : 'border-transparent hover:bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  <Hash size={14} className={selected?.id === guide.id ? "text-blue-500" : "text-slate-600"} />
                  <span className="text-[13px] truncate">{guide.title.replace(/^\d+\./, '')}</span>
                </button>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col bg-[#0d0d0f]">
        <header className="h-14 border-b border-brand-border bg-brand-dark/80 backdrop-blur-md flex items-center justify-between px-8">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-500">
            <span>root</span>
            <ChevronRight size={12} />
            <span className="text-blue-500">{selected?.folder}</span>
            <ChevronRight size={12} />
            <span className="text-slate-300">{selected?.title}</span>
          </div>
          <Activity size={18} className="text-slate-700" />
        </header>

        <div className="flex-1 overflow-y-auto p-10">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-invert prose-blue max-w-none
              prose-h1:text-white prose-h1:text-4xl prose-h1:font-black prose-h1:tracking-tighter prose-h1:border-b prose-h1:border-white/10 prose-h1:pb-6
              prose-p:text-slate-400 prose-p:leading-relaxed
              prose-strong:text-blue-400 prose-strong:font-bold
              prose-code:bg-blue-500/10 prose-code:text-blue-400 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-black/40 prose-pre:border prose-pre:border-white/5 prose-pre:backdrop-blur-sm shadow-2xl">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {selected?.content || "# Veri Yükleniyor..."}
              </ReactMarkdown>
            </article>
            <footer className="mt-12 pt-8 border-t border-slate-800 text-[11px] text-slate-500 pb-12 leading-relaxed">
              <div className="flex items-start gap-2 italic">
                <span className="font-bold text-slate-400 text-xs">RECHTLICHER HINWEIS:</span>
                <p>
                  Die Inhalte der Prüfungssimulationen (Fragen/Antworten) stammen von
                  <span className="text-blue-400/80 mx-1">Hypercampus</span>.
                  Sämtliche Urheberrechte liegen bei Hypercampus. Dieses Wiki dient rein privaten Lernzwecken.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}