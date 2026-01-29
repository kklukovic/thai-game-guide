import { Shield, CheckCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="text-center py-8 md:py-12 px-4">
      {/* Logo/Brand Area */}
      <div className="flex items-center justify-center gap-3 mb-6 opacity-0 animate-fade-in">
        <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center shadow-lg">
          <Shield className="w-6 h-6 text-foreground" />
        </div>
        <span className="text-xl font-bold text-foreground tracking-tight">
          TIPDANA
        </span>
      </div>

      {/* Main Title - Thai */}
      <h1
        className="font-thai text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-foreground opacity-0 animate-fade-in"
        style={{ animationDelay: "100ms" }}
      >
        4 เว็บคาสิโนออนไลน์ที่เชื่อถือได้มากที่สุดในไทย 2026
      </h1>

      {/* Subtitle - Thai */}
      <p
        className="font-thai text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 opacity-0 animate-fade-in"
        style={{ animationDelay: "200ms" }}
      >
        เจาะลึกเว็บตรง ไม่ผ่านเอเย่นต์ มั่นใจ 100% ตรวจสอบโดยพิม
      </p>

      {/* Trust Badge */}
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border opacity-0 animate-fade-in"
        style={{ animationDelay: "300ms" }}
      >
        <CheckCircle className="w-4 h-4 text-primary" />
        <span className="font-thai text-sm font-medium text-foreground">
          ตรวจสอบและยืนยันโดยพิมแล้ว
        </span>
      </div>
    </header>
  );
};

export default Header;
