import { Lock, Shield } from "lucide-react";

const Footer = ({ language = "th" }: { language?: "th" | "en" }) => {
  const currentYear = new Date().getFullYear();
  const en = language === "en";

  return (
    <footer className="pb-10 pt-4 md:pb-12">
      <div className="rounded-[24px] border border-border/80 bg-white/55 px-6 py-7 text-center backdrop-blur-sm md:px-8">
        <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
          <Shield className="h-4 w-4" />
        </div>

        <p className="font-display text-[15px] font-medium text-foreground">Responsible Gaming</p>
        <p className="mx-auto mt-2 max-w-xl font-thai text-[12px] leading-6 text-muted-foreground">
          {en
            ? "Online gambling involves risk. Please play responsibly. This page is intended only for adults aged 18 and over."
            : "การพนันออนไลน์มีความเสี่ยง โปรดเล่นอย่างมีสติ เว็บไซต์นี้มีไว้สำหรับผู้ที่มีอายุ 18 ปีขึ้นไปเท่านั้น"}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-[10px] font-medium text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Lock className="h-3.5 w-3.5 text-primary" /> SSL Secured</span>
          <span className="h-3 w-px bg-border" />
          <span className="inline-flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-primary" /> Partner links clearly presented</span>
        </div>

        <p className="mt-5 text-[10px] text-muted-foreground/60">© {currentYear} TIPDANA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
