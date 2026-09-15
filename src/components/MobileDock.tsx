import { ChevronDown, Send } from "lucide-react";

const TELEGRAM_URL = "https://t.me/+VvAuDpNKH4I4OTg0";

const MobileDock = () => (
  <div className="mobile-dock sm:hidden" role="navigation" aria-label="Quick links">
    <a href="#picks" className="mobile-dock-primary">
      <span className="font-thai">ดูรายการ</span>
      <ChevronDown className="h-4 w-4" />
    </a>
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="mobile-dock-secondary"
      aria-label="Open Pim's Telegram"
    >
      <Send className="h-4 w-4" />
    </a>
  </div>
);

export default MobileDock;
