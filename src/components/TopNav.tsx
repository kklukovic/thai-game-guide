import { Send } from "lucide-react";

const TELEGRAM_URL = "https://t.me/+VvAuDpNKH4I4OTg0";

const TopNav = () => (
  <div className="sticky top-0 z-40 border-b border-white/60 bg-[hsl(var(--background)/0.86)] backdrop-blur-xl">
    <div className="mx-auto flex h-14 max-w-[1180px] items-center justify-between px-4 sm:px-6">
      <a href="#top" className="flex items-center gap-2.5">
        <span className="brand-orb">P</span>
        <div className="leading-none">
          <div className="font-display text-[15px] font-semibold tracking-[-0.02em] text-foreground">Pim's Picks</div>
          <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Thailand · 2026</div>
        </div>
      </a>

      <div className="flex items-center gap-1.5 sm:gap-3">
        <a href="#picks" className="nav-link hidden sm:inline-flex">รายการที่พิมเลือก</a>
        <a href="#about-pim" className="nav-link hidden md:inline-flex">เกี่ยวกับพิม</a>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="telegram-mini-button"
        >
          <Send className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Telegram</span>
        </a>
      </div>
    </div>
  </div>
);

export default TopNav;
