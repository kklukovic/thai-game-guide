import { CheckCircle2 } from "lucide-react";

const Header = () => {
  return (
    <header className="relative overflow-hidden px-4 pb-10 pt-10 text-center md:pb-14 md:pt-14">
      <div className="absolute inset-0 -z-10 gradient-hero" aria-hidden />
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden />

      <div
        className="hero-eyebrow opacity-0 animate-fade-in"
        style={{ animationDelay: "60ms" }}
      >
        <span className="hero-eyebrow-dot" />
        <span>Editor's Pick · 2026</span>
      </div>

      <h1
        className="mx-auto mb-4 max-w-3xl font-thai text-[28px] font-bold leading-[1.22] tracking-[-0.025em] text-foreground opacity-0 animate-fade-in sm:text-3xl md:text-[40px] lg:text-[44px]"
        style={{ animationDelay: "120ms" }}
      >
        5 คาสิโนออนไลน์ที่เชื่อถือได้มากที่สุดในไทย 2026
      </h1>

      <p
        className="mx-auto mb-7 max-w-xl font-thai text-[15px] leading-7 text-muted-foreground opacity-0 animate-fade-in md:text-[17px]"
        style={{ animationDelay: "200ms" }}
      >
        เจาะลึกเว็บตรง ไม่ผ่านเอเย่นต์ มั่นใจ 100% ตรวจสอบโดยพิม
      </p>

      <div
        className="trust-pill opacity-0 animate-fade-in"
        style={{ animationDelay: "280ms" }}
      >
        <span className="trust-icon">
          <CheckCircle2 className="h-4 w-4" />
        </span>
        <span className="font-thai text-sm font-medium text-foreground">
          ตรวจสอบและยืนยันโดยพิมแล้ว
        </span>
      </div>
    </header>
  );
};

export default Header;
