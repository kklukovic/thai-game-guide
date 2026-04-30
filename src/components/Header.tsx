import { Shield, CheckCircle2 } from "lucide-react";

const Header = () => {
  return (
    <header className="relative text-center pt-8 pb-10 md:pt-12 md:pb-14 px-4 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10 gradient-hero" aria-hidden />
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] -z-10 opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, hsl(38 90% 80% / 0.5) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Brand */}
      <div className="flex items-center justify-center gap-2.5 mb-7 opacity-0 animate-fade-in">
        <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center shadow-md">
          <Shield className="w-5 h-5 text-foreground" />
        </div>
        <span className="text-lg font-bold text-foreground tracking-[0.18em]">
          TIPDANA
        </span>
      </div>

      {/* Eyebrow */}
      <div
        className="inline-block mb-4 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 opacity-0 animate-fade-in"
        style={{ animationDelay: "60ms" }}
      >
        <span className="font-thai text-xs font-semibold text-secondary tracking-wide uppercase">
          Editor's Pick · 2026
        </span>
      </div>

      {/* Headline */}
      <h1
        className="font-thai text-[26px] sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.2] tracking-tight mb-4 text-foreground opacity-0 animate-fade-in max-w-3xl mx-auto"
        style={{ animationDelay: "120ms" }}
      >
        5 เว็บคาสิโนออนไลน์ที่เชื่อถือได้มากที่สุดในไทย 2026
      </h1>

      {/* Subheadline */}
      <p
        className="font-thai text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-7 leading-relaxed opacity-0 animate-fade-in"
        style={{ animationDelay: "200ms" }}
      >
        เจาะลึกเว็บตรง ไม่ผ่านเอเย่นต์ มั่นใจ 100% ตรวจสอบโดยพิม
      </p>

      {/* Trust Pill */}
      <div
        className="trust-pill opacity-0 animate-fade-in"
        style={{ animationDelay: "280ms" }}
      >
        <CheckCircle2 className="w-4 h-4 text-primary" />
        <span className="font-thai text-sm font-medium text-foreground">
          ตรวจสอบและยืนยันโดยพิมแล้ว
        </span>
      </div>
    </header>
  );
};

export default Header;
