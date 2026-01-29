import { ExternalLink, Flame, Gift, Clock, CreditCard, Bitcoin, Wallet, Building2 } from "lucide-react";

interface CasinoCardProps {
  rank: number;
  name: string;
  tagline: string;
  logo: string;
  badge: string;
  badgeType: "rank1" | "deposit" | "vip" | "crypto" | "event";
  bonusInfo: string;
  features: string[];
  pimNote: string;
  paymentMethods: readonly ("promptpay" | "bank" | "crypto")[];
  buttonText: string;
  link: string;
  isEvent?: boolean;
  eventTitle?: string;
  eventPeriod?: string;
}

const badgeStyles = {
  rank1: "badge-rank",
  deposit: "badge-local",
  vip: "badge-vip",
  crypto: "badge-crypto",
  event: "badge-hot",
};

const PaymentIcon = ({ type }: { type: "promptpay" | "bank" | "crypto" }) => {
  const icons = {
    promptpay: <Wallet className="w-4 h-4" />,
    bank: <Building2 className="w-4 h-4" />,
    crypto: <Bitcoin className="w-4 h-4" />,
  };
  const labels = {
    promptpay: "PromptPay",
    bank: "Bank Transfer",
    crypto: "Crypto",
  };
  return (
    <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
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
}: CasinoCardProps) => {
  return (
    <div
      className={`${isEvent ? "casino-card-event animate-pulse-hot" : "casino-card"} p-6 opacity-0 animate-fade-in`}
      style={{ animationDelay: `${rank * 150}ms` }}
    >
      {/* Event Banner */}
      {isEvent && eventTitle && (
        <div className="mb-4 -mx-6 -mt-6 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white">
          <div className="flex items-center gap-2 justify-center">
            <Flame className="w-5 h-5 animate-pulse" />
            <span className="font-bold text-sm">{eventTitle}</span>
            <Flame className="w-5 h-5 animate-pulse" />
          </div>
          {eventPeriod && (
            <p className="text-xs text-center mt-1 opacity-90 font-thai">{eventPeriod}</p>
          )}
        </div>
      )}

      {/* Header: Logo + Rank + Name + Badge */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          {/* Casino Logo */}
          <div className="w-16 h-16 rounded-xl bg-muted/50 flex items-center justify-center overflow-hidden flex-shrink-0 border border-border">
            <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain p-1" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full gradient-gold flex items-center justify-center font-bold text-sm text-foreground shadow-md flex-shrink-0">
                {rank}
              </div>
              <h3 className="text-xl font-bold text-foreground">{name}</h3>
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">{tagline}</p>
          </div>
        </div>
        
        {/* Badge */}
        <span
          className={`${badgeStyles[badgeType]} px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap flex items-center gap-1.5`}
        >
          {badgeType === "event" && <Flame className="w-3.5 h-3.5" />}
          {badge}
        </span>
      </div>

      {/* Bonus Info */}
      <div className="mb-4 p-3 bg-muted/50 rounded-xl border border-border">
        <div className="flex items-center gap-2 mb-1">
          <Gift className="w-4 h-4 text-secondary" />
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Bonus</span>
        </div>
        <p className="font-thai font-semibold text-foreground">{bonusInfo}</p>
      </div>

      {/* Key Features */}
      <div className="mb-4 space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="feature-item font-thai">
            {feature}
          </div>
        ))}
      </div>

      {/* Pim's Note */}
      <div className="pim-note mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full badge-pim flex items-center justify-center text-xs font-bold">พิม</div>
          <span className="text-xs font-semibold text-secondary">Pim's Note</span>
        </div>
        <p className="font-thai text-sm text-muted-foreground italic">"{pimNote}"</p>
      </div>

      {/* Payment Methods */}
      <div className="flex flex-wrap gap-2 mb-5">
        {paymentMethods.map((method) => (
          <PaymentIcon key={method} type={method} />
        ))}
      </div>

      {/* CTA Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-cta w-full flex items-center justify-center gap-2 font-thai"
      >
        {buttonText}
        <ExternalLink className="w-5 h-5" />
      </a>
    </div>
  );
};

export default CasinoCard;
