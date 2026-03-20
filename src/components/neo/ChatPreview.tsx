export function ChatPreview() {
  return (
    <div className="bg-black border-4 border-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
      <div className="bg-white/10 border-b-2 border-white/20 p-4 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="font-headline font-black text-xs uppercase tracking-widest opacity-70">
          NEO_KERNEL_v1.0.4
        </span>
      </div>
      <div className="p-6 font-mono text-sm space-y-6 min-h-[400px]">
        <div className="flex flex-col items-start">
          <span className="text-neo-tertiary-container font-black mb-1">SYSTEM_USR:</span>
          <div className="bg-white/10 p-3 border border-white/20 max-w-[85%]">
            INITIALIZE CHAT INTERFACE WITH RAG CAPABILITIES.
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-neo-ai-accent font-black mb-1">AI_CORE:</span>
          <div className="bg-neo-ai-accent/30 p-3 border-2 border-neo-ai-accent max-w-[85%] text-white">
            CORE INITIALIZED. VECTOR DATASET LOADED. AWAITING INSTRUCTION.
          </div>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-neo-tertiary-container font-black mb-1">SYSTEM_USR:</span>
          <div className="bg-white/10 p-3 border border-white/20 max-w-[85%]">
            DEPLOY TO PRODUCTION CLUSTER.
          </div>
        </div>
        <div className="pt-4 border-t border-white/20 animate-pulse">
          <span className="text-green-400 font-black italic">_PROCESSING_LOGIC...</span>
        </div>
      </div>
      <div className="p-4 bg-white/5 border-t-2 border-white/20">
        <div className="bg-black border-2 border-white p-3 flex justify-between items-center">
          <span className="opacity-50 font-mono">TYPE_COMMAND_HERE_</span>
          <span className="material-symbols-outlined text-neo-ai-accent">send</span>
        </div>
      </div>
    </div>
  );
}