export function BadgeSunshine({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-shine items-center justify-center rounded-full border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#303030,55%,#000103)] bg-[length:400%_100%] px-3 py-0.5 text-xs font-medium text-neutral-400 transition-colors">
      {children}
    </div>
  );
}
