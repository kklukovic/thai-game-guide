import { ChevronDown, Send } from "lucide-react";

const TELEGRAM_URL = "https://t.me/+VvAuDpNKH4I4OTg0";

const MobileDock = ({ language = "th" }: { language?: "th" | "en" }) => {
  const en = language === "en";

  return (
    <div className="mobile-dock sm:hidden" role="navigation" aria-label={en ? "Quick links" : "ลิงก์ด่วน"}>
      <a href="#picks" className="mobile-dock-primary">
        <span className="font-thai">{en ? "See picks" : "ดูรายการ"}</span>
        <ChevronDown className="h-4 w-4" />
      </a>
      <a
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-dock-secondary"
        aria-label={en ? "Open Pim's Telegram" : "เปิด Telegram ของพิม"}
      >
        <Send className="h-4 w-4" />
      </a>
    </div>
  );
};

export default MobileDock;
