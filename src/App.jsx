import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getGuides } from './data';
import { Terminal, Cpu, ChevronRight, Hash, Activity, Menu, X, ArrowUp } from 'lucide-react';

export default function App() {
  const [guides, setGuides] = useState([]);
  const [selected, setSelected] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const data = getGuides();
    setGuides(data);
    if (data.length > 0) setSelected(data[0]);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => setShowScrollTop(el.scrollTop > 300);
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });

  const handleSelect = (guide) => {
    setSelected(guide);
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-brand-dark overflow-hidden font-mono">

      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside className={`
        fixed md:relative z-30 md:z-auto
        w-72 md:w-80 h-full
        bg-brand-card border-r border-brand-border flex flex-col
        transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 border-b border-brand-border flex items-center gap-3">
          <Terminal className="text-blue-500 shrink-0" size={24} />
          <div className="min-w-0">
            <h1 className="text-white font-bold tracking-tighter text-lg uppercase truncate">IT-Administrator (IHK)</h1>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shrink-0"></span>
              <span className="text-[10px] text-green-500 uppercase font-bold">Terminal Online</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 custom-scrollbar space-y-4">
          {["Modul-01", "Modul-02", "Modul-03", "Modul-04"].map((modName) => (
            <div key={modName} className="space-y-1">
              <div className="flex items-center gap-2 px-2 py-2 text-slate-400 text-[13px] uppercase tracking-[0.15em] font-black">
                <Cpu size={12} /> {modName}
              </div>
              {guides.filter(g => g.folder.includes(modName)).map(guide => (
                <button
                  key={guide.id}
                  onClick={() => handleSelect(guide)}
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

        <div className="p-4 border-t border-brand-border flex justify-center">
          <a
            href="https://github.com/BozgunBer-2506"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[11px] text-slate-500 hover:text-blue-400 transition-colors"
          >
            <span className="font-bold">The_Bozgun</span>
            <span className="text-slate-700">@ GitHub</span>
          </a>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col bg-[#0d0d0f] min-w-0">
        <header className="h-14 border-b border-brand-border bg-brand-dark/80 backdrop-blur-md flex items-center justify-between px-4 md:px-8 shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            {/* Hamburger – only mobile */}
            <button
              className="md:hidden text-slate-400 hover:text-white mr-2"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={20} />
            </button>
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-500 min-w-0">
              <span className="shrink-0">root</span>
              <ChevronRight size={12} className="shrink-0" />
              <span className="text-blue-500 truncate">{selected?.folder}</span>
              <ChevronRight size={12} className="shrink-0 hidden sm:block" />
              <span className="text-slate-300 truncate hidden sm:block">{selected?.title}</span>
            </div>
          </div>
          <Activity size={18} className="text-slate-700 shrink-0" />
        </header>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-10">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-invert prose-blue max-w-none
              prose-h1:text-white prose-h1:text-4xl prose-h1:font-black prose-h1:tracking-tighter prose-h1:border-b prose-h1:border-white/10 prose-h1:pb-6
              prose-p:text-slate-400 prose-p:leading-relaxed
              prose-strong:text-blue-400 prose-strong:font-bold
              prose-code:bg-blue-500/10 prose-code:text-blue-400 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-black/40 prose-pre:border prose-pre:border-white/5 prose-pre:backdrop-blur-sm shadow-2xl">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {selected?.content || "# Daten werden geladen..."}
              </ReactMarkdown>
            </article>
            <footer className="mt-12 pt-8 border-t border-slate-800 text-[11px] text-slate-500 pb-12 leading-relaxed space-y-2">
              <p className="italic">
                * In der echten IHK-Prüfung werden <span className="text-slate-400 font-bold">40 Fragen</span> in <span className="text-slate-400 font-bold">20 Minuten</span> gestellt.
              </p>
              <p className="italic">
                Die Prüfungsfragen und -antworten stammen von <span className="text-blue-400/80">Hypercampus</span>; alle Urheberrechte liegen bei Hypercampus. Dieses Wiki dient rein privaten Lernzwecken.
              </p>
            </footer>
          </div>
        </div>
      </main>

      {/* SCROLL TO TOP */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 hover:bg-blue-600/40 transition-all shadow-lg"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
