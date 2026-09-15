import { CheckCircle2, Sparkles } from "lucide-react";
import "./HeaderPhoto.css";

const Header = () => {
  return (
    <header id="top" className="relative overflow-hidden pt-6 md:pt-8">
      <div className="hero-shell">
        <div className="hero-copy-block">
          <div className="hero-kicker">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Editor's Pick · 2026</span>
          </div>

          <h1 className="mt-5 max-w-3xl font-display text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-[42px] md:text-[54px] lg:text-[62px]">
            5 คาสิโนออนไลน์ที่เชื่อถือได้มากที่สุดในไทย 2026
          </h1>

          <p className="mt-5 max-w-2xl font-thai text-[15px] leading-7 text-muted-foreground md:text-[17px] md:leading-8">
            เจาะลึกเว็บตรง ไม่ผ่านเอเย่นต์ มั่นใจ 100% ตรวจสอบโดยพิม
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <div className="hero-trust-pill">
              <CheckCircle2 className="h-4 w-4" />
              <span className="font-thai">ตรวจสอบและยืนยันโดยพิมแล้ว</span>
            </div>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 border-t border-border/70 pt-6">
            <div>
              <div className="font-display text-xl font-semibold text-foreground">5</div>
              <div className="mt-1 font-thai text-[11px] leading-5 text-muted-foreground">รายการหลัก</div>
            </div>
            <div>
              <div className="font-display text-xl font-semibold text-foreground">TH</div>
              <div className="mt-1 font-thai text-[11px] leading-5 text-muted-foreground">ข้อมูลภาษาไทย</div>
            </div>
            <div>
              <div className="font-display text-xl font-semibold text-foreground">2026</div>
              <div className="mt-1 font-thai text-[11px] leading-5 text-muted-foreground">อัปเดตล่าสุด</div>
            </div>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo hero-photo-backdrop" style={{ backgroundImage: "url('/pim-resort.jpg')" }} aria-hidden />
          <div className="hero-portrait-frame">
            <img className="hero-portrait-image" src="/pim-resort.jpg" alt="Pim at a seaside resort" />
          </div>
          <div className="hero-photo-caption">
            <span className="hero-photo-dot" />
            <span className="font-thai">Pim · Thailand</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
