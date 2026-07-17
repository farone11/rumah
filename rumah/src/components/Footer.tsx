import { property } from '../property';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-gold/20 mt-16">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center gap-4">
          <h3 className="font-display text-3xl font-bold gold-text">{property.title}</h3>
          <div className="text-white/50 text-sm space-y-1">
            {property.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="w-24 h-px bg-gold/30 my-2" />
          <p className="text-white/40 text-xs uppercase tracking-widest">
            &copy; {year} {property.title}. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Designed by <span className="text-gold/70">FarOneCapital</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
