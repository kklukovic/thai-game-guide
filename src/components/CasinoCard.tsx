import { ExternalLink, Flame, Gift, Bitcoin, Wallet, Building2, Sparkles, Check, Quote } from "lucide-react";

interface CasinoCardProps {
  rank: number;
  name: string;
  tagline: string;
  logo: string;
  logoBgDark?: boolean;
  badge: string;
  badgeType: "rank1" | "deposit" | "vip" | "crypto" | "event" | "new";
  bonusInfo: string;
  features: string[];
  pimNote: string;
  paymentMethods: readonly ("promptpay" | "bank" | "crypto")[];
  buttonText: string;
  link: string;
  isEvent?: boolean;
  eventTitle?: string;
  eventPeriod?: string;
  isFeatured?: boolean;
}

const badgeStyles = {
  rank1: "badge-rank",
  deposit: "badge-local",
  vip: "badge-vip",
  crypto: "badge-crypto",
  event: "badge-hot",
  new: "badge-new",
};

const PaymentIcon = ({ type }: { type: "promptpay" | "bank" | "crypto" }) => {
  const icons = {
    promptpay: <Wallet className="w-3.5 h-3.5" />,
    bank: <Building2 className="w-3.5 h-3.5" />,
    crypto: <Bitcoin className="w-3.5 h-3.5" />,
  };
  const labels = {
    promptpay: "PromptPay",
    bank: "Bank Transfer",
    crypto: "Crypto",
  };
  return (
    <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground bg-muted/70 px-2.5 py-1 rounded-full border border-border/60">
      {icons[type]}
      <span>{labels[type]}</span>
    </div>
  );
};

const CasinoCard = ({
  rank,
  name,
  tagline,
  logo,
  logoBgDark,
  badge,
  badgeType,
  bonusInfo,
  features,
  pimNote,
  paymentMethods,
  buttonText,
  link,
  isEvent,
  eventTitle,
  eventPeriod,
  isFeatured,
}: CasinoCardProps) => {
  const cardClass = isFeatured
    ? "casino-card-featured"
    : isEvent
      ? "casino-card-event"
      : "casino-card";

  return (
    <div className={cardClass}>
      {/* Event Banner */}
      {isEvent && eventTitle && (
        <div className="rounded-t-3xl px-5 py-2.5 bg-gradient-to-r from-[hsl(12_75%_55%)] to-[hsl(22_85%_55%)] text-white">
          <div className="flex items-center gap-2 justify-center flex-wrap">
            <Flame className="w-4 h-4" />
            <span className="font-semibold text-[13px] font-thai">{eventTitle}</span>
          </div>
          {eventPeriod && (
            <p className="text-[11px] text-center mt-0.5 opacity-90 font-thai">{eventPeriod}</p>
          )}
        </div>
      )}

      {/* Featured ribbon */}
      {isFeatured && (
        <div className="absolute -top-3 left-5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase gradient-gold text-foreground shadow-md">
          ⭐ Top Pick
        </div>
      )}

      <div
        className="p-5 md:p-6 animate-fade-in motion-reduce:animate-none"
        style={{ animationDelay: `${rank * 100}ms` }}
      >
        {/* Top row: logo + rank + name + badge */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className={`relative w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0 border border-border ${
                logoBgDark ? "bg-foreground" : "bg-muted/40"
              }`}
            >
              <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain p-1.5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <div className="inline-flex items-center justify-center min-w-[22px] h-[22px] px-1.5 rounded-md bg-foreground text-background font-bold text-[11px]">
                  #{rank}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground tracking-tight truncate">
                  {name}
                </h3>
              </div>
              <p className="text-[12px] text-muted-foreground font-medium">{tagline}</p>
            </div>
          </div>

          <span
            className={`${badgeStyles[badgeType]} px-2.5 py-1 rounded-full text-[10px] font-semibold whitespace-nowrap flex items-center gap-1 flex-shrink-0`}
          >
            {badgeType === "event" && <Flame className="w-3 h-3" />}
            {badgeType === "new" && <Sparkles className="w-3 h-3" />}
            <span className="font-thai">{badge}</span>
          </span>
        </div>

        {/* Bonus */}
        <div className="bonus-panel mb-3.5">
          <div className="flex items-center gap-2 mb-0.5">
            <Gift className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Bonus</span>
          </div>
          <p className="font-thai font-semibold text-foreground text-[14px] leading-snug">{bonusInfo}</p>
        </div>

        {/* Features - 2-col on desktop */}
        <div className="mb-3.5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
          {features.map((feature, index) => (
            <div key={index} className="feature-item font-thai text-[13px]">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={3} />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Pim's Note - editorial */}
        <div className="pim-note mb-4">
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-full badge-pim flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5 font-thai">
              พิม
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 mb-0.5">
                <Quote className="w-3 h-3 text-secondary" />
                <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">
                  Pim's Note
                </span>
              </div>
              <p className="font-thai text-[13px] text-foreground/75 italic leading-relaxed">
                {pimNote}
              </p>
            </div>
          </div>
        </div>

        {/* Payments */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {paymentMethods.map((method) => (
            <PaymentIcon key={method} type={method} />
          ))}
        </div>

        {/* CTA */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta w-full font-thai"
        >
          {buttonText}
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default CasinoCard;
