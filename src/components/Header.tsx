import { Trophy } from "lucide-react";

const Header = () => {
  return (
    <header className="text-center py-12 px-4">
      {/* Logo/Brand Area */}
      <div className="flex items-center justify-center gap-3 mb-6 opacity-0 animate-fade-in">
        <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center shadow-gold animate-pulse-gold">
          <Trophy className="w-6 h-6 text-primary-foreground" />
        </div>
        <span className="text-xl font-bold text-foreground tracking-tight">
          TIPDANA
        </span>
      </div>

      {/* Main Title */}
      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 opacity-0 animate-fade-in"
        style={{ animationDelay: "100ms" }}
      >
        <span className="text-foreground">Top 4 Online Casinos </span>
        <span className="text-gradient-gold">Thailand 2026</span>
      </h1>

      {/* Decorative Line */}
      <div
        className="w-24 h-1 mx-auto rounded-full gradient-gold mb-6 opacity-0 animate-fade-in"
        style={{ animationDelay: "200ms" }}
      />
    </header>
  );
};

export default Header;
