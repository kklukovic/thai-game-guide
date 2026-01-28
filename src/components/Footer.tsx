import { Shield, Lock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 py-8 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        {/* Disclaimer */}
        <div className="flex items-center justify-center gap-2 mb-4 text-muted-foreground">
          <Shield className="w-4 h-4" />
          <span className="text-sm font-medium">Responsible Gaming</span>
        </div>

        <p className="font-thai text-sm text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
          การพนันออนไลน์มีความเสี่ยง โปรดเล่นอย่างมีสติ
          เว็บไซต์นี้มีไว้สำหรับผู้ที่มีอายุ 18 ปีขึ้นไปเท่านั้น
        </p>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Lock className="w-4 h-4 text-secondary" />
            <span className="text-xs">SSL Secured</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-xs">Verified Partners</span>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground/60">
          © {currentYear} TIPDANA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
