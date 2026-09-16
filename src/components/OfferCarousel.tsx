import { useEffect, useState } from "react";
import { ArrowDown, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export type FeaturedOffer = {
  eyebrow: string;
  title: string;
  description: string;
  accent: string;
};

interface OfferCarouselProps {
  offers: FeaturedOffer[];
  language?: "th" | "en";
}

const OfferCarousel = ({ offers, language = "th" }: OfferCarouselProps) => {
  const [active, setActive] = useState(0);
  const en = language === "en";

  useEffect(() => {
    if (offers.length < 2) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % offers.length);
    }, 4800);
    return () => window.clearInterval(timer);
  }, [offers.length]);

  if (!offers.length) return null;

  const goPrevious = () => setActive((current) => (current - 1 + offers.length) % offers.length);
  const goNext = () => setActive((current) => (current + 1) % offers.length);

  return (
    <section className="feature-rotator" aria-label={en ? "Pim's featured picks" : "รายการเด่นของพิม"}>
      <div className="feature-rotator-glow" aria-hidden />
      <div className="relative z-10 grid gap-7 md:grid-cols-[1fr_auto] md:items-end">
        <div className="min-w-0">
          <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-700">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span className="font-thai">{en ? "Pim's update" : "อัปเดตจากพิม"}</span>
          </div>

          <div key={active} className="animate-fade-in">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80 backdrop-blur">
                {offers[active].eyebrow}
              </span>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: offers[active].accent }} />
            </div>
            <h2 className="max-w-2xl font-display text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-[34px]">
              {offers[active].title}
            </h2>
            <p className="mt-3 max-w-2xl font-thai text-[14px] leading-7 text-white/70 sm:text-[15px]">
              {offers[active].description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 md:justify-end">
          <a
            href="#picks"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-4 font-thai text-[13px] font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-50"
          >
            {en ? "See the list below" : "ดูรายการด้านล่าง"}
            <ArrowDown className="h-4 w-4" />
          </a>
          <button type="button" onClick={goPrevious} className="rotator-icon-button" aria-label={en ? "Previous offer" : "โปรก่อนหน้า"}>
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button type="button" onClick={goNext} className="rotator-icon-button" aria-label={en ? "Next offer" : "โปรถัดไป"}>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="relative z-10 mt-7 flex gap-2" aria-label={en ? "Offer slides" : "สไลด์โปร"}>
        {offers.map((offer, index) => (
          <button
            key={offer.eyebrow}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`${en ? "Show" : "แสดง"} ${offer.eyebrow}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${index === active ? "w-10 bg-amber-300" : "w-4 bg-white/25 hover:bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default OfferCarousel;
