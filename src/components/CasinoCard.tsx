import { ExternalLink, Star, Shield, Zap, Bitcoin } from "lucide-react";

interface CasinoCardProps {
  rank: number;
  name: string;
  label: string;
  labelType: "local" | "slots" | "vip" | "crypto";
  thaiDetail: string;
  buttonText: string;
  link: string;
}

const labelStyles = {
  local: "badge-local",
  slots: "badge-slots",
  vip: "badge-vip",
  crypto: "badge-crypto",
};

const labelIcons = {
  local: Shield,
  slots: Zap,
  vip: Star,
  crypto: Bitcoin,
};

const CasinoCard = ({
  rank,
  name,
  label,
  labelType,
  thaiDetail,
  buttonText,
  link,
}: CasinoCardProps) => {
  const Icon = labelIcons[labelType];

  return (
    <div
      className="casino-card p-6 opacity-0 animate-fade-in"
      style={{ animationDelay: `${rank * 150}ms` }}
    >
      {/* Rank Badge */}
      <div className="absolute top-4 left-4 w-10 h-10 rounded-full gradient-gold flex items-center justify-center font-bold text-lg text-primary-foreground shadow-gold">
        {rank}
      </div>

      {/* Label Badge */}
      <div className="flex justify-end mb-4">
        <span
          className={`${labelStyles[labelType]} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5`}
        >
          <Icon className="w-3.5 h-3.5" />
          {label}
        </span>
      </div>

      {/* Casino Name */}
      <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">
        {name}
      </h3>

      {/* Thai Description */}
      <p className="font-thai text-muted-foreground text-base mb-6 leading-relaxed">
        {thaiDetail}
      </p>

      {/* CTA Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-cta w-full flex items-center justify-center gap-2 font-thai text-lg"
      >
        {buttonText}
        <ExternalLink className="w-4 h-4" />
      </a>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </div>
  );
};

export default CasinoCard;
