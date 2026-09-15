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
    promptpay: <Wallet className="h-3.5 w-3.5" />,
    bank: <Building2 className="h-3.5 w-3.5" />,
    crypto: <Bitcoin className="h-3.5 w-3.5" />,
  };
  const labels = {
    promptpay: "PromptPay",
    bank: "Bank Transfer",
    crypto: "Crypto",
  };

  return (
    <div className="payment-chip">
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
    <article className={cardClass}>
      {isFeatured && <div className="featured-line" aria-hidden />}

      {isEvent && eventTitle && (
        <div className="event-strip">
          <div className="flex items-center justify-center gap-2">
            <Flame className="h-4 w-4" />
            <span className="font-thai text-[13px] font-semibold">{eventTitle}</span>
          </div>
          {eventPeriod && (
            <p className="mt-0.5 text-center font-thai text-[11px] opacity-80">{eventPeriod}</p>
          )}
        </div>
      )}

      <div className="grid md:grid-cols-[92px_1fr]">
        <div className="card-rank-rail">
          <div className="card-rank-number">{String(rank).padStart(2, "0")}</div>
          <div className="card-rank-line" />
          <div className="hidden -rotate-90 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground md:block">
            Pim's list
          </div>
        </div>

        <div
          className="animate-fade-in p-5 motion-reduce:animate-none md:p-7"
          style={{ animationDelay: `${rank * 70}ms` }}
        >
          <div className="mb-5 flex items-start justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3.5">
              <div className={`casino-logo ${logoBgDark ? "bg-foreground" : "bg-white"}`}>
                <img src={logo} alt={`${name} logo`} className="h-full w-full object-contain p-1.5" />
              </div>

              <div className="min-w-0">
                <h3 className="truncate font-display text-[22px] font-semibold tracking-[-0.025em] text-foreground md:text-[25px]">
                  {name}
                </h3>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.11em] text-muted-foreground">{tagline}</p>
              </div>
            </div>

            <span className={`${badgeStyles[badgeType]} status-badge`}>
              {badgeType === "event" && <Flame className="h-3 w-3" />}
              {badgeType === "new" && <Sparkles className="h-3 w-3" />}
              <span className="font-thai">{badge}</span>
            </span>
          </div>

          <div className="offer-band mb-5">
            <div className="mb-1.5 flex items-center gap-2">
              <Gift className="h-3.5 w-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-[0.16em]">Current offer</span>
            </div>
            <p className="font-thai text-[15px] font-semibold leading-6 text-foreground">{bonusInfo}</p>
          </div>

          <div className="mb-5 grid grid-cols-1 gap-x-5 gap-y-2.5 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="feature-item font-thai text-[13px]">
                <span className="feature-check">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="pim-note mb-5">
            <div className="flex items-start gap-3">
              <div
                className="pim-note-avatar"
                style={{ backgroundImage: "url('/pim-beach.jpg')" }}
                aria-hidden
              />
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-1.5">
                  <Quote className="h-3 w-3 text-secondary" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-secondary">Pim's note</span>
                </div>
                <p className="font-thai text-[13px] leading-6 text-foreground/75">{pimNote}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-1.5">
              {paymentMethods.map((method) => (
                <PaymentIcon key={method} type={method} />
              ))}
            </div>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta min-w-[180px] font-thai"
            >
              <span>{buttonText}</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CasinoCard;
