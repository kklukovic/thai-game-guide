import { Send } from "lucide-react";

const TELEGRAM_URL = "https://t.me/+VvAuDpNKH4I4OTg0";

type Language = "th" | "en";

const TopNav = ({ language = "th" }: { language?: Language }) => {
  const isEnglish = language === "en";

  return (
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
          <a href="#picks" className="nav-link hidden sm:inline-flex">
            {isEnglish ? "Pim's picks" : "รายการที่พิมเลือก"}
          </a>
          <a href="#about-pim" className="nav-link hidden md:inline-flex">
            {isEnglish ? "About Pim" : "เกี่ยวกับพิม"}
          </a>

          <div className="inline-flex items-center rounded-full border border-border/80 bg-white/70 p-0.5 text-[10px] font-bold shadow-sm backdrop-blur" aria-label="Language">
            <a
              href="/"
              aria-current={!isEnglish ? "page" : undefined}
              className={`rounded-full px-2.5 py-1.5 transition ${!isEnglish ? "bg-[#352131] text-white" : "text-muted-foreground hover:text-foreground"}`}
            >
              TH
            </a>
            <a
              href="/en"
              aria-current={isEnglish ? "page" : undefined}
              className={`rounded-full px-2.5 py-1.5 transition ${isEnglish ? "bg-[#352131] text-white" : "text-muted-foreground hover:text-foreground"}`}
            >
              EN
            </a>
          </div>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="telegram-mini-button"
          >
            <Send className="h-3.5 w-3.5" />
            <span className="hidden lg:inline">Telegram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
