import { Shield, Lock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 pt-8 pb-6 px-4 border-t border-border/70">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-muted/60 text-muted-foreground">
          <Shield className="w-3.5 h-3.5" />
          <span className="text-xs font-semibold tracking-wide">Responsible Gaming</span>
        </div>

        <p className="font-thai text-[13px] text-muted-foreground mb-5 max-w-xl mx-auto leading-relaxed">
          การพนันออนไลน์มีความเสี่ยง โปรดเล่นอย่างมีสติ
          เว็บไซต์นี้มีไว้สำหรับผู้ที่มีอายุ 18 ปีขึ้นไปเท่านั้น
        </p>

        <div className="flex items-center justify-center gap-5 mb-5">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Lock className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-medium">SSL Secured</span>
          </div>
          <div className="w-px h-3 bg-border" />
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Shield className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-medium">Verified Partners</span>
          </div>
        </div>

        <p className="text-[11px] text-muted-foreground/60">
          © {currentYear} TIPDANA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
